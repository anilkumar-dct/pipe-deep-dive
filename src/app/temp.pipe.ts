import { Pipe } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TempPipe {
  transform(value: number): string {
    return `${value} °C`;
  }
}
