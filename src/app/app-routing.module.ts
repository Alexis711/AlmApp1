import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosUserComponent } from './webApp/dashboard-app/articulos-user/articulos-user.component';
import { ComprasComponent } from './webApp/dashboard-app/compras/compras.component';
import { PerfilUserComponent } from './webApp/dashboard-app/perfil-user/perfil-user.component';
import { PerfilAdminComponent } from './webAdmin/dashboard-admin/perfil-admin/perfil-admin.component';
import { ClientesComponent } from './webAdmin/dashboard-admin/clientes/clientes.component';
import { ArticulosComponent } from './webAdmin/dashboard-admin/articulos/articulos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { FooterComponent } from './footer/footer.component';
import { ArticulosProveedoresComponent } from './webProveedor/dashboard-proveedor/articulos-proveedores/articulos-proveedores.component';
import { PerfilProveedorComponent } from './webProveedor/dashboard-proveedor/perfil-proveedor/perfil-proveedor.component';
import { ErroresComponent } from './errores/errores.component';
import { DashboardAdminComponent } from './webAdmin/dashboard-admin/dashboard-admin.component';
import { DashboardProveedorComponent } from './webProveedor/dashboard-proveedor/dashboard-proveedor.component';
import { DashboardAppComponent } from './webApp/dashboard-app/dashboard-app.component';

const routes: Routes = [
  { path: '', redirectTo:'acerca de', pathMatch:'full' },
  { path: 'acerca de', component: AcercaDeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboardUser', component: DashboardAppComponent, children:[
    { path: '', redirectTo: 'compras', pathMatch: 'full' },
    { path: 'compras', component: ArticulosUserComponent },
    { path: 'historial', component: ComprasComponent },
    { path: 'perfilUser', component: PerfilUserComponent },
  ] },
  { path: 'error', component: ErroresComponent },
  { path: 'dashboardAdmin', component: DashboardAdminComponent, children:[
    { path: '', redirectTo:'articulos', pathMatch:'full' },
    { path: 'articulos', component: ArticulosComponent },
    { path: 'usuarios', component: ClientesComponent },
    { path: 'perfilAdmin', component: PerfilAdminComponent },
  ] },
  
  { path: 'dashboardProveedor', component: DashboardProveedorComponent, children:[
    { path: '', redirectTo:'articulosproveedor', pathMatch:'full' },
    { path: 'articulosproveedor', component: ArticulosProveedoresComponent },
    { path: 'perfilProveedor', component: PerfilProveedorComponent },
  ] },
  
  { path: '**', component: ErroresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
