import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OwnerPageComponent } from "./features/owner-page/owner-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OwnerPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crm-demo');
}
