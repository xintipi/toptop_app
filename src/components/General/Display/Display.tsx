import clsx from 'clsx';

import styles from './Display.module.scss';

function Display(props: any) {
  return (
    <div className={clsx(styles.DivContainer)}>
      <pre className={clsx(styles.PreContainer)}>
        <strong>props</strong> = {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
}

export default Display;
