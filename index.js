function getPermutations(array) {
    let permutations = [];
    permutationHelper(0, array, permutations);
    return permutations;
}

function permutationHelper(i, arr, permutations) {
    if (i === arr.length - 1) permutations.push(arr.slice());
    else {
        for (let j = i; j < arr.length; j++) {
            swap(i, j, arr);
            permutationHelper(i + 1, arr, permutations);
            swap(i, j, arr);
        }
    }
}

function swap(i, j, arr) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}