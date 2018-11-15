const length1 = 9;
const array1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const length2 = 10;
const array2=[1, 1, 3, 1, 2, 1, 3, 3, 3, 3 ]

function sockMerchant(n, ar) {
  let pairs = 0;
  ar.sort();
  console.log
  do{
      let i=0;
      if(ar[i]===ar[i+1]){
          console.log(`Array at start ${ar}`)
          pairs++;
          i=0;
          console.log(`pairs: ${pairs}: ar[${i}]: ${ar[i]}  ar[${i+1}] : ${ar[i+1]}`);
          ar.splice(i,2)
          console.log(`Array ${ar}`)
      }else{
          ar.splice(i,1)
          console.log(`Array ${ar}`)

      }

  }while(ar.length>0)
  return pairs;
}

console.log(sockMerchant(length1, array1));
// console.log(sockMerchant(length2, array2));

// if (ar[i] === ar[j]) {
//     pairs++;
//     console.log(`pairs: ${pairs}: ar[${i}]: ${ar[i]}  ar[${j}] : ${ar[j]}`);
//     ar.splice(i, 1);
//     ar.splice(j - 1, 1);
//     console.log(`ar: ${ar}`)
//   }