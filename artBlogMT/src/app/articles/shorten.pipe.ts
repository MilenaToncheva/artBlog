import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(content: string ): string {
    if(content.length>20){
      return `${content.substr(0,20)}...`
    }
    return content
  }

}
