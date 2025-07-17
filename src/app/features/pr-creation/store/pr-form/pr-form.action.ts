import { createAction, props } from "@ngrx/store";
import { ErrorDetails, PRFormDetails } from "../../models/PR form/pr-creation";

export const loadForm = createAction('[PR Form] Load Form');
export const loadFormSuccess = createAction('[PR Form] Load Form Success', props<{ data: PRFormDetails }>());
export const loadFormFailure = createAction('[PR Form] Load form Failure', props<{error:ErrorDetails}>())


