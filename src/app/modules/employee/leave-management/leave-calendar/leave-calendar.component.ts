import { Colors, Holiday } from "./../../../../models/leave-management/holiday";
import { AcceptLeaveService } from "./../../../../services/leave-management/accept-leave.service";
import { HolidayCalendarService } from "./../../../../services/leave-management/holiday-calendar.service";
import { Component, ViewChild, TemplateRef, OnInit } from "@angular/core";
import { isSameDay, isSameMonth } from "date-fns";
import { Subject } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from "angular-calendar";
import { TokenStorageService } from "src/app/services/login/token-storage.service";
import { InteractionService } from "src/app/services/interaction.service";
import { CalendarEvent } from "src/app/models/leave-management/CalendarEvent";
import { ColorsService } from "src/app/services/leave-management/colors.service";
import { timingSafeEqual } from "crypto";

const colors: any = {
  gray: {
    primary: "#464646",
    secondary: "#FFFFFF"
  }
};

@Component({
  selector: "app-leave-calendar",
  templateUrl: "./leave-calendar.component.html",
  styleUrls: ["./leave-calendar.component.css"]
})
export class LeaveCalendarComponent implements OnInit {
  @ViewChild("modalContent")
  modalContent: TemplateRef<any>;
  @ViewChild("deleteContent")
  deleteContent: TemplateRef<any>;
  @ViewChild("moveContent")
  moveContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  today: Date = new Date();
  calevent: Holiday = new Holiday();
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  // time =
  //   new Date(this.modalData.event.end).getTime() -
  //   new Date(this.today).getTime();

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-edit"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        if (event.end < this.today) {
          this.handleEvent("Edited", event);
          // this.editEvent()
        } else {
          this.handleEvent("Edit", event);
          // this.editEvent();
        }
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // console.log(events);
        this.handleEvent("Deleted", event);
        // this.events = this.events.filter(iEvent => iEvent != event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = true;
  info: { token; username; authorities };
  colors: Colors[];
  color: Colors;
  // time: number;
  constructor(
    private modal: NgbModal,
    private holidayCalendarService: HolidayCalendarService,
    private acceptLeaveService: AcceptLeaveService,
    private token: TokenStorageService,
    private interactionService: InteractionService,
    private colorsService: ColorsService
  ) {}

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getAllHolidays();
    // if (this.info.authorities == "HR" || this.info.authorities == "ADMIN") {
      if (this.info.authorities == "HR") {
      this.getAllLeaveRequest();
    }
    this.getSuccessMsg();
    this.getColors();
    // this.editEvent();
    // this.deleteEvent();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent("Dropped or resized", event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    console.log(event);
    console.log(action);

    if (this.info.authorities != "EMPLOYEE") {
      if (event.id != null) {
        if (action == "Clicked" || action == "Edited") {
          this.modal.open(this.modalContent, { size: "sm" });
        }
        if (action == "Deleted") {
          this.modal.open(this.deleteContent, { size: "lg" });
        }
        if (action == "Dropped or resized" || action == "Edit") {
          this.modal.open(this.moveContent, { size: "lg" });
        }
      }
    }
  }

  getAllHolidays() {
    this.holidayCalendarService.getAllHoliday().subscribe(data => {
      if (this.info.authorities == "HR" || this.info.authorities == "ADMIN") {
        data.forEach(holiday => {
          this.events.push({
            id: holiday.id,
            title: holiday.title,
            start: new Date(holiday.start),
            end: new Date(holiday.end),
            color: holiday.color,
            draggable: holiday.draggable,
            actions: this.actions,
            allDay: holiday.allDay,
            resizable: holiday.resizable
          });
          this.refresh.next();
        });
      } else if (this.info.authorities == "EMPLOYEE") {
        data.forEach(holiday => {
          this.events.push({
            id: holiday.id,
            title: holiday.title,
            start: new Date(holiday.start),
            end: new Date(holiday.end),
            color: holiday.color,
            draggable: false,
            allDay: holiday.allDay,
            resizable: holiday.resizable
          });
          this.refresh.next();
        });
      }
    });
  }
  getColors() {
    this.colorsService.getAllColors().subscribe(data => {
      this.colors = data;
    });
  }
  getAllLeaveRequest() {
    this.acceptLeaveService.getAllAcceptData().subscribe(data => {
      data.forEach(leave => {
        this.events.push({
          id: null,
          title: leave.leaveRequest.user.fullName,
          start: new Date(leave.leaveRequest.startDate),
          end: new Date(leave.leaveRequest.endDate),
          color: colors.gray,
          draggable: false,
          allDay: true
        });
        this.refresh.next();
      });
    });
  }

  deleteEvent() {
    this.holidayCalendarService
      .deleteEvent(this.modalData.event.id)
      .subscribe(data => {
        console.log(data);
      });
  }

  editEvent() {
    this.modalData.event.postedBy = this.info.username;
    this.holidayCalendarService
      .updateEvent(this.modalData.event.id, this.modalData.event)
      .subscribe(data => {
        console.log(data);
      });
    this.refresh.next();
  }
  getSuccessMsg() {
    this.interactionService.msgDataSource$.subscribe(data => {
      this.getAllLeaveRequest();
      if (data == "eventAdded" || data == "Edited") {
        this.events = [];
        this.getAllHolidays();
        this.responseMsg = "success";
        this.responseMsgTimeOut();
      }
    });
  }
  responseMsg: string;
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }
}
