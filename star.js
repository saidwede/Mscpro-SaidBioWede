//console.log("***********");
process.argv.forEach(function (val, index, array) {
    //console.log(index + ': ' + val);
});
let size = 0;
let line = 1;
let totalLine = 0;
let starMap = [];

size = parseInt(process.argv[2]);
let firstStartDec = (6*size)/2;
totalLine = 4*size + 1;

for (let index = 0; index < size*2 +1; index++) {
    let emptyLine = [];
    for (let index0 = 0; index0 < size*6+1 ; index0++) {
        emptyLine[index0] = " ";
    }
    starMap.push(emptyLine);
}
//firstStartDec = starMap.length - 1 
for (let index = 0; index < starMap.length; index++) {
    if(index === 0){
        starMap[0][firstStartDec] = "*";
    }else{
        if(index < size){
            starMap[index][firstStartDec-index] = "*";
            starMap[index][firstStartDec+index] = "*";
        }
        if(index == size){
            for (let index2 = 0; index2 < starMap[index].length; index2++) {
                if(index2 <= (firstStartDec-index) || index2 >= (firstStartDec+index)){
                    starMap[index][index2] = "*";
                }
                
            }
        }
        if(index > size && index < size*2 +1){
            starMap[index][index-size] = "*";
            starMap[index][6*size - index + size] = "*";
        }
    }
}


starMap.forEach((element, i2) => {
    if( i2 < size*2 +1){
        outLine = "";
        element.forEach(char => {
            outLine += char;
        });
        console.log(outLine);
    }
});
starMap.reverse();
starMap.shift();
starMap.forEach((element, i2) => {
    if( i2 < size*2 +1){
        outLine = "";
        element.forEach(char => {
            outLine += char;
        });
        console.log(outLine);
    }
});
