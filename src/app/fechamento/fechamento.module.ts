import { NgModule } from '@angular/core';
import { FechamentoRoutingModule } from './fechamento-routing/fechamento-routing.module';
import { FechamentoComponent } from './fechamento.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    FechamentoRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ FechamentoComponent ],
  providers: []
})
export class FechamentoModule { }
