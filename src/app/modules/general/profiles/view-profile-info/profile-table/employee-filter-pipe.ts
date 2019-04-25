import { PipeTransform, Pipe } from "@angular/core";
import { Profile } from './profile.model';
@Pipe({
    name:'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform{
    
    transform(employees:Profile[],searchTerm:string):Profile[]{
        return employees.filter(employee=>
            employee.fullName.toLowerCase().indexOf(searchTerm.toLowerCase())!== -1
            )}
}
