import { Layout } from './ui';
import { CardsBlock } from './sections/cardProject/cardBlock';
import { XRPlace } from './sections/xrPlace/XrPlace';
import { BusinessTeam } from './sections/BusinessTeam/BusinessTeam';

export function App() {
  return (
    <Layout>
      <XRPlace />
      <CardsBlock />
      <BusinessTeam />
    </Layout>
  );
}
