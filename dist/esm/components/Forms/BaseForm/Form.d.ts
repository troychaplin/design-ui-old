import React from 'react';
export interface FormProps {
    children?: React.ReactNode;
    onSubmit?: any;
    schema: {
        [k: string]: {
            value?: any;
            validation: any;
            label?: string;
        };
    };
}
export interface SubmitProps {
    title?: string;
}
export declare const Form: {
    ({ children, onSubmit, schema, }: FormProps): JSX.Element;
    displayName: string;
} & {
    Input: {
        ({ label, ...props }: import("../Input/Input").InputProps & React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement> & import("formik").FieldHookConfig<string>): JSX.Element;
        displayName: string;
    };
    Select: ({ label, options, ...props }: import("../Select/Select").SelectProps & React.SelectHTMLAttributes<HTMLSelectElement> & React.ClassAttributes<HTMLSelectElement> & import("formik").FieldHookConfig<string>) => JSX.Element;
    Checkbox: {
        ({ label, caption, options, ...props }: import("../Checkbox/Checkbox").CheckboxProps & React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement> & import("formik").FieldHookConfig<string>): JSX.Element;
        displayName: string;
    };
    Radio: {
        ({ label, caption, options, ...props }: import("../Radio/Radio").RadioProps & React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement> & import("formik").FieldHookConfig<string>): JSX.Element;
        displayName: string;
    };
    Submit: {
        ({ title }: SubmitProps): JSX.Element;
        displayName: string;
    };
    WYSIWYG: {
        ({ label, placeholder, Editor, ...props }: import("../WYSIWYG/WYSIWYG").WYSIWYGProps & React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement> & import("formik").FieldHookConfig<string>): JSX.Element;
        displayName: string;
    };
    DateTimePicker: ({ label, ...props }: import("../DateTimePicker").PickerProps & import("formik").FieldHookConfig<string>) => JSX.Element;
    PlacesAutoComplete: ({ label, ...props }: import("../PlacesAutocomplete").PickerProps & import("formik").FieldHookConfig<string>) => JSX.Element;
};
