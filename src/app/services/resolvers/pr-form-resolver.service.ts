import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PRCreationService } from '../pr-creation.service';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrFormResolverService implements Resolve<any>{

  constructor(private prForm: PRCreationService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.prForm.dummyFormValue().pipe(
    tap(data => console.log('Resolved form data:', data)),
    catchError(error => {
      console.error('Error fetching form data', error);
      return of(null); // fallback to null or redirect if needed
    })
  );
  }
}
