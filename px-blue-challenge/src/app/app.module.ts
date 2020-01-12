import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHolderComponent } from './card-holder/card-holder.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PxbCardComponent } from './pxb-card/pxb-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    CardHolderComponent,
    PxbCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
