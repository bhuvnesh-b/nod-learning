const path = require('path')

//to see which separator in used in file paths
console.log(path.sep)

//to join path of a file or get its address
const filepath = path.join('/content/' , 'subfolder' , 'test.txt')
console.log(filepath)

//to get the base name of the file
const base = path.basename(filepath)
console.log(base)

//we can also get the absolute path of the file
const absolute = path.resolve(__dirname , 'content', 'subfolder' , 'test.txt')
console.log(absolute)