import styles from './Header.module.scss';
import logoImage from '../../../assets/images/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt='Логотип' className={styles.logoImage} />
      </div>

      <div className={styles.menu}>
        <nav className={styles.nav}>
          <a href='#'>О КОМПАНИИ</a>
          <span className={`${styles.divider} ${styles.firstDivider}`} />
          <a href='#'>КАК ЭТО РАБОТАЕТ</a>
          <span className={`${styles.divider} ${styles.secondDivider}`} />
          <a href='#'>ВОЗМОЖНОСТИ</a>
        </nav>

        <div className={styles.languageSwitcher}>
          <div className={styles.activeDot} />
          <button
            className={styles.inactive}
            type='button'
            aria-label='Switch to English'
          >
            EN
          </button>
          <span className={styles.divider} />
          <button
            className={styles.active}
            type='button'
            aria-label='Переключить на русский'
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
}
