import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivasComponent } from './component/directivas/directivas.component';
import { DirectivapersonalizadaDirective } from './directive/directivapersonalizada.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    DirectivapersonalizadaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
