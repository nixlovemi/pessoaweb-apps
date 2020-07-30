import { NgModule } from '@angular/core';
import { ImportacaoRoutingModule } from './importacao-routing/importacao-routing.module';
import { ImportacaoComponent } from './importacao.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        ImportacaoRoutingModule,
        CommonModule,
        FormsModule
    ],
    declarations: [ImportacaoComponent],
    providers: []
})
export class ImportacaoModule { }
