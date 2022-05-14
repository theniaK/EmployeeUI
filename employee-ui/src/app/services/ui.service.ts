import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public showAddEmpoyee: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddEmployee(): void{
    this.showAddEmpoyee = !this.showAddEmpoyee;
    this.subject.next(this.showAddEmpoyee);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
