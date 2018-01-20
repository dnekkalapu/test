import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  jumbo_name: Observable<any>;
  jumbo_avatar: Observable<any>;
  jumbo_city: Observable<any>;
  jumbo_zipCode: Observable<any>;
  jumbo_streetAddress: Observable<any>;
  jumbo_state: Observable<any>;
  jumbo_companyName: Observable<any>;
  jumbo_catchPhrase: Observable<any>;
  jumbo_message: Observable<any>;
  jumbo_action: Observable<any>;

  constructor(private _msg: MessagesService) {}

  ngOnInit() {
    this.buildMessage();
  }

  private buildMessage() {
    this._msg.getMessage()
      .subscribe(resp => {
        this.jumbo_name = resp.user.name;
        this.jumbo_avatar = resp.user.avatar;
        this.jumbo_city = resp.user.city;
        this.jumbo_zipCode = resp.user.zipCode;
        this.jumbo_streetAddress = resp.user.streetAddress;
        this.jumbo_state = resp.user.state;
        this.jumbo_companyName = resp.user.companyName;
        this.jumbo_catchPhrase = resp.user.catchPhrase;
        this.jumbo_message = resp.message;
        this.jumbo_action = resp.action;
      });
  }

}