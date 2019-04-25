import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../Model/payment';
import { User } from '../../../Model/user';
import { UserService } from '../../../Service/user.service';
import { PaymentService } from '../../../Service/payment.service';

@Component({
  selector: 'app-add-payment-history',
  templateUrl: './add-payment-history.component.html',
  styleUrls: ['./add-payment-history.component.css']
})
export class AddPaymentHistoryComponent implements OnInit {
  paymentObj: Payment = new Payment();
  payment: Payment[];

  user: User[];
  constructor(private paymentService: PaymentService,
    private userService: UserService, ) { }

  ngOnInit() {
    this.getAllPaymentList();
    this.getUserList();
  }
 
  getAllPaymentList() {
    this.paymentService.getAllPayment().subscribe(data => {
      console.log(data);
      this.payment = data;
    });
  }
  getUserList() {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
  createPayment() {
    this.paymentService.createPayment(this.paymentObj).subscribe(data => {
      //this.clearPaymentFunction()
      console.log(data);
      this.getAllPaymentList();
      this.getUserList();
    });
  }
}
