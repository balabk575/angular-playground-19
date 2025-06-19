export type formControlType = 'text' | 'number' | 'priority' | 'Date';

export type Priority = 'low' | 'Medium' | 'high';

export interface BaseFormAttribute {
  formControlName: string;
  isRequired: boolean;
  formControlType: formControlType;
  options?: string[]
}

export type FormAttributes =
  | (BaseFormAttribute & { formControlType: 'text'; default: string })
  | (BaseFormAttribute & { formControlType: 'number'; default: number })
  | (BaseFormAttribute & { formControlType: 'Date'; default: string })
  | (BaseFormAttribute & { formControlType: 'priority'; default: Priority });
