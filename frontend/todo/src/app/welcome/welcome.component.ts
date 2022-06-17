import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMsgFrmSrvce = '';

  constructor(
    private router: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    // console.log(this.router.snapshot.params['name']);
    this.name = this.router.snapshot.params['name'];
  }

  getWelcomeMsg() {
    // console.log('welcome msg')
    //console.log(this.service.executeRestService());
    this.service.executeRestService().subscribe(
      response => this.handleSuccess(response)
    );
  }
  getWelcomeMsgWithPathVar() {
    // console.log('welcome msg')
    //console.log(this.service.executeRestService());
    this.service.executeRestServiceWithPathParam(this.name).subscribe(
      response => this.handleSuccess(response),
      error => this.handleError(error)
    );
  }  

  handleError(error: any): void {
    this.welcomeMsgFrmSrvce = error.error.message
  }

  handleSuccess(response: HelloBean) {
    // console.log(response)
    // console.log(response.message)
    this.welcomeMsgFrmSrvce = response.message
  }

}

