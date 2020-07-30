import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FechamentoComponent } from '../fechamento.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FechamentoComponent,
    data: {
      title: 'Fechamento'
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
export class FechamentoRoutingModule { }
