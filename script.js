// function check() {
//     let userInp = parseInt(document.querySelector("input").value);
//     let i;
//     for (i = 2; i < userInp; i++) {
//         if (userInp % i === 0) {
//             break;
//         }
//     }
//     if (i === userInp) {
//         alert("Prime Num");
//     } else {
//         alert("Not Prime Num");
//     }

// }



function isPrime(numb) {
    // let userInp = parseInt(document.querySelector("input").value);
    let i;
    for (i = 2; i < numb; i++) {
        if (numb % i === 0) {
            break;
        }
    }
    if (i === numb) {
      return true;
    } else {
       return false;
    }

}
for (let i =2; i <=100; i++){
    if(isPrime (i)){
        console.log(i)
    }
}