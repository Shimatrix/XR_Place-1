import { Layout } from './ui';
import { CardsBlock } from './sections/cardProject/cardBlock';
import { FAQBlock } from './sections/faq/FAQBlock';

export function App() {
  return (
    <Layout>
      <CardsBlock />
      <FAQBlock />
    </Layout>
  );
}
