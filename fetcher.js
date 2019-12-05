// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)

const args = process.argv.slice(2);
const request = require('request');
const website = args[0]
const pathWrite = args[1]
let fs =require('fs')
//let writer = fs.createWriteStream(`${pathWrite}`)
request(`${website}`, () => {
  if(pathWrite){
    // fs.appendFile(`${pathWrite}`, `${website}`, err => {
    //   if (err) throw err
    //   console.log('an html file has been saved!')
    // })
    fs.writeFile(`${pathWrite}`, `${website}`, err=> {
      if (err) throw err;
      fs.stat(pathWrite, (err, stat) => {
        console.log("Downloaded and saved " +stat.size+ " bytes to " +pathWrite)
       })
    });
  }


});



    

