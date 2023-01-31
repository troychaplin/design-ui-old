import { InputHTMLAttributes, ClassAttributes } from 'react';
import { FieldHookConfig } from 'formik';
export interface RadioProps {
    label?: string;
    caption?: string;
    options?: any[];
}
export declare const Radio: {
    ({ label, caption, options, ...props }: RadioProps & InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> & FieldHookConfig<string>): JSX.Element;
    displayName: string;
};
