import { CalendarEvent, EventAction, EventColor} from "calendar-utils";

export interface CalendarEvent<MetaType = any> extends CalendarEvent{
    id?: string | number;
    start: Date;
    end?: Date;
    title: string;
    color?: EventColor;
    actions?: EventAction[];
    allDay?: boolean;
    cssClass?: string;
    resizable?: {
        beforeStart?: boolean;
        afterEnd?: boolean;
    };
    draggable?: boolean;
    meta?: MetaType;
    postedBy?:string;
}
export interface EventAction extends EventAction{
    label: string;
    cssClass?: string;
    onClick({ event }: {
        event: CalendarEvent;
    }): any;
}

export interface EventColor  extends EventColor{
    id:number;
    name:string;
    primary: string;
    secondary: string;
}