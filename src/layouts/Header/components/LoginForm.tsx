import { Formik, FormikHelpers } from 'formik';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { PasswordInvisible, PasswordVisible } from '@/assets/icons';
import Button from '@/components/Styled/Button/StyledButton';
import Input from '@/components/Styled/Input/StyledInput';
import yup from '@/config/yup.validation';
import { onLogIn } from '@/store/modules/auth/slice';

const components = {
  password: <PasswordInvisible />,
  text: <PasswordVisible />,
};

interface ILoginForm {
  username: string;
  password: string;
}

function LoginForm() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [type, setType] = useState<string>('password');

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .email(t('rules:messages.email', { field: t('email_username') }))
      .required(t('rules:messages.required', { field: t('email_username') })),
    password: yup
      .string()
      .min(6, t('rules:messages.min', { field: t('password'), length: 6 }))
      .max(255, t('rules:messages.max', { field: t('password'), length: 255 }))
      .required(t('rules:messages.required', { field: t('password') }))
      .regexPassword(t('rules:messages.regex_password')),
    // .matches(/^([a-zA-Z\d!@#$%^&*+_-]+)$/, t('rules:messages.regex_password'))
  });

  const onHandleIcon = useCallback(() => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  }, [type]);

  const onSubmit = (values: ILoginForm, formikHelpers: FormikHelpers<ILoginForm>) => {
    if (Object.keys(values).length) {
      dispatch(onLogIn(true));
    }

    formikHelpers.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values, formikHelpers) => onSubmit(values, formikHelpers)}
      validationSchema={validationSchema}
    >
      {(props) => {
        const {
          values,
          errors,
          dirty,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldTouched,
        } = props;
        i18n.on('languageChanged', () => {
          Object.keys(errors).forEach((fieldName) => {
            setFieldTouched(fieldName);
          });
        });
        return (
          <form onSubmit={handleSubmit}>
            <Input
              label={t('email_username')}
              name="username"
              placeholder={t('email_username')}
              errors={errors}
              touched={touched}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />

            <Input
              name="password"
              type={type}
              label={t('password')}
              placeholder={t('password')}
              errors={errors}
              touched={touched}
              icon={components[type as keyof typeof components]}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onIconClick={onHandleIcon}
            />

            <Button
              type="submit"
              className="mt-21"
              disabled={!dirty || isSubmitting}
              style={{ height: '46px' }}
              danger
              ghost
            >
              {t('login')}
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}

export default React.memo(LoginForm);
