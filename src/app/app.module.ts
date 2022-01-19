import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { MisclientesComponent } from './misclientes/misclientes.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MisclientesComponent,
    CondicionalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
