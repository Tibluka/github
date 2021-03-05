import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from 'src/app/models/repository';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  repos: Array<Repository> = []
  reposListCount = 0
  input: any = ''

  constructor(private apiService: ApiService,
    private router: Router) {
  }

  ngOnInit(): void {

  }

  getUser() {
    this.apiService.getAPI(`users/${this.input}`).subscribe((res: any) => {
      this.reposListCount = res.public_repos
      this.apiService.getAPI(`users/${this.input}/repos`).subscribe((res: any) => {
        this.repos = res
      })
    }, err => {
      this.repos = []
    })
  }

  redirect(repo: any) {
    this.router.navigate([`/profile`, { repo: JSON.stringify(repo) }])
  }

}
