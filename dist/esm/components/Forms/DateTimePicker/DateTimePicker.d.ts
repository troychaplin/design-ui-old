import { FieldHookConfig } from 'formik';
export interface PickerProps {
    label?: string;
}
export declare const DateTimePicker: ({ label, ...props }: PickerProps & FieldHookConfig<string>) => JSX.Element;
