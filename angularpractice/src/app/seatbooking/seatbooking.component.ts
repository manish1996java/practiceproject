import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeatbookingService } from './seatbooking.service';

@Component({
  selector: 'app-seatbooking',
  templateUrl: './seatbooking.component.html',
  styleUrls: ['./seatbooking.component.css']
})
export class SeatbookingComponent implements OnInit {

  seats:number[] = [1,2,3,4,5,6,7];

  constructor(private seatbkSrv:SeatbookingService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
      this.seatbkSrv.saveSeat(form.value.seat);
      form.resetForm();
  }
}
