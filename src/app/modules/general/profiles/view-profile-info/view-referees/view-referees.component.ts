import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Referee } from './referee.model';
import { RefereesService } from './referees.service';
import { ProfileInfoService } from '../profile-table/profile-info.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Profile } from '../profile-table/profile.model';
import { InteractionService } from 'src/app/services/interaction.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
@Component({
  selector: 'app-view-referees',
  templateUrl: './view-referees.component.html',
  styleUrls: ['./view-referees.component.css']
})

export class ViewRefereesComponent implements OnInit {

  referees: Referee[]
  refereeObject: Referee = new Referee();
  id: number
  user: Profile[]
  constructor(private router: Router,
    private refereeService: RefereesService,
    private profileInfoService: ProfileInfoService,
    private userService: ProfileInfoService,
    private interactionService: InteractionService,
    private token: TokenStorageService) { }
  info: any
  userId: Number
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.profileInfoService.profileuserObservable$.subscribe(userid => {
      console.log(userid);
      this.GetRefereeByUserId(userid);
      this.userId = userid;
      // this.GetReferee();
    });

  }
  // getRefereeById(referees) {
  //   this.interactionService.sendReferee(referees)
  //   console.log(referees);
  //   this.refereeObject = Object.assign({}, this.refereeObject);
  // }

  getUser() {
    return this.userService.getGenerelInfo().subscribe(data => {
      this.user = data;
    })
  }
  GetReferee() {
    return this.refereeService.getReferee().subscribe(data => {
      this.referees = data;
    })
  }

  GetRefereeByUserId(uid) {
    return this.refereeService.GetRefereeByUserId(uid).subscribe(data => {
      this.referees = data;
    })
  }
  deletereferee() {
    return this.refereeService.deleteReferee(this.refereeObject).subscribe(data => {
      this.GetReferee();
    })
  }
  getId(user) {
    this.refereeObject = Object.assign({}, user);
    // alert(this.refereeObject.id)
  }

  editReferee() {
    this.refereeObject.user = this.userId;
    return this.refereeService.editReferee(this.refereeObject).subscribe(derp => {
      // alert("Department edited");
      this.GetRefereeByUserId(this.userId);
      // this.editId(edit);
    });
  }

  gotoNext() {
    this.router.navigate(['/profile/rolesAndResponse']);
  }
  goBack() {
    this.router.navigate(['/profile/recordEmp']);
  }

  addUserForm = new FormGroup({
    id: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3),
      Validators.pattern('^[0-9]*$')
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ])),
    relationship: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')
    ])),
    telephone: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(9),
      Validators.pattern('^[0-9]*$')
    ])),
    address: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      // Validators.pattern('[a-z0-9._/\%+-]')
    ])),
    fullName: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      // Validators.pattern('^[a-z]*$')
    ])),
    refereeName: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      Validators.pattern('^[a-z]*$')
    ])),
  });

}
