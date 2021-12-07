import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label>Введiть катети:</label><br>
              <input [(ngModel)]="k1" placeholder="k1"><br>
              <input [(ngModel)]="k2" placeholder="k2"><br>
              <h3>Площа = {{ploscha()}}</h3>
              <h3>Периметр = {{perimetr()}}</h3>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  k1:number = 0;
  k2:number = 0;
  /**
   * name
   */
  public perimetr(): number {
    return this.k1*1+this.k2*1+Math.sqrt(Math.pow(this.k1, 2)+Math.pow(this.k2, 2));
  }
  public ploscha(): number {
    return this.k1*this.k2/2;
  }
}
