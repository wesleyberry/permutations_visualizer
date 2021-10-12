function getPermutations(array, value) {
    let permutations = [];
    permutationHelper(0, array, permutations);
    permutationUpdateDom(permutations, value);
}

function permutationUpdateDom(permutations, value) {
    permutations.forEach((permutation, idx) => {
        $('#permutations').css({ 'grid-template-columns': `repeat(${value}, 1fr)` });
        let rowHeight = '100px'
        $('<div>').attr('id', idx).addClass('permutation').css({
            'height': rowHeight,
            'display': 'flex',
            'justify-content': 'space-around',
        }).appendTo(`#permutations`);

        permutation.forEach((num, j) => addBars(num, idx, j, permutation));
    });
}

function addBars(num, idx, j, permutation) {
    let color = (num  + 1) / permutation.length * 255;
    $('<div>').css({
        'background-color': `rgb(0, ${color}, ${color})`,
        'width': (100 / permutation.length - 5).toString() + '%',
        'height': ((num  + 1) / permutation.length * 100).toString() + '%'
    }).appendTo(`#${idx}`);
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

// Gets value from visualizer and populates h3 w/ value
$(document).on('input', '#slider', function() {
    $('#permutations').empty();
    let value = parseInt($(this).val());
    $('#slider_value').html(`Value: ${value}`);
    getPermutations(Array.from(Array(value).keys()), value);
});


getPermutations(Array.from(Array(3).keys()), 3);