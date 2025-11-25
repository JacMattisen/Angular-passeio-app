import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'categorias',
        loadChildren: () =>
          import('../categorias/categorias.module').then(
            (m) => m.CategoriasModule
          ),
        pathMatch: 'full',
        data: {
          titulo: 'Categorias',
          subtitulo: 'Lista de categorias de passeios',
        },
      },
      {
        path: 'lugares',
        loadChildren: () =>
          import('../lugares/lugares.module').then((m) => m.LugaresModule),
        pathMatch: 'full',
        data: {
          titulo: 'Lugares',
          subtitulo: 'Lista de lugares para passeios',
        },
      },
      {
        path: 'galeria',
        loadChildren: () =>
          import('../galeria/galeria.module').then((m) => m.GaleriaModule),
        pathMatch: 'full',
        data: { titulo: 'Galeria', subtitulo: 'Galeria de fotos dos passeios' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
