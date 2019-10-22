import { Component, OnInit } from '@angular/core';
import { SeatbookingService } from '../seatbooking.service';

@Component({
  selector: 'app-seatbookinglist',
  templateUrl: './seatbookinglist.component.html',
  styleUrls: ['./seatbookinglist.component.css']
})
export class SeatbookinglistComponent implements OnInit {
    color = {
      red:"red",
      gray:"gray"
    }
    
    seats:number[][];

  constructor(private seatbookSrv:SeatbookingService) { }

  ngOnInit() {
    this.seats = this.seatbookSrv.getCoach();
    this.seatbookSrv.coachListener().subscribe((seats:number[][])=>{
       this.seats = seats; 
      console.log(seats);
    })
  }

}
