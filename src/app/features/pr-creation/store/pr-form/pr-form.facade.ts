import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadForm } from "./pr-form.action";
import { Observable } from "rxjs";
import { selectFormData, selectLoading } from "./pr-form.selectors";

@Injectable({ providedIn: 'root' })
export class PrFormFacade {
  formData$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.formData$ = this.store.select(selectFormData);
    this.loading$ = this.store.select(selectLoading);
  }

  loadForm(): void {
    this.store.dispatch(loadForm());
  }
}
