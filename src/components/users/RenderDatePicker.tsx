import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

export const RenderDatePicker = ({
  input,
  placeholder,
  defaultValue,
  meta: { touched, error },
}: any) => {
  return (
    <div>
      <DatePicker
        {...input}
        locale="pt-BR"
        dateFormat="dd-MM-yyyy"
        selected={input.value}
      />
      {renderError({ touched, error })}
    </div>
  );
};

const renderError = ({ touched, error }: any) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};
