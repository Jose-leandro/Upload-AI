// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   private apiUrl = 'https://upload-ai-server-vakr.onrender.com/ai/complete';

//   constructor(private http: HttpClient) {}

//   completeRequest(
//     videoId: string | null,
//     temperature: number
//   ): Observable<any> {
//     return this.http.post(this.apiUrl, { videoId, temperature });
//   }

//   // GET request
//   getData(endpoint: string): Observable<any> {
//     return this.http.get(`${this.apiUrl}${endpoint}`);
//   }

//   // POST request
//   postData(endpoint: string, data: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}${endpoint}`, data);
//   }

//   // PUT request
//   updateData(endpoint: string, data: any): Observable<any> {
//     return this.http.put(`${this.apiUrl}${endpoint}`, data);
//   }

//   // DELETE request
//   deleteData(endpoint: string): Observable<any> {
//     return this.http.delete(`${this.apiUrl}${endpoint}`);
//   }
// }
