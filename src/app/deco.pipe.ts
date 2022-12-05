import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deco'
})
export class DecoPipe implements PipeTransform {

  transform(nom: string):string {
    return '<3'+nom+' <3';
    }
   

}
