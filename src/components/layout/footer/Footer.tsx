import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import arrow from '../../../assets/images/arrow.svg';
import { useState } from 'react';
import { ModalWindow } from '../../ModalDemo/ModalDemo';

export function Footer() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.start_button}>
        <button onClick={handleScrollToTop}>
          {t('footer.toTop')}
          <img src={arrow} alt='Arrow icon' />
        </button>
      </div>

      <div className={styles.footer_content}>
        <div className={`${styles.footer_section} ${styles.contacts_section}`}>
          <h3>{t('footer.contacts')}</h3>
          <p>
            Melikishvili str. 92/16
            <br /> 6004 Batumi, Georgia
            <br /> Copyright ©2024 XR Place
          </p>
        </div>

        <div className={`${styles.footer_section} ${styles.menu_section}`}>
          <h3>{t('footer.menuTitle')}</h3>
          <ul className={styles.menu_list}>
            <li>
              <a
                href='#about-company'
                onClick={(e) => handleScrollToSection(e, 'about-company')}
              >
                {t('header.menu.aboutCompany')}
              </a>
            </li>
            <li>
              <a
                href='#how-it-works'
                onClick={(e) => handleScrollToSection(e, 'how-it-works')}
              >
                {t('header.menu.howItWorks')}
              </a>
            </li>
            <li>
              <a
                href='#about-widget'
                onClick={(e) => handleScrollToSection(e, 'about-widget')}
              >
                {t('header.menu.features')}
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              >
                {t('header.demo')}
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.footer_section} ${styles.social_section}`}>
          <h3>{t('footer.social')}</h3>
          <ul className={styles.social_list}>
            <li>
              <a href='mailto:hello@xrlace.io'>hello@xrlace.io</a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.lable}>XR Place</div>

      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className={styles.data_cooki_container}>
        <p>{t('footer.copyright')}</p>
        <div className={styles.links}>
          <a href='#'>{t('footer.privacy')}</a>
          <a href='#'>{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
