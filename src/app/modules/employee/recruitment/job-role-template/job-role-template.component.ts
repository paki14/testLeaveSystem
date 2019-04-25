import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-role-template',
  templateUrl: './job-role-template.component.html',
  styleUrls: ['./job-role-template.component.css']
})
export class JobRoleTemplateComponent implements OnInit {
  jobRole: FormGroup;

  constructor() {
    this.jobRole = new FormGroup({
      'jobRoleTitle':new FormControl,
      'reportTo':new FormControl,
      'overView':new FormControl,
      'responsibility':new FormControl,
      'education':new FormControl,
      'experience':new FormControl,
      'specific':new FormControl,
      'licenses':new FormControl,
      'physical':new FormControl,
      'characteristic':new FormControl,
      'certificate':new FormControl,
      'ability':new FormControl
      })
  }


  ngOnInit() {
  }

}
