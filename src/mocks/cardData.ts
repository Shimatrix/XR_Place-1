export interface CardData {
  id: number;
  imageUrl: string;
  captionLine1: string;
  captionLine2: string;
}

export const mockCards: CardData[] = [
  {
    id: 1,
    imageUrl: 'src/assets/images/project-card/project1.png',
    captionLine1: 'северный порт',
    captionLine2: 'агентство недвижимости'
  },
  {
    id: 2,
    imageUrl: 'src/assets/images/project-card/project2.png',
    captionLine1: 'самолет',
    captionLine2: 'компания недвижимости'
  },
  {
    id: 3,
    imageUrl: 'src/assets/images/project-card/project3.png',
    captionLine1: 'mira',
    captionLine2: 'real estate agency'
  }
  // Добавьте больше карточек по необходимости
];
