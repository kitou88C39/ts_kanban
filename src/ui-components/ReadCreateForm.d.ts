/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReadCreateFormInputValues = {
    todoId?: string;
    readerId?: string;
};
export declare type ReadCreateFormValidationValues = {
    todoId?: ValidationFunction<string>;
    readerId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReadCreateFormOverridesProps = {
    ReadCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    todoId?: PrimitiveOverrideProps<TextFieldProps>;
    readerId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReadCreateFormProps = React.PropsWithChildren<{
    overrides?: ReadCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReadCreateFormInputValues) => ReadCreateFormInputValues;
    onSuccess?: (fields: ReadCreateFormInputValues) => void;
    onError?: (fields: ReadCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReadCreateFormInputValues) => ReadCreateFormInputValues;
    onValidate?: ReadCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReadCreateForm(props: ReadCreateFormProps): React.ReactElement;
