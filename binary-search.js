function binarySearch(items, element) {
    var start = 0;
    var end = items.length;

    while (start <= end) {
        var midIndex = start + Math.floor((end - start) / 2);
        if (items[midIndex] === element) {
            return midIndex;
        }
        if (items[midIndex] > element) {
            end = midIndex - 1
        } else {
            start = midIndex + 1
        }
    }
    return -1;

}

function binarySearchRec(items, element,s,e) {
    var start = s || 0;
    var end = e || items.length;

    if (start > end) return -1;
    
    var midIndex = start + Math.floor((end - start) / 2);
    
    if (items[midIndex] === element) {
        return midIndex;
    }
    
    if (items[midIndex] > element) {
        end = midIndex - 1
    } else {
        start = midIndex + 1
    }

    return binarySearchRec(items,element,start,end);
}

var r = binarySearchRec([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);
console.log(r);
