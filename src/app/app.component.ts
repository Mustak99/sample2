import { Component, ViewChild } from '@angular/core';
import { GanttEditorComponent, GanttEditorOptions } from 'ng-gantt';

@Component({
  selector: 'app-root',
  template: '<ng-gantt  [data]="data"></ng-gantt>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public editorOptions: GanttEditorOptions;
  public data: any;
  @ViewChild(GanttEditorComponent, { static: true }) editor!: GanttEditorComponent;

  constructor() { 
    this.editorOptions = new GanttEditorOptions()
     this.data = [{
      'pID': 1,
      'pName': 'Define Chart API',
      'pStart': '',
      'pEnd': '',
      'pClass': 'ggroupblack',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 0,
      'pGroup': 1,
      'pParent': 0,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': 'Some Notes text'
    }]; 
  }
}