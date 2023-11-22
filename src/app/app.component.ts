import { Component, AfterViewInit } from '@angular/core';
import jQuery from 'jQuery'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-project-front';

  ngAfterViewInit(): void {
    (function($) {
      "use strict";

      // Add active state to sidebar nav links
      var path = window.location.href;
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
        // Use 'this' as HTMLElement
        if ((this as HTMLAnchorElement).href === path) {
          $(this).addClass("active");
        }
      });

      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e: Event) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}
