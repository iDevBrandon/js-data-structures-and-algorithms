indexOf()
incluces

Linear Search Pseudocode

This function accepts an array and a value 
Loop throu the array and check if the currenct array element is equal to the value 
If it is, return the index at which the element is found 
If the value is never found, return -1


59. Linear Search Big O
O(1) Best 

O(n) Average 

O(n) Worst

60. Binary Search 
Binary search is a much faster form of search 
Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time 
Binary search only works on sorted arrays!!!

Divide and Conquer 
Left and Right 

61. Binary Search Pseudocode 
This function accepts a sorted array and a value 
Create a left pointer at the start of the array, and a right pointer at the end of the array 
WHile the left pointer comes before the right pointer:
    create a pointer in the middle 
    if you find the value you want, return the index
    if the value is too small, move the left pointer up
    If the value is too large, move the right pointer down
if you never find the value, return -1

