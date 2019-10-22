import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeatbookingService {
  private coach:number[][] = null;
  private coachobs = new Subject();;

  constructor(private http:HttpClient) { 
    this.fetchCoach();
  }

  saveSeat(numOfSeats:number){
    console.log('saveSeat1');
    this.http.post('http://localhost:7621/coach/seatbooking',{noofseat:numOfSeats}).subscribe((data:{msg:string})=>{
      if(data.msg === 'successfull'){
        this.fetchCoach();
        alert(data.msg);
      }
    })
  }
  
  fetchCoach(){
    console.log('fetchCoach');
    this.http.get('http://localhost:7621/coach/fetchcoach').subscribe((data:{msg:String,data:any})=>{
      if(data.msg === "successfull"){
        this.coach = data.data['0']['seats'];
        this.coachobs.next(this.coach);
      }
    })
  }

  coachListener(){
    return this.coachobs.asObservable();
  }

  getCoach(){
    return this.coach;
  }
}
