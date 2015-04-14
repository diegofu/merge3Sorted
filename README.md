# Merge 3 Sorted Arrays

A test to find the fastest way to merge 3 sorted arrays

  - mergeSort: Merge 2 of the sorted array first, and merge the result of that with the last sorted array
  - combineSort: Combine all 3 arrays, and use javascript default sort function to sort
  - merge3Way: Merge 3 of the sorted arrays all at once, then merge sort what are remained

Also a demonstration of performance improvement can result in significant more complicated code

### How to run
Make sure you have node install
```sh
node threeWayMerge.js $1
```
$1 is the size of the arrays
