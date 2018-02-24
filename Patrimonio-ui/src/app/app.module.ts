import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule, ButtonModule, InputTextModule,
  InputMaskModule, CalendarModule } from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ItemService } from './item/item.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    DataTableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    ConfirmDialogModule
    
  ],
  providers: [
    ItemService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
