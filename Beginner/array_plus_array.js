// Challenge 22
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        const arr1Value = arr1[i];
        const arr2Value = arr2[i];
        const addedValue = arr1Value + arr2Value;

        sum += addedValue;
    }
    return sum;
}
