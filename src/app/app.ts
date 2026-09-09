import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestButton } from "./features/test-button/test-button/test-button";
import { SharedButtons } from "./shared/components/shared-button/shared-buttons/shared-buttons";
import { MainComponent } from "./features/main-component/main-component";
import { FollowUpComponent } from './features/follow-up-componen/follow-up-component/follow-up-component';
import { LeadDetails } from './features/lead/component/lead-details/lead-details';
import { SharedTableComponent } from "./shared/components/shared-table.component/shared-table.component";
import { StatusTagShared } from "./shared/components/status-tag-shared/status-tag-shared";
// import { LeadDetails } from "./features/lead/component/lead-details/lead-details";
// import { StatusTagShared } from '../../../shared/status-tag-shared/status-tag-shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestButton, FollowUpComponent, SharedButtons, MainComponent, LeadDetails, SharedTableComponent, StatusTagShared],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crm-demo');
}
