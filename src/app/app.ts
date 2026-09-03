import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OwnerPageComponent } from "./features/owner-page/owner-page.component";
import { Brokers } from './features/brokers/brokers';

@Component({
  selector: 'app-root',
  imports: [ Brokers],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crm-demo');
}
