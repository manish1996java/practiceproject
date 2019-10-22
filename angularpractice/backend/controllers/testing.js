// var arr = [];
// for(let i=0;i<12;i++){
//     let a;
// 	if(i == 11){
//         a = new Array(3);    
//     }else{
//         a = new Array(7);
//     }
//     arr.push(a);
// }
// console.log(arr);


// ///////////////
// function Seat(){
//     this.filled = true;
// }
// //////////////



// //////////////////
// function booking(noseats){ 
//     var isaval = seatavaliable(noseats);
//     if(isaval>=7){
        
//     }else{
//         saveSeatInDB(isaval);
//     }
// }
// ///////////////////


// function seatavaliable(seatsave){
//     let counter = seatsave;
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;arr[i].length;j++){
//             if(!arr[i][j]){
//                 if(counter>0){
//                     arr.push(new Seat());
//                     counter--;
//                 }
//             }
//         }
//     }
// }

// function saveSeatInDB(noofseat){

// }




var coach = {
    "seatsAvalible": 80,
    "seats":[
        [1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0],
        [0,1,0,1,0,1,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,1],
        [0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0],
        [0,0,0,0,0,1,0],
        [0,0,0,],
    ]
}




let seat = 5;
let isblank = false;
let firstiteration = false;
for(let i=0;i<coach["seats"].length-1-1;i++){
    let count = 0;
    for(let j=0;j<coach.seats[i].length;j++){
        if(coach["seats"][i][j]==0){
            isblank=true;
            count++;
            // console.log("i"+i+"j"+j);   
        }   
    }
    console.log(count);
    for(let j=0;j<coach.seats[i].length;j++){
        if(coach["seats"][i][j]==0){
            if(isblank && count<=seat){
                coach.seats[i][j] = 1;
                count--;
                // console.log(count);
                // console.log("i"+i+"j"+j);   
            }
        }   
    }
    isblank = false;
}
console.log(coach["seats"]);

    // console.log(coach["seats"]);

    // for(let i=0;i<coach["seats"].length-1-1;i++){
    //     for(let j=coach["seats"][i].length-1;j>coach.seats[i].length-1-1-1;j--){
    //         if(coach["seats"][i][j]==0){
    //             console.log("i"+i+"j"+j);
    //         }
    //     }
    // }

    // for(let j=coach["seats"][i].length-1;j>coach.seats[i].length-1-1-1;j--){
    //     if(coach["seats"][i][j]==0){
    //         console.log("i"+i+"j"+j);
    //     }
    // }
