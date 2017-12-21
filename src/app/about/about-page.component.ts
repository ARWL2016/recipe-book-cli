import { Component } from "@angular/core";
import { pageTransition } from '../animations';

@Component({
  templateUrl: './about-page.html',
  styleUrls: ['./about-page.css'],
  animations: [pageTransition]
})
export class AboutPage {
}
