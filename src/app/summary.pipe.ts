import {Pipe,PipeTransform} from '@angular/core';



@Pipe({
    name:'summary'
})

export class SumarryPipe implements PipeTransform{
    transform(value:string, limit?: number, another? : any){
        if(!value)
            return null;

        let actualLimit = (limit) ? limit : 50;
        return value.substring(0,actualLimit) + '...';
    }
}