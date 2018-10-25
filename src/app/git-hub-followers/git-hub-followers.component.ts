import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs-compat/add/observable/combineLatest';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/operator/map';

@Component({
  selector: 'git-hub-followers',
  templateUrl: './git-hub-followers.component.html',
  styleUrls: ['./git-hub-followers.component.scss']
})
export class GitHubFollowersComponent implements OnInit {

  followers: any[];

  constructor(private service: GitHubService, private route: ActivatedRoute) { }

  ngOnInit() {
    let obs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      return this.service.getAll();
    })
      .subscribe(followers => {
        this.followers = followers;
      })
  }

}
