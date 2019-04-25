import { Component, OnInit, ViewChild } from '@angular/core';
import { Payment } from '../../../Model/payment';
import { User } from '../../../Model/user';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { PaymentService } from '../../../Service/payment.service';
import { UserService } from '../../../Service/user.service';

@Component({
  selector: 'app-view-payment-initiate',
  templateUrl: './view-payment-initiate.component.html',
  styleUrls: ['./view-payment-initiate.component.css']
})
export class ViewPaymentInitiateComponent implements OnInit {

  paymentObj: Payment = new Payment();
  payments: Payment[];

  user: User[];

  msg: any;

  displayedColumns: string[] = ['trainerName', 'date', 'amount', 'paymentStatus', 'button'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<Payment>();
  constructor(private paymentService: PaymentService,
    private userService: UserService) { }

  ngOnInit() {
    this.getAllPaymentList();
    this.getUserList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllPaymentList() {
    this.paymentService.getAllPayment().subscribe(data => {
      console.log(data);
      this.payments = data;
      this.dataSource = new MatTableDataSource<any>(this.payments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  getUserList() {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
  editPayment(payment) {
    console.log(payment);
    this.paymentObj = Object.assign({}, payment);
  }

  deletePaymentById(payment) {
    console.log(payment);
    this.paymentService.deletePayment(payment).subscribe(data => {
      this.getAllPaymentList();
    });
  }
  updatePayment() {
    this.paymentService.updatePayment(this.paymentObj).subscribe(data => {
      this.getAllPaymentList();
    });
  }

}