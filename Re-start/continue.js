for(let i=0; i<= 10; i++){
    if (i==7) {
        console.log("7 will not be print due to continue statement")
        continue;
    }
    console.log(i)
}

for(let i=0; i<=4;i++){
    for(let j=0; j<=4; j++){
        if (i==j) {
            continue
        }
        else if(i>j){
            continue
        }
        console.log(i,j)
    }
}
document.getElementsByClassName