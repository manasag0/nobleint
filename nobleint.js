let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;  
  return data[idx - 1];
}

// n>=p
// count++
// if exicest 1 else -1;

let n = parseInt(readLine());
let a =[]
for (let i = 0; i<n;i++){
 a[i]=parseInt(readLine())
}
let result = -1;
for (let i =0;i<n; i++){
    let maxcount=0;
    P= a[i]
    for(let j = 0; j<n;j++){
        if (a[j]>P){
           maxcount++;
        }
    }
    if(maxcount==P){
        result = 1;
        break;
    }
}
console.log(result)
