import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PrFormState } from "./pr-form.state";

export const selectPrFormState = createFeatureSelector<PrFormState>('prForm');

export const selectFormData = createSelector(selectPrFormState, state => state.formData);
export const selectLoading = createSelector(selectPrFormState, state => state.loading);
