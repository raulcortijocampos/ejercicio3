import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { MisclientesComponent } from './misclientes/misclientes.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';
import { ResultadosComponent } from './resultados/resultados.component';
import {HttpClientModule} from "@angular/common/http";
import { EventillosComponent } from './eventillos/eventillos.component';
import { FormulariosComponent } from './formularios/formularios.component';
//import { Unidad6 } from './unidad6/unidad6.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MisclientesComponent,
    CondicionalesComponent,
    ResultadosComponent,
    EventillosComponent,
    FormulariosComponent
    //Unidad6
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
