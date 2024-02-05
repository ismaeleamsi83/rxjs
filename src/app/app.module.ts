import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { FromEventComponent } from './from-event/from-event.component';
import { MapFilterComponent } from './map-filter/map-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    IntervalTimerComponent,
    FromEventComponent,
    MapFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
