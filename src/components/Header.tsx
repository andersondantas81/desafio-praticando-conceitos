import styles from './Header.module.css';
import logo from '../assets/Logo.svg';

export function Header () {
  return (
    <div className={styles.header}>
      <img src={logo} alt='Ignite Feed' />
    </div>
  );
}