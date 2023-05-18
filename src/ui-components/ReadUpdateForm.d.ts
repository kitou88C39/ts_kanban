/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Read } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReadUpdateFormInputValues = {
    todoId?: string;
    readerId?: string;
};
export declare type ReadUpdateFormValidationValues = {
    todoId?: ValidationFunction<string>;
    readerId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReadUpdateFormOverridesProps = {
    ReadUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    todoId?: PrimitiveOverrideProps<TextFieldProps>;
    readerId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReadUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReadUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    read?: Read;
    onSubmit?: (fields: ReadUpdateFormInputValues) => ReadUpdateFormInputValues;
    onSuccess?: (fields: ReadUpdateFormInputValues) => void;
    onError?: (fields: ReadUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReadUpdateFormInputValues) => ReadUpdateFormInputValues;
    onValidate?: ReadUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReadUpdateForm(props: ReadUpdateFormProps): React.ReactElement;
