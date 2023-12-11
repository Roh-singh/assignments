// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

/*const fs = require("fs");

function fileCleaner(filePath) {
    // let newdata = "";
    fs.readFile(filePath, "utf-8", function (err, data) {
        if (err) {
            console.log(`This is the error: ${err}`);
        } else {
            let newdata = data.replace(/\s+/g, " ");
            fs.writeFile(filePath, newdata, "utf-8", function (err) {
                if (err) {
                    console.log(`Error while writing to a.txt ${err}`);
                } else {
                    console.log(" done check a.txt");
                }
            });
        }
    });
   

} 
fileCleaner("medium/a.txt");*/

const fs = require("fs/promises");

function filereader(filePath) {
    return fs.readFile(filePath,"utf-8")
    .then(function (data) {
        data = data.replace(/\s+/g," ");
        return data;
    })
    .catch(function(err){
        return err;
    })    
};

function filewriter(filePath,newdata) {
    return fs.writeFile(filePath,newdata,"utf-8")
    .then(function(){
        console.log(newdata);
    })
    .catch(function(){
        console.log(newerr);
    })
}

function fileCleaner(filePath,newdata) {
    filereader(filePath).then(function (data) {
        return data
    })
    .then()
}


