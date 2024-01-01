import { AfterViewInit, Component } from '@angular/core';
import * as jQuery from 'jquery'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.jqueryDoSideBar();
  }

  jqueryDoSideBar() {
    (function ($) {
      "use strict";
      ''
      // Add active state to sidebar nav links
      var path = window.location.href;
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
        // Use 'this' as HTMLElement
        if ((this as HTMLAnchorElement).href === path) {
          $(this).addClass("active");
        }
      });

      // Toggle the side navigation
      $("#sidebarToggle").on("click", function (e: Event) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }

}
