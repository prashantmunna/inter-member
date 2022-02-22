import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  @Input() searchModel;


  constructor() { }

  ngOnInit(): void {
  }

}
