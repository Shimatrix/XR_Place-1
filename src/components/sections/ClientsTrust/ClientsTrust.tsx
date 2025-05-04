import { Title, TitleHighlight } from '../../ui/h2/Title';
import { ClientCard } from '../../ui/ClientCard/ClientCard';
import styles from './ClientsTrust.module.scss';
import conversionIcon from '../../../assets/icons/conversion-icon.png';
import trustIcon from '../../../assets/icons/trust-icon.png';
import planningIcon from '../../../assets/icons/planning-icon.png';
import interactiveIcon from '../../../assets/icons/interactive-icon.png';
import integrationIcon from '../../../assets/icons/integration-icon.png';
import salesIcon from '../../../assets/icons/sales-icon.png';

const cards = [
  {
    title: 'ПОВЫШЕНИЕ КОНВЕРСИИ В САЙТ',
    url: conversionIcon
  },
  {
    title: 'ЛЁГКОЕ ВСТРАИВАНИЕ',
    url: integrationIcon
  },
  {
    title: 'УВЕЛИЧЕНИЕ ДОВЕРИЯ',
    url: trustIcon
  },
  {
    title: 'УВЕЛИЧЕНИЕ ПРОДАЖ НЕДВИЖИМОСТИ НА 15%',
    url: salesIcon
  },
  {
    title: 'ТОЧНОСТЬ ПЛАНИРОВКИ',
    url: planningIcon
  },
  {
    title: 'ИНТЕРАКТИВНОСТЬ',
    url: interactiveIcon
  }
];

export function ClientsTrust() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Title label='СОТРУДНИЧЕСТВО'>
          КЛИЕНТЫ НАМ <TitleHighlight>ДОВЕРЯЮТ</TitleHighlight>
        </Title>
        <p className={styles.description}>
          Наши клиенты — это часть нашей команды. С нами вы всегда можете
          рассчитывать на поддержку и экспертизу, ведь мы стремимся к тому,
          чтобы наше партнёрство не оставило вас равнодушными
        </p>
      </div>
      <div className={styles.cards}>
        {cards.map((card, index) => {
          const gridClass = `div${index + 1}`;
          return (
            <ClientCard
              key={index}
              title={card.title}
              url={card.url}
              className={styles[gridClass]}
            />
          );
        })}
      </div>
    </section>
  );
}
