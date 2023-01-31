import { InputHTMLAttributes, ClassAttributes } from 'react';
import { FieldHookConfig } from 'formik';
export interface InputProps {
    label?: string;
    type?: string;
}
export declare const Input: {
    ({ label, ...props }: InputProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> & FieldHookConfig<string>): JSX.Element;
    displayName: string;
};
