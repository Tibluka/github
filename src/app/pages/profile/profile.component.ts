import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from 'src/app/models/repository';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  issues: Array<any> = []
  userData: any

  constructor(private apiService: ApiService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    let data: any = this.router.snapshot.paramMap.get('repo')
    this.userData = JSON.parse(data)
    
    this.getAllIssues()
  }

  getAllIssues() {
    this.apiService.getAPI(`repos/${this.userData.owner.login}/${this.userData.name}/issues`).subscribe((res:any) => {
      this.issues = res
      
    })
  }

}
