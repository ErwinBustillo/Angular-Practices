import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html'
})
export class DonutsComponent  {

  public doughnutChartLabels:string[] = ['Tamales', 'Yuca', 'Papa'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public numeros_random(){
    this.doughnutChartData = [
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100)
    ];
  }

}
