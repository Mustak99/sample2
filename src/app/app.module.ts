import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgGanttEditorModule } from 'ng-gantt' 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgGanttEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
