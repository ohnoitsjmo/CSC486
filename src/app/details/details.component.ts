import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $(".gallery-img").click(function(){
        var t = $(this).attr("src");
        $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
        $("#myModal").modal();
      });
    });
  }

}
