import styles from './Header.module.scss';
import logoImage from '../../../assets/images/logo.svg';
import { useState } from 'react';
import { BurgerButton } from '../../ui/burgerButton/BurgerButton';
import { ModalWindow } from '../../ModalDemo/ModalDemo';
import { XRLogo } from '../../ui/logo/logo';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt='Логотип' className={styles.logoImage} />
      </div>

      <div className={styles.menu}>
        <nav className={styles.nav}>
          <a
            href='#about-company'
            onClick={(e) => handleScrollToSection(e, 'about-company')}
          >
            О КОМПАНИИ
          </a>
          <span className={`${styles.divider} ${styles.firstDivider}`} />
          <a
            href='#how-it-works'
            onClick={(e) => handleScrollToSection(e, 'how-it-works')}
          >
            КАК ЭТО РАБОТАЕТ
          </a>
          <span className={`${styles.divider} ${styles.secondDivider}`} />
          <a
            href='#about-widget'
            onClick={(e) => handleScrollToSection(e, 'about-widget')}
          >
            ВОЗМОЖНОСТИ
          </a>
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

      <div className={styles.mobileControls}>
        <BurgerButton
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          className={styles.customButton}
        />
      </div>

      {isMenuOpen && (
        <div
          className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}
        >
          <nav className={styles.mobileNav}>
            <a
              href='#about-company'
              onClick={(e) => handleScrollToSection(e, 'about-company')}
            >
              О КОМПАНИИ
            </a>
            <a
              href='#how-it-works'
              onClick={(e) => handleScrollToSection(e, 'how-it-works')}
            >
              КАК ЭТО РАБОТАЕТ
            </a>
            <a
              href='#about-widget'
              onClick={(e) => handleScrollToSection(e, 'about-widget')}
            >
              ВОЗМОЖНОСТИ
            </a>
            <a href='#' onClick={handleOpenModal}>
              Назначить ДЕМО
            </a>
          </nav>

          <div className={styles.social_list}>
            <a href='#'>hello@xrlace.io</a>
            <a href='#'>Instagram</a>
            <a href='#'>LinkedIn</a>
          </div>

          <div className={styles.menuLogo}>
            <XRLogo color='#055042' />
            XR Place
          </div>
          <div className={styles.adress}>
            <p>Melikishvili str. 92/16</p>
            <p> 6004 Batumi, Georgia</p>
          </div>
        </div>
      )}

      <ModalWindow isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
}
