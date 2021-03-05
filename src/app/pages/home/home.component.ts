import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  repos: Array<any> = [
    {
      repoLink: 'tiagoluchtenberg/repo',
      description: 'Descrição do repositório do cara.',
      linkImg: '../../../assets/images/img-repo.svg',
    },
    {
      repoLink: 'lucasgomes/repo',
      description: 'Descrição do repositório do Lucas.',
      linkImg: '../../../assets/images/img2.svg',


    },
    {
      repoLink: 'diegoalmeida/repo',
      description: 'Descrição do repositório do Diego.',
      linkImg: '../../../assets/images/img3.svg',


    },
    {
      repoLink: 'hallangomes/repo',
      description: 'Descrição do repositório do Hallan.',
      linkImg: '../../../assets/images/img4.svg',


    }
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

}
