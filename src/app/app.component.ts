import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public apiservice:ApiService){
    this.getData();
  }
  async getData() {
    const data=await this.apiservice.getproducts();
    console.log(data);
  }
} 