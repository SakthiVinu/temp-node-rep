
// FS module - Async

// readFile() - used to read the file asynchronously this means that the event loop is not paused. The
// file reading operation will take place in the background. Once the read operation is done, the callback 
// function passed as the argument is invoked. This function has two arguments - error obj and content read
// from the file.
// readFile(<file-path>, <options>, <call-back function>)

// writeFile() - Used to write the contents into a file
// writeFile(<file-path>, <content>, <call-back function>)

const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    });
});


