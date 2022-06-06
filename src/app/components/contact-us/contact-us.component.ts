import { Component, OnInit, AfterViewInit } from '@angular/core';
import* as M from 'materialize-css';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, { });
    });
  }

}
