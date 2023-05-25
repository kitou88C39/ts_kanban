/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Read } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReadCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    todoId: "",
    readerId: "",
  };
  const [todoId, setTodoId] = React.useState(initialValues.todoId);
  const [readerId, setReaderId] = React.useState(initialValues.readerId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTodoId(initialValues.todoId);
    setReaderId(initialValues.readerId);
    setErrors({});
  };
  const validations = {
    todoId: [{ type: "Required" }],
    readerId: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          todoId,
          readerId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Read(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ReadCreateForm")}
      {...rest}
    >
      <TextField
        label="Todo id"
        isRequired={true}
        isReadOnly={false}
        value={todoId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              todoId: value,
              readerId,
            };
            const result = onChange(modelFields);
            value = result?.todoId ?? value;
          }
          if (errors.todoId?.hasError) {
            runValidationTasks("todoId", value);
          }
          setTodoId(value);
        }}
        onBlur={() => runValidationTasks("todoId", todoId)}
        errorMessage={errors.todoId?.errorMessage}
        hasError={errors.todoId?.hasError}
        {...getOverrideProps(overrides, "todoId")}
      ></TextField>
      <TextField
        label="Reader id"
        isRequired={true}
        isReadOnly={false}
        value={readerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              todoId,
              readerId: value,
            };
            const result = onChange(modelFields);
            value = result?.readerId ?? value;
          }
          if (errors.readerId?.hasError) {
            runValidationTasks("readerId", value);
          }
          setReaderId(value);
        }}
        onBlur={() => runValidationTasks("readerId", readerId)}
        errorMessage={errors.readerId?.errorMessage}
        hasError={errors.readerId?.hasError}
        {...getOverrideProps(overrides, "readerId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
