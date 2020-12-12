import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(animal : Animal[] , searchValue : string): Animal[] {

    if (!animal || !searchValue ){
      return animal ;
    }
    return animal.filter (animal => animal.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
