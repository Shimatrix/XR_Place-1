import styles from './Footer.module.scss';
import arrow from '../../../assets/images/arrow.svg';
import { useState } from 'react';
import { ModalWindow } from '../../ModalDemo/ModalDemo';

export function Footer() {
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.start_button}>
        <button onClick={handleScrollToTop}>
          В начало
          <img src={arrow} alt='Стрелка' />
        </button>
      </div>
      <div className={styles.footer_content}>
        <div className={`${styles.footer_section} ${styles.contacts_section}`}>
          <h3>Контакты</h3>
          <p>
            Melikishvili str. 92/16
            <br /> 6004 Batumi, Georgia
            <br /> Copyright ©2024 XR Place
          </p>
        </div>

        <div className={`${styles.footer_section} ${styles.menu_section}`}>
          <h3>Меню</h3>
          <ul className={styles.menu_list}>
            <li>
              <a
                href='#about-company'
                onClick={(e) => handleScrollToSection(e, 'about-company')}
              >
                О компании
              </a>
            </li>
            <li>
              <a
                href='#how-it-works'
                onClick={(e) => handleScrollToSection(e, 'how-it-works')}
              >
                Как это работает
              </a>
            </li>
            <li>
              <a
                href='#about-widget'
                onClick={(e) => handleScrollToSection(e, 'about-widget')}
              >
                Возможности
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
                Назначить ДЕМО
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footer_section} ${styles.social_section}`}>
          <h3>Соцсети</h3>
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
      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className={styles.data_cooki_container}>
        <p>© 2025 XRPlace. Все права защищены</p>
        <div className={styles.links}>
          <a href='#'>Политика конфиденциальности</a>
          <a href='#'>Условия использования</a>
        </div>
      </div>
    </footer>
  );
}
