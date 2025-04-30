import styles from './Header.module.scss';
import logoImage from '../../../assets/images/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      {/* Логотип */}
      <div className={styles.logo}>
        <img src={logoImage} alt='Логотип' className={styles.logoImage} />
      </div>

      {/* Меню и переключение языка */}
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <a href='#'>О КОМПАНИИ</a>
          <span className={styles.divider} />
          <a href='#'>КАК ЭТО РАБОТАЕТ</a>
          <span className={styles.divider} />
          <a href='#'>ВОЗМОЖНОСТИ</a>
        </nav>

        {/* Переключение языка */}
        <div className={styles.languageSwitcher}>
          <div className={styles.activeDot} />
          <span className={styles.inactive}>EN</span>
          <span className={styles.divider} />
          <span className={styles.active}>RU</span>
        </div>
      </div>
    </header>
  );
}
