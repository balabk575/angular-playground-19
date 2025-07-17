import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as PrFormActions from './pr-form.action'; // assuming actions are in the same folder
import { PRCreationService } from '../../services/pr-creation.service';
import { PRFormDetails } from '../../models/PR form/pr-creation';

@Injectable()
export class PrFormEffects {
   private actions$ = inject(Actions);
  private prFormService = inject(PRCreationService);

  loadForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PrFormActions.loadForm),
      switchMap(() =>
        this.prFormService.dummyFormValue().pipe(
          map((data: PRFormDetails) => PrFormActions.loadFormSuccess({ data })),
          tap( data => console.log(data)
          ),
          catchError(error => of(PrFormActions.loadFormFailure({ error })))
        )
      )
    )
  );
}