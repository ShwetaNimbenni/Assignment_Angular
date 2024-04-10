import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiConfig {
 
  mainURL: string = "https://picsum.photos"
  apiURL: string = "https://picsum.photos/v2/list"
 
  constructor(private http: HttpClient) { }
 
  async getData(): Promise<any> {
    try {
      const response = await this.http.get<any>(this.apiURL).toPromise();
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
 
  async getImageDetails(id: number | string): Promise<any> {
    try {
      const response = await this.http.get<any>(`${this.mainURL}/id/${id}/info`).toPromise();
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
 
  async getNextPage(pageNumber: Number): Promise<any> {
    try {
      const response = await this.http.get<any>(`${this.apiURL}?page=${pageNumber}`).toPromise();
      return response;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
 
 