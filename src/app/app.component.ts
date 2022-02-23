import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  hideList:boolean=true;
  hideEdit:boolean=false;
  showUpdatedName:boolean=false;
  updatedName;
  // editName:FormGroup
  editName = new FormGroup({
    name: new FormControl('')

  })
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
    this.hideList=false;
    this.hideEdit=true;
    this.editName.controls.name.patchValue(name);


  }
  save(){
    this.updatedName=this.editName.value.name;
    console.log(this.updatedName)
    this.hideEdit=false;
    this.showUpdatedName=true;

  }
  List(){
    this.hideList=true;
    this.showUpdatedName=false;
  }

  
}
