import React, { FormEvent } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import User from "interfaces/user";
import Stream from "interfaces/stream";
import { createUser } from "actions";

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
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  return errors;
};

export const onSubmit = (
  formValues: FormEvent<HTMLFormElement>,
  dispatch: any
) => {
  dispatch(createUser(formValues));
};

const UserCreateForm = (props: any) => {
  const { handleSubmit, pristine, submitting } = props;
  const { payload: streams } = useSelector((state: any) => state.streams);
  const dispatch = useDispatch();

  return (
    <>
      <form className="ui form" onSubmit={handleSubmit(onSubmit, dispatch)}>
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
                <Field name="sex" component="input" type="radio" value="M" />{" "}
                Male
              </label>
              <label>
                <Field name="sex" component="input" type="radio" value="F" />{" "}
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="field">
          <label>Selecione um stream</label>

          <div>
            <Field name="stream" component="select">
              <option></option>
              {streams.map((s: Stream) => (
                <option value={s.id}>{s.title}</option>
              ))}
            </Field>
          </div>
        </div>
        <div>
          <button
            className="ui button primary"
            type="submit"
            disabled={submitting}
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
