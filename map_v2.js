//
Array.prototype.mymapv2 = function() {
    const resultArray = [];
    for (let index = 0; index < sample.length; index++) {
        callback(sample[index], index, sample);
    }
    return resultArray;
}
const sample = [1,2,3];
var output = sample.mymapv2(function(val, index, array) {
    console.log('val :', val, 'index :', index, 'array ;', array);
    return val*2
})
//