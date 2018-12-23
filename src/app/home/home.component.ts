import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from "../shared/service.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public details;
  public email;
  public password;
  public rePassword;
  public getResponse;
  constructor(public _http: HttpClient, public _service: CommonService) { }

  getAllData() {
    this._service.getUser()
      .subscribe(data => {
        this.details = data;
        console.log(data);
      });
  }
  onSubmit(frm) {
    let obj = {
      'email': this.email,
      'password': this.password
    }
    console.log(obj);
    if (this.password === this.rePassword) {
      this._service.saveUser(obj).subscribe(res => {
        this.getResponse = res;
      });
    } else {
      alert('password not match please try again...');
    }

    // if (frm.valid) {
    //   console.log("Form Submitted!");
    // }
  }
  ngOnInit() {
    this.getAllData();
    // let modal = document.getElementById('id01');
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }
  }

}
