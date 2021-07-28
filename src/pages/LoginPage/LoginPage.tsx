import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import { useDidMount } from '../../hooks';

import './LoginPage.scss';
import FormTextInput from '../../components/FormTextInput';
import GlobalPreloader from '../../components/GlobalPreloader/GlobalPreloader';
import AsyncBtn from '../../components/AsyncBtn/AsyncBtn';

export interface ILoginParams {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [authInfo, setAuthInfo] = useState<{
    errorMsg: string,
    loginPending: boolean,
  }>({
    errorMsg: '',
    loginPending: false
  })
  const [pagePending, setPagePending] = useState(true);

  let navigate = useNavigate();

  useDidMount(() => {
    // isAuthenticated check
    setPagePending(false);
  });

  const onSubmit = async (values: ILoginParams) => {
    setAuthInfo(prevAuthInfo => ({ ...prevAuthInfo, loginPending: true }));

    console.log('values', values);

    setTimeout(() => {
      navigate(ROUTES.main);
    }, 300);
  };

  if (pagePending) {
    return <GlobalPreloader />;
  }

  console.log('LoginPage Render');
  return (
    <div className="login-page">
      <div className="login-page__container">
        <Form
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ handleSubmit, submitting, pristine }) => (
            <form
              className="login-page__form"
              onSubmit={handleSubmit}
            >
              {authInfo.errorMsg &&
                <div className="login-page__page-error" role="alert">
                  {authInfo.errorMsg}
                </div>
              }

              <div className="form-group">
                <Field
                  name="username"
                  component={FormTextInput}
                  className="input"
                  errorInputClass="input--error"
                  errorClass="form-group__error"
                  placeholder="Username"
                  autoFocus
                  autoComplete="new-username"
                />
              </div>
              <div className="form-group">
                <Field
                  name="password"
                  type="password"
                  component={FormTextInput}
                  className="input"
                  errorInputClass="input--error"
                  errorClass="form-group__error"
                  placeholder="Password"
                  autoComplete="new-password"
                />
              </div>

              <div>
                <AsyncBtn
                  className="btn btn--success"
                  type="submit"
                  disabled={submitting || pristine}
                  pending={authInfo.loginPending}
                  spinnerSize="12px"
                >
                  Login
                </AsyncBtn>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
}

const validate = ({ username, password }: ILoginParams) => {
  const errors: any = {};

  if (!username || !username.trim().length) {
    errors.username = 'Enter username';
  }
  if (!password || !password.trim().length) {
    errors.password = 'Enter the password'
  }
  return errors
};

export default LoginPage;