import clsx from 'clsx';

import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <nav className={clsx(styles.sideNav)}>
      <div>
        <div className={clsx(styles.sideNavMask)}>mask</div>
        <div className={clsx(styles.sideNavContainer)}>container</div>
      </div>
    </nav>
  );
}

export default Sidebar;
