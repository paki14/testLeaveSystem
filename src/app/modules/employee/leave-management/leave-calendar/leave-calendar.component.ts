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
  calevent: Holiday = new Holiday();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-edit"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.calevent.start = this.modalData.event.start;

        if (event.end < this.viewDate) {
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
    if (this.info.authorities == "HR" || this.info.authorities == "ADMIN") {
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
        if (action == "Edit") {
          this.modal.open(this.modalContent, { size: "lg" });
        }
        if (action == "Deleted") {
          this.modal.open(this.deleteContent, { size: "lg" });
        }
        if (action == "Dropped or resized") {
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

  // updateEvent() {
  //   this.modalData.event.postedBy = this.info.username;
  //   // this.modalData.event.id = this.calevent.id;
  //   // this.modalData.event.title = this.calevent.title;
  //   // this.modalData.event.start = this.calevent.start;
  //   // this.modalData.event.end = this.calevent.end;
  //   // this.modalData.event.color = this.calevent.color;
  //   // alert(this.modalData.event.title);
  //   this.holidayCalendarService
  //     .updateEvent(this.modalData.event.id, this.modalData.event)
  //     .subscribe(data => {
  //       console.log(data);
  //     });
  //   this.refresh.next();
  //   // this.refresh.next();
  //   // this.clear();
  // }

  deleteEvent() {
    this.holidayCalendarService
      .deleteEvent(this.modalData.event.id)
      .subscribe(data => {
        console.log(data);
      });
    // this.getAllHolidays();
    // this.getSuccessMsg();
    // this.refresh.next();
  }

  editEvent() {
    this.modalData.event.postedBy = this.info.username;
    //this.modalData.event.id = this.calevent.id;

    // if (
    //   this.calevent.title == null ||
    //   this.calevent.start == null ||
    //   this.calevent.end == null ||
    //   this.calevent.end == null
    // ) {
    //   this.calevent.title = this.modalData.event.title;
    //   this.calevent.start = this.modalData.event.start;
    //   this.calevent.end = this.modalData.event.end;
    //   this.calevent.color.primary = this.modalData.event.color.primary;
    // } else {
    this.modalData.event.title = this.calevent.title;
    this.modalData.event.start = this.calevent.start;
    this.modalData.event.end = this.calevent.end;
    this.modalData.event.color = this.calevent.color;

    // this.modalData.event.color.primary = this.calevent.color.primary;
    // this.modalData.event.color.secondary = this.calevent.color.secondary;

    // alert(this.calevent.title);
    this.holidayCalendarService
      .updateEvent(this.modalData.event.id, this.modalData.event)
      .subscribe(data => {
        console.log(data);
      });
    // }

    this.refresh.next();
  }
  // clear() {
  //   this.calevent.end = null;
  //   this.calevent.color = null;
  //   this.calevent.start = null;
  //   this.calevent.title = null;
  // }
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
