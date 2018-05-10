// LO PRIMERO QUE TENEMOS QUE HACER ES IMPORTAR LOS MODULES DE ANGULAR QUE TIENEN Q UE VER CON EL ROUTING

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importando los componentes

import { PrincipalComponent } from './principal/principal.component';
import { LoggedComponent } from './logged/logged.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { PerfilComponent } from './perfil/perfil.component';

const appRoutes: Routes = [
    {path: 'principal', component: PrincipalComponent},
    {path: 'logged', component: LoggedComponent},
    {path: 'logout', component: PrincipalComponent},
    {path: 'calendario', component: CalendarioComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: '**', component: PrincipalComponent}
];

export const appRoutingProviders: any[] = [];
// Le decimos que array de rutas debe de cargar para que las inyecte en las rutas del framwork. 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);