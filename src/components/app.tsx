import { Layout } from './ui';
import { CardsBlock } from './sections/cardProject/cardBlock';
import { BusinessTeam } from './sections/BusinessTeam/BusinessTeam';

export function App() {
  return (
    <Layout>
      <CardsBlock />
      <BusinessTeam />
    </Layout>
  );
}
