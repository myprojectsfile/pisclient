import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule, MdInputModule, MdCardModule } from '@angular/material';
import { DxButtonModule } from 'devextreme-angular'; 
import { DxDataGridModule } from 'devextreme-angular'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GcomsApiService } from './api/gcoms-api/gcoms-api.service';
import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdIconModule, MdInputModule, MdCardModule,
    DxButtonModule,DxDataGridModule,
    FormsModule,
    HttpModule    
  ],
  providers: [GcomsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
