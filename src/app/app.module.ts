import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { PeopleComponent } from './peoples/people/people.component';
import { PeopleListComponent } from './peoples/people-list/people-list.component';
import { PeopleService } from './shared/people.service';

@NgModule({
  declarations: [
    AppComponent,
    PeoplesComponent,
    PeopleComponent,
    PeopleListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
