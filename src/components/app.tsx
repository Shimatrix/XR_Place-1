import { Layout } from './ui';
import { CardsBlock } from './sections/cardProject/cardBlock';
import { XRPlace } from './sections/xrPlace/XrPlace';
import { BusinessTeam } from './sections/BusinessTeam/BusinessTeam';
import { ClientsTrust } from './sections/ClientsTrust/ClientsTrust';
import { WidgetSection } from './sections/Widget/Widget';

export function App() {
  return (
    <Layout>
      <XRPlace />
      <ClientsTrust />
      <CardsBlock />
      <BusinessTeam />
      <WidgetSection />
    </Layout>
  );
}
