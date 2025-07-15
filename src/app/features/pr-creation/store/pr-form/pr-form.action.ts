import { createAction, props } from "@ngrx/store";

export const loadForm = createAction('[PR Form] Load Form');
export const loadFormSuccess = createAction('[PR Form] Load Form Success', props<{ data: any }>());
export const loadFormFailure = createAction('[PR Form] Load form Failure', props<{error:any}>())


