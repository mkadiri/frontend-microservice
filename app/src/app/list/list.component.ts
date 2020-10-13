import { Component, OnInit } from '@angular/core';
import {KubeEnvironmentService} from '../kube-environment.service';
import {KubeEnvironment} from '../kube-environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit {
  environments: KubeEnvironment[] = [];
  // environmentsCopy: KubeEnvironment[] = [];
  // searchTerm: '';

  constructor(private kubeEnvironmentService: KubeEnvironmentService) { }

  ngOnInit(): void {
    this.getEnvironments();
  }

  getEnvironments(): void {
    this.kubeEnvironmentService.getEnvironments()
      .subscribe(environments => this.environments = environments);
  }

  // search(): void {
  //   const term = this.searchTerm;
  //   // this.environments = this.environmentsCopy.filter(
  //   //   environment => environment.name === term
  //   // );
  //
  //   // this.environments = this.environmentsCopy.filter(
  //   //   (item, index) => item.name === term
  //   // );
  //
  //   // if (!term) {
  //   //   this.environments = this.environmentsCopy;
  //   // } else {
  //   //   this.environments = this.environmentsCopy.filter(tag => tag.name.indexOf(term) >= 0);
  //   // }
  // }
}
