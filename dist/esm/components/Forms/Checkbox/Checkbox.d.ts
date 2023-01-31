import { InputHTMLAttributes, ClassAttributes } from 'react';
import { FieldHookConfig } from 'formik';
export interface CheckboxProps {
    label?: string;
    caption?: string;
    options?: any[];
}
export declare const Checkbox: {
    ({ label, caption, options, ...props }: CheckboxProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> & FieldHookConfig<string>): JSX.Element;
    displayName: string;
};
