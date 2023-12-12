import { Component, OnInit, VERSION, Input } from '@angular/core';

@Component({
  selector: 'my-line-chart',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  @Input() maxHeight = 24;
  @Input() maxWidth = 64;
  success: any;
  danger: any;
  primary: any;

  ngOnInit() {
    const exampleSetOne = [565, 635, 600, 990, 1332, 874, 1247, 1291];
    const exampleSetTwo = [565, 335, 300, 190, 332, 74, 247, 291];
    const exampleSetThree = [565, 335, 300, 190, 332, 174, 247, 521];
    this.primary = this.getChartLinkedWithMinMax(exampleSetOne);
    this.success = this.getChartLinkedWithMinMax(exampleSetTwo);
    this.danger = this.getChartLinkedWithMinMax(exampleSetThree);
  }

  getChartLinkedWithMinMax(dataSet) {
    const items = [...dataSet];
    const maxValue = items.sort((a, b) => b - a)[0];
    const minValue = items.sort((a, b) => a - b)[0];
    const length = items.length;
    const list = dataSet.map((value, index) => {
      const newValue =
        Math.floor(((value - minValue) / (maxValue - minValue)) * 100 * 100) /
        100;

      const adjustedYValue = Math.floor((newValue * this.maxHeight) / 100);
      const adjustedXValue = Math.floor(index * (this.maxWidth / (length + 1)));
      return adjustedXValue + ' , ' + adjustedYValue;
    });
    return [...list];
  }
}
