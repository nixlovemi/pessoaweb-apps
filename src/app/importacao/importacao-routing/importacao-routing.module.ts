import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ImportacaoComponent } from '../importacao.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ImportacaoComponent,
    data: {
      title: 'Importar XLS'
    }
  }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class ImportacaoRoutingModule { }
