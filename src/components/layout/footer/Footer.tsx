import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import arrow from '../../../assets/images/arrow.svg';
import arrowMobile from '../../../assets/images/Arrowmobile.svg';
import mail from '../../../assets/images/mail.svg';
import linkedin from '../../../assets/images/inkedin.svg';
import instagram from '../../../assets/images/instagram.svg';
import logoImageWhite from '../../../assets/images/logoImageWhite.svg';
import { useState } from 'react';
import { ModalWindow } from '../../ModalDemo/ModalDemo';
import { useMediaQuery } from 'react-responsive';

export function Footer() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
      {!isMobile && (
        <div className={styles.start_button}>
          <button onClick={handleScrollToTop}>
            {t('footer.toTop')}
            <img src={arrow} alt='Arrow icon' />
          </button>
        </div>
      )}

      <div className={styles.footer_content}>
        <div className={`${styles.footer_section} ${styles.contacts_section}`}>
          <h3>{t('footer.contacts')}</h3>
          <p>
            Melikishvili str. 92/16
            <br /> 6004 Batumi, Georgia
            <br /> {t('footer.copyright')}
          </p>
        </div>

        <div className={`${styles.footer_section} ${styles.menu_section}`}>
          <h3>{t('footer.menuTitle') || 'Menu'}</h3>
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
              <a href='mailto:hello@xrlace.io'>
                <img src={mail} alt='email' />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={instagram} alt='Instagram' />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={linkedin} alt='LinkedIn' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isMobile && (
        <div className={styles.mobile_label}>
          <div className={styles.logo}>
            <img src={logoImageWhite} alt='Logo' />
            XR Place
          </div>
          <button onClick={handleScrollToTop} aria-label='Back to top'>
            <img src={arrowMobile} alt='Arrow' />
          </button>
        </div>
      )}

      <div className={styles.data_cooki_container}>
        <p>{t('footer.copyright')}</p>
        <div className={styles.links}>
          <a href='#'>{t('footer.privacy')}</a>
          <a href='#'>{t('footer.terms')}</a>
        </div>
      </div>

      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
