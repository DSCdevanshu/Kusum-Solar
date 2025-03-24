import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FormComponent } from "./form/form.component";
import { InfoComponent } from "./info/info.component";
import { DocumentComponent } from "./document/document.component";
import { AddInfoComponent } from "./add-info/add-info.component";
import { FooterComponent } from "./footer/footer.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent, FormComponent, InfoComponent, DocumentComponent, AddInfoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'kusumSolar';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const fragment = this.router.parseUrl(event.url).fragment; // Correct way to get fragment
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 0);
        }
      });
  }

}
