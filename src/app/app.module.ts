import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ArticulosUserComponent,
    ComprasComponent,
    PerfilUserComponent,
    PerfilAdminComponent,
    ClientesComponent,
    ArticulosComponent,
    LoginComponent,
    RegisterComponent,
    AcercaDeComponent,
    FooterComponent,
    ArticulosProveedoresComponent,
    PerfilProveedorComponent,
    ErroresComponent,
    DashboardAdminComponent,
    DashboardProveedorComponent,
    DashboardAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
