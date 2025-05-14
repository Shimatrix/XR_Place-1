import styles from './Header.module.scss';
import logoImage from '../../../assets/images/logo.svg';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng: 'ru' | 'en') => {
    if (lng !== currentLang) i18n.changeLanguage(lng);
  };

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt='Логотип' className={styles.logoImage} />
      </div>

      <div className={styles.menu}>
        <nav className={styles.nav}>
          <a href='#'>{t('header.menu.about')}</a>
          <span className={`${styles.divider} ${styles.firstDivider}`} />

          <a href='#'>{t('header.menu.projects')}</a>
          <span className={`${styles.divider} ${styles.secondDivider}`} />

          <a href='#'>{t('header.menu.team')}</a>
          <span className={`${styles.divider} ${styles.firstDivider}`} />

          <a
            href='#about-company'
            onClick={(e) => handleScrollToSection(e, 'about-company')}
          >
            {t('header.menu.aboutCompany')}
          </a>
          <span className={`${styles.divider} ${styles.firstDivider}`} />

          <a
            href='#how-it-works'
            onClick={(e) => handleScrollToSection(e, 'how-it-works')}
          >
            {t('header.menu.howItWorks')}
          </a>
          <span className={`${styles.divider} ${styles.secondDivider}`} />

          <a
            href='#about-widget'
            onClick={(e) => handleScrollToSection(e, 'about-widget')}
          >
            {t('header.menu.features')}
          </a>
        </nav>

        <div className={styles.languageSwitcher}>
          <div className={styles.activeDot} />
          <button
            className={currentLang === 'en' ? styles.active : styles.inactive}
            type='button'
            onClick={() => changeLanguage('en')}
            aria-label='Switch to English'
          >
            EN
          </button>
          <span className={styles.divider} />
          <button
            className={currentLang === 'ru' ? styles.active : styles.inactive}
            type='button'
            onClick={() => changeLanguage('ru')}
            aria-label='Переключить на русский'
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
}
