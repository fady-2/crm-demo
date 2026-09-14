  


import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LeadModel } from '../models/lead.model';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeadService {

  private leadCreatedSource = new Subject<LeadModel>();
  leadCreated$ = this.leadCreatedSource.asObservable();

  private leadUpdatedSource = new Subject<LeadModel>();
  leadUpdated$ = this.leadUpdatedSource.asObservable();

  // جديد: عشان أي حد في الابليكيشن يقدر يطلب فتح فورم تعديل
  private editLeadSource = new Subject<LeadModel>();
  editLeadRequested$ = this.editLeadSource.asObservable();

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<LeadModel[]>('http://localhost:3000/api');
  }

  create(lead: Partial<LeadModel>) {
    return this.http.post<LeadModel>('http://localhost:3000/api', lead)
    .pipe(
      tap(newLead => this.leadCreatedSource.next(newLead))
    );
  }

  update(id: number, lead: Partial<LeadModel>) {
    return this.http.put<LeadModel>(`http://localhost:3000/api/${id}`, lead)
    .pipe(
      tap(updatedLead => this.leadUpdatedSource.next(updatedLead)) //سيرشت عنها  فهمت اانها مش بيتبعت حاجه بعدها بسس هسال م فادي
    );
  }

  addLocalLead(lead: LeadModel) {
    this.leadCreatedSource.next(lead);
  }

  updateLocalLead(lead: LeadModel) {
    this.leadUpdatedSource.next(lead);
  }

  // جديد
  requestEditLead(lead: LeadModel) {
    this.editLeadSource.next(lead);
  }
}