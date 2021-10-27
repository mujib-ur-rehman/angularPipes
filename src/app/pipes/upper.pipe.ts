import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {
  transform(value: any, id: any, name: any, email: any): any {
    return `Your ID is ${id}\n
      Your name is ${name.toUpperCase()}
      Your Email is ${email.toUpperCase()}`;
  }
}
