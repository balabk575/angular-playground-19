import { createAction, props } from "@ngrx/store";

export const loadForm = createAction('[PR Form] Load Form');
export const loadFormSuccess = createAction('[PR Form] Load Form Success', props<{ data: any }>());
export function loadFormFailure(arg0: { error: any; }): any {
    throw new Error('Function not implemented.');
}

