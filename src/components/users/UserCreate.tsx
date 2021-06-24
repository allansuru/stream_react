import React, { FormEvent, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import User from "interfaces/user";
import Stream from "interfaces/stream";
import { createUser } from "actions";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt_br from "date-fns/locale/pt-BR";
import { RenderDatePicker } from "./RenderDatePicker";

registerLocale("pt-BR", pt_br);

const renderInput = ({ input, label, meta }: any) => {
  const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {renderError(meta)}
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

const validate = (formValues: any) => {
  const errors: any = {};
  if (!formValues.name) {
    errors.name = "You must enter a name";
  } else if (formValues.name.length < 4) {
    errors.name = "Name must be 4 characteres or more";
  }
  debugger;
  if (!formValues.datePicker) {
    errors.datePicker = "You must enter a date";
  }

  return errors;
};

export const onSubmit = (formValues: any, dispatch: any, form: any) => {
  const newUser: User = { ...formValues };
  dispatch(createUser(newUser));
};

const UserCreateForm = (props: any) => {
  const { handleSubmit, pristine, submitting, invalid } = props;
  const { payload: streams } = useSelector((state: any) => state.streams);
  const dispatch = useDispatch();

  return (
    <>
      <form
        className="ui form error"
        onSubmit={handleSubmit(onSubmit, dispatch)}
      >
        <div className="field">
          <Field
            name="name"
            component={renderInput}
            type="text"
            label="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="inline fields">
          <div className="field">
            <label>Sex</label>
            <div className="field">
              <label>
                <Field
                  name="sex"
                  checked={true}
                  component="input"
                  type="radio"
                  value="M"
                />{" "}
                Male
              </label>
              <label>
                <Field name="sex" component="input" type="radio" value="F" />{" "}
                Female
              </label>
            </div>
          </div>
          <div className="field">
            <label>Selecione uma data</label>
            <div>
              <Field name="datePicker" component={RenderDatePicker} />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Selecione um stream</label>

          <div>
            <Field name="stream" component="select">
              <option></option>
              {streams.map((s: Stream) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </Field>
          </div>
        </div>
        <div>
          <button
            className="ui button primary"
            type="submit"
            disabled={pristine || invalid}
          >
            Save User
          </button>
        </div>
      </form>
    </>
  );
};

export default reduxForm({
  form: "userForm",
  validate,
})(UserCreateForm);
