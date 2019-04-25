import { InteractionService } from 'src/app/services/interaction.service';
import { ColorsService } from './../../../../services/leave-management/colors.service';
import { Holiday, Colors } from './../../../../models/leave-management/holiday';
import { HolidayCalendarService } from './../../../../services/leave-management/holiday-calendar.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-post-event',
  templateUrl: './post-event.component.html',
  styleUrls: ['./post-event.component.css']
})
export class PostEventComponent implements OnInit {

  holiday: Holiday = new Holiday();
  colors: Colors[];
  info: any;

  checked = false;
  default: Colors = new Colors();

  constructor(
    private holidayCalendarService: HolidayCalendarService,
    private token: TokenStorageService,
    private interactionService: InteractionService,
    private colorsService: ColorsService
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getColors();
    this.holiday.color = this.default;
  }

  postEvent() {
    this.holiday.postedBy = this.info.username;
    this.holidayCalendarService.addEvent(this.holiday).subscribe(data => {
      console.log(data);
      this.sendSuccessMsg();
    })
  }

  getColors() {
    this.colorsService.getAllColors().subscribe(data => {
      this.colors = data;
    })
  }
  onClicked(evt) {
    evt.checked ? this.checked = true : this.checked = false;
    console.log(this.checked);
  }

  sendSuccessMsg() {
    this.interactionService.upadateMsg("eventAdded");
  }
}
