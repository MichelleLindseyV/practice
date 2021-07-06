//Take in any number of command line arguments, all strings, and reverse them before outputting to console
//DO NOT use Array.prototype.reverse or Array.prototype.join


const reverse = (arg) => {
  for (val of arg) {
    console.log(val);
  }
};

reverse(process.argv.slice(2));