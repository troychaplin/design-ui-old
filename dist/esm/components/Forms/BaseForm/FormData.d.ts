import * as yup from 'yup';
export declare const FormSchema: {
    firstname: {
        value: string;
        validation: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    };
    lastname: {
        value: string;
        validation: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    };
    address: {
        value: string;
        validation: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    };
    description: {
        value: string;
        validation: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    };
    dateTime: {
        value: string;
        validation: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    };
    location: {
        value: string;
        validation: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    };
};
