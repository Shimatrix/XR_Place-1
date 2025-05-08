import { Layout } from './ui';
import { CardsBlock } from './sections/cardProject/cardBlock';
import { XRPlace } from './sections/xrPlace/XrPlace';
import { BusinessTeam } from './sections/BusinessTeam/BusinessTeam';
import { ClientsTrust } from './sections/ClientsTrust/ClientsTrust';
import { WidgetSection } from './sections/Widget/Widget';
import 'react-phone-number-input/style.css';
import { CustomCursor } from './CustomCursor/CustomCursor';
import { FAQBlock } from './sections/faq/FAQBlock';
import HowItWorks from './sections/how_it_works/HowItWorks';
import { PartnersBlock } from './sections//PartnersBlock/PartnerBlock';


export function App() {
  return (
    <Layout>
      <CustomCursor />
      <XRPlace />
      <PartnersBlock />
      <ClientsTrust />
      <CardsBlock />
      <HowItWorks />
      <BusinessTeam />
      <FAQBlock />
      <WidgetSection />
    </Layout>
  );
}
