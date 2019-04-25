import { PipeTransform, Pipe } from "@angular/core";
import { Profile } from './profile.model';
@Pipe({
    name:'employeefilter'
})
export class TraineeFilterPipe implements PipeTransform{
    transform(trainees:Profile[],searchTerm:string):Profile[]{
        if(searchTerm==null){
            return trainees;
        }else{
            return trainees.filter(trainee=>
                trainee.fullName.toLowerCase().indexOf(searchTerm.toString().toLowerCase())!== -1
                )}
        }
        
}
