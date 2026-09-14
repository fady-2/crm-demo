import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/items`;

  getAll() {
    return this.http.get<any[]>(this.apiUrl); // ✅ Array مباشرة
  }

  getOne(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`); // ✅ Object مباشرة
  }

  create(data: any) {
    return this.http.post<any>(this.apiUrl, data); // ✅
  }

  update(id: number, data: Partial<any>) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data); // ✅
  }

  delete(id: number) {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`); // ✅
  }
}