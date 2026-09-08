import { Component } from '@angular/core';
import { SharedButtonComponent } from "../../shared/components/shared-button.component/shared-button.component";
import { SharedTagComponent } from "../../shared/components/shared-tag.component/shared-tag.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SharedButtonComponent, SharedTagComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
