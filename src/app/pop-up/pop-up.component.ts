import { Component,EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  @Input() imgDetails: any;
  @Input() isLoaded : boolean = false
  @Output() closePopup = new EventEmitter<void>();
 
  close() {
    this.closePopup.emit();
  }
}
