const reverseString = function(input_string) {
    let output_string = "";

    for(let i = 0; i < input_string.length; i++){
        output_string =output_string+ (input_string[input_string.length-1-i]);
    }
    return(output_string);


};

// Do not edit below this line
module.exports = reverseString;
