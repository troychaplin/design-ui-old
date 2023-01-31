import { FieldHookConfig } from 'formik';
export interface PickerProps {
    label?: string;
}
export declare const PlacesAutoComplete: ({ label, ...props }: PickerProps & FieldHookConfig<string>) => JSX.Element;
