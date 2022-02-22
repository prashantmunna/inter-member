import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview-test';
  member_list :any=[]
  search_list:any=[]
  constructor(private  api:ApiService) { }
  ngOnInit(): void {
    this.api.getList().pipe().subscribe(data => {
      this.member_list = data;
      
    });

 
  }
  
  search(value)
  {
    this.member_list = this.member_list.filter(
      (val)=> val['name'].includes(value))
    //Searched Data
    console.log(this.member_list)
  }
  edit(name){
    console.log(name)


  }

  
}
