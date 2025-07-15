export type formControlType = 'text' | 'number' | 'priority' | 'Date' | 'Button';

export type Priority = 'low' | 'Medium' | 'high';

export interface BaseFormAttribute {
  label: string;
  formControlName: string;
  isRequired: boolean;
  formControlType: formControlType;
  options?: string[];
  button?: buttonAttribute
}

export type FormAttributes =
  | (BaseFormAttribute & { formControlType: 'text'; default: string })
  | (BaseFormAttribute & { formControlType: 'number'; default: number })
  | (BaseFormAttribute & { formControlType: 'Date'; default: string })
  | (BaseFormAttribute & { formControlType: 'priority'; default: Priority })
  | (BaseFormAttribute & { formControlType: 'Button'; default: string});


  interface buttonAttribute{
    text: string | (() => string);
    action: ()=> void;
    style?: string;
    icon?: string;
  }


  export interface PRFormDetails {
  [key: string]: any;
  lineItem: {
    itemCode: number;
    description: string;
    quantity: number;
    estimatedUnitPrice: number;
    estimatedTotal: number;
    deliveryDate: Date;
    costCenter: string;
    justification: string;
  };
  employeeInfo: {
    employeeId: number;
    requestorName: string;
    department: string;
    requestDate: Date;
    priority: Priority;
  };
}