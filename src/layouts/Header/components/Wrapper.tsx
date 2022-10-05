import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { Modal } from '@/components/General';
import { ModalEnum } from '@/enums';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface IProps {
  onClose: (open: boolean) => void;
}

interface IProperty {
  title: string;
  bottomText: string;
  linkText: string;
}

function Wrapper(props: IProps) {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('m');

  const [property, setProperty] = useState<IProperty>({
    title: '',
    bottomText: '',
    linkText: '',
  });

  const components = {
    login: <LoginForm />,
    'sign-up': <SignupForm />,
  };

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

  return (
    <Modal
      title={property.title}
      bottomText={property.bottomText}
      linkText={property.linkText}
      onSwitch={onHandleParams}
      onBack={onHandleBack}
      onClose={onHandleClose}
      render={components[params as keyof typeof components]}
    />
  );
}

export default React.memo(Wrapper);
