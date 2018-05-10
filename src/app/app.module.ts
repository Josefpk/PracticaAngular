import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoggedComponent} from './logged/logged.component';
import { LogoutComponent } from './logout/logout.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TareasComponent } from './tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoggedComponent,
    LogoutComponent,
    ProyectosComponent,
    CalendarioComponent,
    PerfilComponent,
    TareasComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
