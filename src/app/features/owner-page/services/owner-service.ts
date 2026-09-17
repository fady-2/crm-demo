import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { OwnerForm } from '../models/owner.model';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/items`;
  // loading = signal(true); search how to make it work
  data = signal<OwnerForm[]>([]);
  loadOwners() {
    this.http.get<OwnerForm[]>(this.apiUrl).subscribe(
      (res: OwnerForm[]) => {
        this.data.set(res);
        // this.loading.set(false);
      },
      (err: any) => {
        console.log('err', err);
        // this.loading.set(false);
      },
    );
  }
  getOwners() {
    return this.http.get<OwnerForm[]>(this.apiUrl);
  }
  getOwnerById(id: number) {
    return this.http.get<OwnerForm>(`${this.apiUrl}/${id}`);
  }
  createOwner(owner: any) {
    return this.http.post<any>(this.apiUrl, owner);
  }
  updateOwner(id: number, owner: any) {
    return this.http.put<OwnerForm>(`${this.apiUrl}/${id}`, owner);
  }
  deleteOwner(id: number) {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

}
