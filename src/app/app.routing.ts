import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'PessoaWeb'
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
      path: 'fechamento',
      loadChildren: () => import('./fechamento/fechamento.module').then(m => m.FechamentoModule),
    },
    {
      path: 'importacao',
      loadChildren: () => import('./importacao/importacao.module').then(m => m.ImportacaoModule),
    },
    {
      path: 'ui-elements',
      loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      data: {
        title: 'UI Elements'
      },
    },
    {
      path: 'forms',
      loadChildren: () => import('./importacao/importacao.module').then(m => m.ImportacaoModule),
      data: {
        title: 'Form Page'
      },
    }
  ]
}, {
  path: 'tables',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Tables'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    }
  ]
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
