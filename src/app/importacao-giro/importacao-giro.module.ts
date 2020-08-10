import { NgModule } from '@angular/core';
import { ImportacaoGiroRoutingModule } from './importacao-giro-routing/importacao-giro-routing.module';
import { ImportacaoGiroComponent } from './importacao-giro.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [
        ImportacaoGiroRoutingModule,
        CommonModule,
        TabsModule.forRoot(),
        FormsModule
    ],
    declarations: [ImportacaoGiroComponent],
    providers: []
})
export class ImportacaoGiroModule { }
