import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastroComponent } from './cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class CadastroModule { }
