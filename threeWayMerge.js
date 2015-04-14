var maxNumber = process.argv[2];
function getRandomArbitrary(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}


var arr1 = [getRandomArbitrary(1, 5)],
	arr2 = [getRandomArbitrary(1, 5)],
	arr3 = [getRandomArbitrary(1, 5)];
for(var i = 0; i < maxNumber; i++) {
	arr1.push(getRandomArbitrary(1, 5) + arr1[i]);
	arr2.push(getRandomArbitrary(1, 5) + arr2[i]);
	arr3.push(getRandomArbitrary(1, 5) + arr3[i]);
}

Array.prototype.merge2way = function(arr2) {
	var result = [],
		i = j = k = 0;
	while(i < this.length && j < arr2.length) {
		if(this[i] <= arr2[j]) {
			result[k++] = this[i++];
		} else {
			result[k++] = arr2[j++];
		}
	}

	while(i < this.length) {
		result[k++] = this[i++];
	}

	while(j < arr2.length) {
		result[k++] = arr2[j++];
	}
	return result;
}

// Merge sorted using 2way merge twice
Array.prototype.mergeSort = function(arr2, arr3) {
	return this.merge2way(arr2.merge2way(arr3));
}

// Combine first, then sort
Array.prototype.combineSort = function(arr2, arr3) {
	return this.join(arr2, arr3).sort(function(a, b) {
		return a - b;
	});
}

// Compare all 3 lists at the same time, and then 2 if one is exhausted
Array.prototype.merge3Way = function(arr2, arr3) {
	var result = [],
		i = j = k = l = 0;

	while(i < this.length && j < arr2.length && k < arr3.length) {
		if( (this[i] <= arr2[j]) && (this[i] <= arr3[k]) ) {
			result[l++] = this[i++];
		}
		else if( (arr2[j] <= this[i]) && (arr2[j] <= arr3[k]) ) {
			result[l++] = arr2[j++];
		} else {
			result[l++] = arr3[k++];
		}
	}

	if(i < this.length && j < arr2.length) {
		return result.concat(this.slice(i).merge2way(arr2.slice(j)));
	} else if (i < this.length && k < arr3.length) {
		return result.concat(this.slice(i).merge2way(arr3.slice(k)));
	} else {
		return result.concat(arr2.slice(j).merge2way(arr3.slice(k)));
	}
}

var now = Date.now();
var result1 = arr1.mergeSort(arr2, arr3).join(', ');
console.log(Date.now() - now);

now = Date.now();
var result2 = arr1.combineSort(arr2, arr3).join(', ');
console.log(Date.now() - now);

now = Date.now();
var result3 = arr1.merge3Way(arr2, arr3).join(', ');
console.log(Date.now() - now);
