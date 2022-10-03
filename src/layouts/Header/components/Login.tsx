import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import Modal from '@/components/General/Modal/Modal';
import { ModalEnum } from '@/enums';

interface IProps {
  onClose: (open: boolean) => void;
}

interface IProperty {
  title: string;
  bottomText: string;
  linkText: string;
}

function Login(props: IProps) {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('m');

  const [property, setProperty] = useState<IProperty>({
    title: '',
    bottomText: '',
    linkText: '',
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

  const handleBack = () => {};

  const handleClose = () => {
    props.onClose(false);

    if (searchParams.has('m')) {
      searchParams.delete('m');
      setSearchParams(searchParams);
    }
  };

  const handleParams = (flag: string) => {
    searchParams.set('m', flag === ModalEnum.Login ? ModalEnum.Signup : ModalEnum.Login);
    setSearchParams(searchParams);
  };

  const LoginForm = () => {
    return <div>Login form</div>;
  };

  const RegisterForm = () => {
    return <div>Register form</div>;
  };

  const Form = () => {
    return params === ModalEnum.Login ? <LoginForm /> : <RegisterForm />;
  };

  return (
    <Modal
      title={property.title}
      bottomText={property.bottomText}
      linkText={property.linkText}
      onSwitch={(flag: string) => handleParams(flag)}
      onBack={handleBack}
      onClose={handleClose}
      render={<Form />}
    />
  );
}

export default Login;
