import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContentComponent } from '../view-content/view-content.component';
 
@Component({
  selector: 'app-web-container',
  standalone: true,
  imports: [CommonModule, ViewContentComponent],
  templateUrl: './web-container.component.html',
  styleUrl: './web-container.component.css'
})

export class WebContainerComponent { 
}