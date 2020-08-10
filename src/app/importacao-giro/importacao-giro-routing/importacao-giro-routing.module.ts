import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ImportacaoGiroComponent } from '../importacao-giro.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ImportacaoGiroComponent,
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
export class ImportacaoGiroRoutingModule { }
