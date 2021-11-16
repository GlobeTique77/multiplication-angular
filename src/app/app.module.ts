import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableMultiplicationComponent } from './components/table-multiplication/table-multiplication.component';
import { TablesMultiplicationComponent } from './components/tables-multiplication/tables-multiplication.component';

@NgModule({
  declarations: [
    AppComponent,
    TableMultiplicationComponent,
    TablesMultiplicationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
