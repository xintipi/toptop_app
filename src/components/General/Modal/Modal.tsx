import clsx from 'clsx';
import React, { MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'react-router-dom';

import { Back, Close } from '@/assets/icons';

import styles from './Modal.module.scss';

export interface IProps {
  title: string;
  bottomText: string;
  linkText: string;
  render: ReactNode;
  onSwitch: (event: string) => void;
  onBack: (event: MouseEvent<HTMLDivElement>) => void;
  onClose: (event: MouseEvent<HTMLDivElement>) => void;
}

function Modal(props: IProps) {
  const [searchParams] = useSearchParams();

  return createPortal(
    <div className={clsx(styles.ModalContainer, 'd-flex', 'position-fixed')}>
      <div className={clsx(styles.ModalMask, 'position-fixed')}></div>
      <div className={clsx(styles.ContentContainer, 'position-relative')}>
        <div className={clsx(styles.Back)} onClick={(event) => props.onBack(event)}>
          <Back />
        </div>
        <div className={clsx(styles.ModalContent, 'd-flex', 'pt-48')}>
          <div className={clsx(styles.PageWrapper)}>
            <div className={clsx(styles.LoginContainer)}>
              <div className={clsx(styles.Title, 'fs-32', 'text-center', 'fw-bold')}>
                {props.title}
              </div>
              {props.render}
            </div>
          </div>
          <div className={clsx(styles.Container, 'fs-15')}>
            <div>{props.bottomText}</div>
            <a
              className={clsx(styles.Link, 'fw-bold', 'fs-12')}
              onClick={() => props.onSwitch(searchParams.get('m') as string)}
            >
              <span className={clsx(styles.LinkText, 'fw-bold', 'fs-15', 'ml-5')}>
                {props.linkText}
              </span>
            </a>
          </div>
        </div>
        <div
          className={clsx(styles.CloseWrapper)}
          onClick={(event) => props.onClose(event)}
        >
          <Close />
        </div>
      </div>
    </div>,
    document.querySelector('#modal') as HTMLDivElement,
  );
}

export default React.memo(Modal);
