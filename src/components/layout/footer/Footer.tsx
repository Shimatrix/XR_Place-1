import styles from './Footer.module.scss';
import arrow from '../../../assets/images/arrow.svg';
import arrowmobile from '../../../assets/images/Arrowmobile.svg';
import mail from '../../../assets/images/mail.svg';
import inkedin from '../../../assets/images/inkedin.svg';
import instagram from '../../../assets/images/instagram.svg';
import logoImageWhite from '../../../assets/images/logoImageWhite.svg';
import { useState } from 'react';
import { ModalWindow } from '../../ModalDemo/ModalDemo';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
    <footer className={styles.footer}>
      {/* DESKTOP VERSION */}
      <div className={styles.footer_desktop}>
        <div className={styles.start_button}>
          <button onClick={handleScrollToTop} aria-label={t('footer.toTop')}>
            {t('footer.toTop')}
            <img src={arrow} alt={t('footer.toTop')} />
          </button>
        </div>
        <div className={styles.footer_content}>
          <div
            className={`${styles.footer_section} ${styles.contacts_section}`}
          >
            <h3>{t('footer.contacts')}</h3>
            <p>
              Melikishvili str. 92/16
              <br /> 6004 Batumi, Georgia
              <br /> {t('footer.copyright')}
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
                  {t('footer.menu.about')}
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
                  {t('footer.menu.features')}
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
                  {t('footer.menu.demo')}
                </a>
              </li>
            </ul>
          </div>

          <div className={`${styles.footer_section} ${styles.social_section}`}>
            <h3>{t('footer.social')}</h3>
            <ul className={styles.social_list}>
              <li>
                <a href='#'>hello@xrlace.io</a>
              </li>
              <li>
                <a href='#'>Instagram</a>
              </li>
              <li>
                <a href='#'>LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.lable}>XR Place</div>
        <div className={styles.data_cooki_container}>
          <p>{t('footer.copyright')}</p>
          <div className={styles.links}>
            <a href='#'>{t('footer.privacy')}</a>
            <a href='#'>{t('footer.terms')}</a>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className={styles.footer_mobile}>
        <div className={styles.mobile_label}>
          <div className={styles.logo}>
            <img src={logoImageWhite} alt='Logo' />
            XR Place
          </div>
          <button
            className={styles.start_button}
            onClick={handleScrollToTop}
            aria-label={t('footer.toTop')}
          >
            <img src={arrowmobile} alt={t('footer.toTop')} />
          </button>
        </div>
        <div className={styles.footer_content}>
          <div className={styles.footer_section}>
            <p>
              Melikishvili str. 92/16
              <br /> 6004 Batumi, Georgia
              <br /> {t('footer.copyright')}
            </p>
          </div>
          <div className={styles.footer_section}>
            <ul className={styles.menu_list}>
              <li>
                <a
                  href='#about-company'
                  onClick={(e) => handleScrollToSection(e, 'about-company')}
                >
                  {t('footer.menu.about')}
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
                  {t('footer.menu.features')}
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
                  {t('footer.menu.demo')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className={styles.social_list}>
              <li>
                <img src={mail} alt='Email' />
              </li>
              <li>
                <img src={instagram} alt='Instagram' />
              </li>
              <li>
                <img src={inkedin} alt='LinkedIn' />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.data_cooki_container}>
          <p>{t('footer.copyright')}</p>
          <div className={styles.links}>
            <a href='#'>{t('footer.privacy')}</a>
            <a href='#'>{t('footer.terms')}</a>
          </div>
        </div>
      </div>

      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
