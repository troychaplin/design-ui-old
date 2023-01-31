import { SelectHTMLAttributes, ClassAttributes } from 'react';
import { FieldHookConfig } from 'formik';
export interface SelectProps {
    label?: string;
    options?: any[];
}
export declare const Select: ({ label, options, ...props }: SelectProps & SelectHTMLAttributes<HTMLSelectElement> & ClassAttributes<HTMLSelectElement> & FieldHookConfig<string>) => JSX.Element;
