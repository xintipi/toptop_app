import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PasswordInvisible, PasswordVisible } from '@/assets/icons';
import Button from '@/components/Styled/Button/StyledButton';
import Input from '@/components/Styled/Input/StyledInput';

interface ILoginForm {
  username: string;
  password: string;
}

function LoginForm() {
  const { t } = useTranslation();

  const [type, setType] = useState<string>('password');
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    username: '',
    password: '',
  });

  const onHandleChangeUsername = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setLoginForm({
        ...loginForm,
        username: evt.target.value,
      });
    },
    [loginForm],
  );

  const onHandleChangePassword = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setLoginForm({
        ...loginForm,
        password: evt.target.value,
      });
    },
    [loginForm],
  );

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);
  };

  const onHandleIcon = useCallback(() => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  }, [type]);

  return (
    <form onSubmit={onHandleSubmit}>
      <Input
        label={t('email_username')}
        name="username"
        placeholder={t('email_username')}
        onChange={onHandleChangeUsername}
        value={loginForm.username}
      />

      <Input
        name="password"
        type={type}
        label={t('password')}
        placeholder={t('password')}
        icon={type === 'password' ? <PasswordInvisible /> : <PasswordVisible />}
        value={loginForm.password}
        onChange={onHandleChangePassword}
        onIconClick={onHandleIcon}
      />

      <Button type="submit" className="mt-21" style={{ height: '46px' }} danger ghost>
        {t('login')}
      </Button>
    </form>
  );
}

export default React.memo(LoginForm);
