module.exports = {
    PI: 3.14,
    min: function() {
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            if(e < min) {
                min = e;
            }
        });
        return min;
    },
    max: function() {
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            if(e > max) {
                max = e;
            }
        });

        return max;
    }

}

// 에러~~!
// exports.a = 10;

