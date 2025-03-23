import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FormComponent } from "./form/form.component";
import { InfoComponent } from "./info/info.component";
import { DocumentComponent } from "./document/document.component";
import { AddInfoComponent } from "./add-info/add-info.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FormComponent, InfoComponent, DocumentComponent, AddInfoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kusumSolar';
}
