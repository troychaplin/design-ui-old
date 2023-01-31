import { FieldHookConfig } from 'formik';
import { ClassAttributes, InputHTMLAttributes } from 'react';
export interface WYSIWYGProps {
    label?: string;
    type?: string;
    placeholder?: string;
    Editor?: any;
}
export declare const WYSIWYG: {
    ({ label, placeholder, Editor, ...props }: WYSIWYGProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> & FieldHookConfig<string>): JSX.Element;
    displayName: string;
};
