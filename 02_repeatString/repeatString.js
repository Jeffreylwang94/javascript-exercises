const repeatString = function(input_string,repetitions) {
    let output ="";
    if (repetitions < 0) return "ERROR";
    for (let i = 1; i<=repetitions; i++){
        output = output + input_string;
    } 
    return output;
};

// Do not edit below this line
module.exports = repeatString;
