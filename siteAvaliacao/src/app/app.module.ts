import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { MenuComponent } from './fixar/menu/menu.component';
import { RodapeComponent } from './fixar/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    ContatoComponent,
    SobreComponent,
    MenuComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
