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
  
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.cadastro);
    console.log(this.endereco);
    
  }

  cadastrarCep(){

  }

  buscarCep() {

    this.apiService.getAPI(this.cep + '/json').subscribe((result: any) => {
     
    })
  }

}
