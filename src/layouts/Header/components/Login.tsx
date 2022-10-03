import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { PasswordInvisible, PasswordVisible } from '@/assets/icons';
import Modal from '@/components/General/Modal/Modal';
import Button from '@/components/Styled/Button/StyledButton';
import Input from '@/components/Styled/Input/StyledInput';
import { ModalEnum } from '@/enums';

interface IProps {
  onClose: (open: boolean) => void;
}

interface IProperty {
  title: string;
  bottomText: string;
  linkText: string;
}

interface ILoginForm {
  username: string;
  password: string;
}

function Login(props: IProps) {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('m');

  const [type, setType] = useState<string>('password');
  const [property, setProperty] = useState<IProperty>({
    title: '',
    bottomText: '',
    linkText: '',
  });
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (params === ModalEnum.Login) {
      setProperty({
        title: t('login'),
        bottomText: t('dont_have_account'),
        linkText: t('sign_up'),
      });
    } else {
      setProperty({
        title: t('sign_up'),
        bottomText: t('have_account'),
        linkText: t('login'),
      });
    }
  }, [params]);

  const onHandleBack = useCallback(() => {}, []);

  const onHandleClose = useCallback(() => {
    if (searchParams.has('m')) {
      searchParams.delete('m');
      setSearchParams(searchParams);
    }
    props.onClose(false);
  }, [searchParams]);

  const onHandleParams = useCallback(
    (flag: string) => {
      searchParams.set(
        'm',
        flag === ModalEnum.Login ? ModalEnum.Signup : ModalEnum.Login,
      );
      setSearchParams(searchParams);
    },
    [searchParams],
  );

  const onHandleChangeUsername = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      loginForm.username = evt.target.value;
    },
    [loginForm.username],
  );

  const onHandleChangePassword = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      loginForm.password = evt.target.value;
    },
    [loginForm.password],
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

  const LoginForm = () => {
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
  };

  const RegisterForm = () => {
    return <form>Register form</form>;
  };

  const Form = () => {
    return params === ModalEnum.Login ? <LoginForm /> : <RegisterForm />;
  };

  return (
    <Modal
      title={property.title}
      bottomText={property.bottomText}
      linkText={property.linkText}
      onSwitch={onHandleParams}
      onBack={onHandleBack}
      onClose={onHandleClose}
      render={<Form />}
    />
  );
}

export default React.memo(Login);
