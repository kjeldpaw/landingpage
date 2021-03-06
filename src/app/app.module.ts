import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatListModule, MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentService } from './shared/services/content.service';
import { FullpageDirective } from './shared/directives/fullpage.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
