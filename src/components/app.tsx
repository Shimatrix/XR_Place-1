import { Layout } from './ui';
// import { useTranslation } from 'react-i18next';
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
import AboutWidget from './sections/AboutWidget/AboutWidget';
export function App() {
  return (
    <Layout>
      <CustomCursor />
      <XRPlace />
      <PartnersBlock />
      <AboutWidget />
      <ClientsTrust />
      <CardsBlock />
      <HowItWorks />
      <BusinessTeam />
      <FAQBlock />
      <WidgetSection />
    </Layout>
  );
}
