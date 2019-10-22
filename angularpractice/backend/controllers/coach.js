const Coach = require('../model/coach');

// save coach to mongodb
const saveCoach = () =>{
    var coach = new Coach({
        seats:[
            [1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,],
        ],
        seatsAval: 80,
    });
    coach.save().then((data)=>{
        console.log(data);
    }).catch(erro=>{
        console.log(erro);
    })
}


//booking seat by no of seats
const booking = (req,res,next) =>{
    console.log('booking');
    let noOfSeatBook = req.body.noofseat;
    let coach=[];
    Coach.find().then(data=>{
        coach = data[0];
        let seataval = availiableSeats(coach['seats'],parseInt(coach['seatsAval']));
        bookSeat(coach['seatsAval'],seataval,coach['seats'],noOfSeatBook);
        res.status(200).json({
            msg:"successfull",
        })
    }).catch((error)=>{
        res.json({
            msg:"unsuccessfull"
        })
    })
}

// booksetat main logic
const bookSeat = (noOfSeats,seataval,coaches,noOfSeatBook) =>{
    let counter = noOfSeatBook;
    for(let i=0;i<coaches.length;i++){
        for(let j=0;j<coaches[i].length;j++){
            if(!coaches[i][j]){
                if(counter>0){
                    let query = `seats.${i}.${j}`;
                    let obj = {};
                    obj[query] = 1;
                    Coach.updateOne({"_id":"5da07b149ae8090f155a7802"},{$set:obj})
                        .then((data)=>{
                                console.log('okk');
                            }).catch(error=>{
                                console.log('notokk');
                            });
                    counter--;
                }
                
            }
        }
    }
}


//check seat aviliability logic
const availiableSeats = (seats,totalSeats) => { 
    let count = 0;  
    let avalseat;
    seats.forEach(ele=>{
       ele.forEach(ele=>{
           if(ele == 1){
               count++;
           }
       })
    })
    avalseat = totalSeats-count;
    return avalseat;
}





const seatavaliable = (seatsave) => {
    let counter = seatsave;
    for(let i=0;i<arr.length;i++){
        for(let j=0;arr[i].length;j++){
            if(!arr[i][j]){
                if(counter>0){
                    arr.push(new Seat());
                    counter--;
                }
            }
        }
    }
}

const fetchCoach = (req,res,next) => {
    Coach.find({}).then(data=>{
        res.status(200).json({
            msg:"successfull",
            data:data
        })
    }).catch(error=>{
        res.status(404).json({
            msg:"notFound",
            error:error
        })
    })
}



module.exports = {
    booking,
    fetchCoach,
    saveCoach
};