import { MutableRefObject } from "react";
import { FieldRenderProps } from "react-final-form";

import Spinner from "./Spinner/Spinner";

interface IFormTextInputProps {
  input: FieldRenderProps<string, HTMLInputElement>['input'];
  meta: FieldRenderProps<string | number, HTMLInputElement>['meta'];
  className?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  serverError?: string;
  placeholder?: string;
  errorClass?: string;
  errorInputClass?: string;
  spinnerClass?: string;
  asyncValidation?: boolean;
  inputRef?: MutableRefObject<HTMLInputElement>;
}

const FormTextInput = (props: IFormTextInputProps) => {
  const {
    input,
    autoFocus,
    autoComplete,
    disabled,
    className,
    placeholder,
    serverError,
    inputRef,
    meta: { error, touched, active, validating, dirty }
  } = props;

  const isClientError = error && touched && !active;

  const errorInputClass = isClientError
    ? props.errorInputClass
    : '';

  const renderFieldError = () => {
    let errorText: string = '';

    if (props.asyncValidation && error && dirty) {
      errorText = error;
    }
    else if (isClientError) {
      errorText = error;
    }
    else if (serverError && !error) {
      errorText = serverError;
    }

    if (errorText) {
      return <div className={props.errorClass}>{errorText}</div>
    }
  }

  return (
    <>
      <input
        {...input}
        disabled={disabled}
        type={input.type || "text"}
        ref={inputRef}
        placeholder={placeholder}
        className={`${className} ${errorInputClass}`}
        name={input.name}
        value={input.value}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
      />

      {renderFieldError()}

      {validating && <Spinner size="14px" className={props.spinnerClass} />}
    </>
  )
}

export default FormTextInput;