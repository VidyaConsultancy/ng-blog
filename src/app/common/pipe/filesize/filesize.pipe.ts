import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {
  transform(value: number, format: string = 'kb'): string {
    switch (format.toLowerCase()) {
      default:
        return `${value / 1000} KB`;
      case 'mb':
        return `${value / 1000000} MB`;
      case 'gb':
        return `${value / 1000000000} GB`;
      case 'tb':
        return `${value / 1000000000000} TB`;
    }
  }
}
