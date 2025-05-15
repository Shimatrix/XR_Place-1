import { useState } from 'react';
import style from './XrPlace.module.css';
import heroImg from '../../../assets/images/Frame.png';
import { UIButton } from '../../ui/button/button';
import { ModalWindow } from '../../ModalDemo/ModalDemo';
import { useTranslation } from 'react-i18next';

export function XRPlace() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={style.block}>
      <div className={style.vertical_line} />
      <div className={style.line_right} />
      <div className={style.line_left} />
      <div className={style.cross} />
      <div className={style.corner}>
        <div className={style.corner_arrow} />
      </div>
      <div className={style.dot_figure} />
      <div className={style.diagonal_figure} />
      <h1 className={style.main_title}>{t('xr.title')}</h1>
      <div className={style.content}>
        <div className={style.left_block}>
          <p className={style.text}>{t('xr.description')}</p>
          <div className={style.button_demo_animation}>
            <UIButton
              text={t('xr.button')}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <ModalWindow
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
        <div className={style.right_block}>
          <span className={style.text_label}>place for business</span>
          <img className={style.img_label} src={heroImg} alt={t('xr.title')} />
        </div>
      </div>
    </section>
  );
}
