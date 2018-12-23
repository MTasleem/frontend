import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //   title = 'app';
  // }

  sessionId: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.sessionId = this.route
    //   .queryParamMap
    //   .map(paramMap => paramMap.get('session_id') || 'None');
    //   console.log(this.sessionId);
      
  }
}