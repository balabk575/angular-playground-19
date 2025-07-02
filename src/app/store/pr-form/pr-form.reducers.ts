import { createReducer, on } from "@ngrx/store";
import { loadForm, loadFormSuccess } from "./pr-form.action";
import { initialState } from "./pr-form.state";

export const prFormReducer = createReducer(
  initialState,
  on(loadForm, state => ({ ...state, loading: true })),
  on(loadFormSuccess, (state, { data }) => ({ ...state, loading: false, formData: data }))
);
