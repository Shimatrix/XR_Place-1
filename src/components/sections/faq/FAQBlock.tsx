import { Title, TitleHighlight } from '../../ui/h2/Title';
import { AccordionItem } from '../../ui/accordion/accordionItem';
import styles from './FAQBlock.module.css';

export const FAQBlock = () => (
  <div className={styles.block}>
    <Title label='Вопросы' className={styles.titleContainer}>
      <TitleHighlight>вопросы </TitleHighlight>нашей команде
    </Title>
    <div className={styles.FAQContainer}>
      <AccordionItem title='КАК УСТАНОВИТЬ ВИДЖЕТ НА МОЙ САЙТ?'>
        Установка виджета проста и требует всего несколько шагов. После вы
        получите инструкцию по интеграции, а также доступ к нашей технической
        поддержке, которая поможет вам на любом этапе установки.
      </AccordionItem>
      <AccordionItem title='Могу ли я кастомизировать виджет под свой бренд?'>
        Да! Виджет полностью настраиваем: вы можете менять цвета, шрифты,
        логотипы, чтобы он гармонировал с визуальным стилем вашего бренда.
      </AccordionItem>
      <AccordionItem title='Как я могу создать контент для виртуального тура?'>
        Мы предоставляем инструменты и рекомендации для создания 3D-туров.
        можете воспользоваться услугами наших партнёров по съёмке.
      </AccordionItem>
      <AccordionItem title='Есть ли возможность пробного периода?'>
        Да, вы можете активировать бесплатный пробный период на 14 дней без
        указания банковской карты.
      </AccordionItem>
      <AccordionItem title='Как мне узнать стоимость виджета?'>
        Стоимость рассчитывается индивидуально — в зависимости от вашего
        выбранного функционала. Свяжитесь с нами для консультации.
      </AccordionItem>
    </div>
  </div>
);
