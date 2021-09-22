import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from  './blog/blog.component';
import { ConocenosComponent } from  './conocenos/conocenos.component';
import { ContactoComponent } from  './contacto/contacto.component';
import { InicioComponent } from  './inicio/inicio.component';
import { ServiciosComponent } from  './servicios/servicios.component';


const  routes:  Routes  = [
  {
  path:  'inicio',
  component:  InicioComponent
  },
  {
  path:  'conocenos',
  component:  ConocenosComponent
  },
  {
  path:  'servicios',
  component:  ServiciosComponent
  },
  { 
    path:  'contacto',
    component:  ContactoComponent 
  },
  { 
    path:  'blog',
    component:  BlogComponent 
  }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
