import { Component, OnInit } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileInfoService } from 'src/app/modules/trainee/traineeManagement/profile/view-profile-info/trainee-profile-table/profile-info.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-trainer-profile-table',
  templateUrl: './trainer-profile-table.component.html',
  styleUrls: ['./trainer-profile-table.component.css']
})
export class TrainerProfileTableComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}


