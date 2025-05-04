import style from './XrPlace.module.css';
import heroImg from '../../../assets/images/Frame.png';
import { UIButton } from '../../ui/button/button';

export function XRPlace() {
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
      <h1 className={style.main_title}>xr place</h1>
      <div className={style.content}>
        <div className={style.left_block}>
          <p className={style.text}>
            Удобные инструменты для презентации объектов: создавайте виртуальные
            туры с минимальными затратами времени и ресурсов
          </p>
          <UIButton text='Назначить демо ' />
        </div>
        <div className={style.right_block}>
          <span className={style.text_label}>place for business</span>
          <img className={style.img_label} src={heroImg} alt='3D картинка ' />
        </div>
      </div>
    </section>
  );
}
