Angular Assignment
This is test project to demonstrate the 30 images at one time with pagination via API in Angular 17. It contains all the required codes.
Get Started.
To get started needs to get the repo from Github and move into directory to run the project in IDE.
Clone the repo.
 
- git clone https://github.com/ShwetaNimbenni/Assignment_Angular.git
 
Install npm packages
install the npm packages and ng serve command will help you to run the project as in localhost.
 
- npm install- npm serve
 
The npm server commands will build the application and will be run on 4200 port, If the port is already in use it may give you a random port number to demonstrate the application into browser.
To close or shut the terminal CTRL + C will be the command.
Created service file to fetch the API
Each service will required to fetch the API to get the latest data.
 
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
 
Display Data
Once the Fetch API done data needs to display in template/HTML file.
 
        <div *ngFor="let image of imageData; index as i" style="align-items: center;">
            <div class="card" type="button" (click)="openPopup(image.id)">
                <div class="img" [ngStyle]="{'background-image' : 'url('+ image.download_url +')'}"></div>
                <h5>{{image.author}}</h5>
            </div>
        </div>
 
Documentation
For any query please email on shweta.nimbenni@flydocs.aero or drop a message in Teams :)
