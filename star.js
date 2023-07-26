process.argv.forEach(function (val, index, array) {
    //console.log(index + ': ' + val);
});
let size = 0;
let line = 1;
let totalLine = 0;
let starMap = [];

size = parseInt(process.argv[2]);
let firstStartDec = 3*size;
totalLine = 4*size + 1;

for (let index = 0; index < totalLine; index++) {
    let emptyLine = [size*5 + 1];
    for (let index = 0; index < size*5 + 1; index++) {
        emptyLine [index] =  " ";
    }
    starMap.push(emptyLine);    
}
firstStartDec = starMap.length - 1 
for (let index = 0; index < starMap.length; index++) {
    if(index === 0){
        starMap[0][firstStartDec-size] = "*";
    }else{
        if(index < size){
            starMap[index][firstStartDec-index-size] = "*";
            starMap[index][firstStartDec+index-size] = "*";
        }
        if(index == size){
            for (let index2 = 0; index2 < starMap[index].length; index2++) {
                if(index2 <= (firstStartDec-size-size) || index2 >= (firstStartDec+size-size)){
                    starMap[index][index2] = "*";
                }
                
            }
        }
    }
}


starMap.forEach(element => {
    outLine = "";
    element.forEach(char => {
        outLine += char;
    });
    console.log(outLine);
});
//console.log(starMap);

// for (let starLine = 0; starLine < array.length; starLine++) {
//     for (let index = 0; index < firstStartDec; index++) {
//         starMap[0] += " ";
//     }
// }

// for (let index = 0; index < firstStartDec; index++) {
//     starMap[0] += " ";
// }
// starMap[0] += "*";
// console.log(starMap[0]);
