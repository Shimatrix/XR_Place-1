import { Layout } from './ui';
import { CardsBlock } from './sections/cardProject/cardBlock';
import { XRPlace } from './sections/xrPlace/XrPlace';
import { BusinessTeam } from './sections/BusinessTeam/BusinessTeam';
import { ClientsTrust } from './sections/ClientsTrust/ClientsTrust';
import { WidgetSection } from './sections/Widget/Widget';
import 'react-phone-number-input/style.css';
import { CustomCursor } from './CustomCursor/CustomCursor';
import { FAQBlock } from './sections/faq/FAQBlock';


export function App() {
  return (
    <Layout>
      <CustomCursor />
      <XRPlace />
      <ClientsTrust />
      <CardsBlock />
      <BusinessTeam />
      <FAQBlock />
      <WidgetSection />
    </Layout>
  );
}
