import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/endereco';
import { ApiService } from 'src/app/services/api.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cep = ''
  cadastro: User = new User()
  endereco: Endereco = new Endereco()

  constructor(private apiService: ApiService,
    private http: HttpClient) { }

  ngOnInit(): void {

  }

  buscarCep() {
    this.http.get('http://viacep.com.br/ws/' + this.cep + '/json').subscribe((result: any) => {
      this.endereco = {
        rua: result.logradouro,
        cidade: result.localidade,
        bairro: result.bairro,
        complemento: '',
        numero: '',
        cep: result.cep
      }
    })
  }

}
