import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiConfig } from '../api-config.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
 
@Component({
  selector: 'app-view-content',
  standalone: true,
  imports: [CommonModule, PopUpComponent],
  templateUrl: './view-content.component.html',
  styleUrl: './view-content.component.css'
})
export class ViewContentComponent {
    imageData: any[] = []
    pageNo: number = 1
    isPopupOpen: boolean = false;
    imageObject : any
    hasDetails : boolean = false
   
    constructor(private apiService: ApiConfig) { }
   
    async ngOnInit(): Promise<void> {
      try {
        this.imageData = await this.apiService.getData();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
   
    async loadPage(page : number): Promise<void> {
      try {
        this.imageData = await this.apiService.getNextPage(page);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
   
    async imageDetails(id : number):Promise<void>{
      try {
        this.imageObject = await this.apiService.getImageDetails(id);
        this.hasDetails = true
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
   
    pagination(str:string){
      if(str === 'next'){
        this.pageNo++
        this.loadPage(this.pageNo)
      } else if(str === 'prev' && this.pageNo > 1 ){
        this.pageNo--
        this.loadPage(this.pageNo)
      }
    }
   
    openPopup(id:number) {
      this.isPopupOpen = true;
      this.hasDetails = false;
      this.imageDetails(id)
    }
   
    closePopup() {
      this.isPopupOpen = false;
    }
}