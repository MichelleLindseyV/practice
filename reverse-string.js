//Take in any number of command line arguments, all strings, and reverse them before outputting to console
//DO NOT use Array.prototype.reverse or Array.prototype.join


const reverse = (arg) => {
  for (val of arg) {
    let reverseString = '';
    for (let i = val.length - 1; i >= 0; i--) {
      reverseString += val[i];
    }
    console.log(reverseString);
  }
};

reverse(process.argv.slice(2));