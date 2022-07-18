import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TabComponent } from './components/tab/tab.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { TabFormComponent } from './components/tab-form/tab-form.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabComponent,
    TabContainerComponent,
    TabFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
