export class Holiday {
    id: number;
    start: Date;
    end: Date;
    title: string;
    color: Colors = new Colors();
    allDay: boolean = false;
    resizable:Resizable = new Resizable();
    draggable: boolean = false;
    postedBy:string;
}
export class Colors {
    id: number;
    name: string;
    primary: string;
    secondary: string;
}
export class Resizable  {
    id:number;
    beforeStart: boolean = false;
    afterEnd: boolean = false;    
}