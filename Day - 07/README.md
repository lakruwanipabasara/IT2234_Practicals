# IT2234_Practicals
Web Services and Server Technologies - Practical Sessions

(01) asynpro.js

fs.readFile(...) --> Starts reading the file (asynchronously).
console.log("File reading is done...") --> Runs immediately after the read starts.
console.log(data) --> Runs later, after file is successfully read.
console.error(err) --> Runs if there's a problem reading the file.

![SS1](https://github.com/user-attachments/assets/35ba6404-293c-4c93-b8ae-990e3138c57b)

(02)promise.js

 1.const fs = require('fs').promises;
 
 This imports the Promise-based version of Node.js's File System (fs) module.

 Now you can use fs.readFile() which returns a Promise, instead of using a callback.

 2.const readFile = (filepath) => { ... }
This is a function that takes a file path as input (filepath).

However, it does not use that parameter.

It always reads from 'file1.txt' (hardcoded), not the input file.

 3.return fs.readFile('file1.txt', 'utf8');
This line starts reading 'file1.txt' in UTF-8 encoding.

It returns a Promise, which will:

resolve with the file content if successful,

or reject with an error if it fails.

 4.readFile('file.txt')...
You call readFile() with 'file.txt', but again — it still reads 'file1.txt' because of the hardcoded path.

 6.then((data) => { console.log(data); })
If the file is read successfully, it logs the file content.

 8.catch((err) => { console.error(err); })
If there's an error (e.g. file not found), it catches and logs the error message.

This .catch() is useful especially when dealing with multiple asynchronous file reads, since all errors can be handled in one place.

![SS 2](https://github.com/user-attachments/assets/bd93f8b3-78e0-458b-b1f2-22226cafa5f5)

(03)asynawait.js

async/await --> Makes asynchronous code look more like regular sync code.

fs.promises.readFile --> Reads a file and returns a promise with its content.

Promise.allSettled --> Waits for all promises to settle (succeed or fail), without short-circuiting on errors.

result.status --> Tells if the promise was fulfilled or rejected.

result.value / result.reason --> Contains the result (file content) or the error (why it failed).

![SS 3](https://github.com/user-attachments/assets/b2bf0da1-a9b3-4d2e-bfc5-dd446097069c)

![SS 4](https://github.com/user-attachments/assets/68d35edc-d2d0-49f0-b492-4941e30127e6)

![SS 5](https://github.com/user-attachments/assets/a6fd7d7e-25b1-49a3-9f1f-674c2a063402)

![SS 6](https://github.com/user-attachments/assets/4f14d53e-5b6d-4990-a567-9187839bfca0)








