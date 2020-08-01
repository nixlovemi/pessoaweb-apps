import { NgModule } from '@angular/core';
import { ImportacaoRoutingModule } from './importacao-routing/importacao-routing.module';
import { ImportacaoComponent } from './importacao.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [
        ImportacaoRoutingModule,
        CommonModule,
        TabsModule.forRoot(),
        FormsModule
    ],
    declarations: [ImportacaoComponent],
    providers: []
})
export class ImportacaoModule { }
