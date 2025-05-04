import { Layout } from './ui';
import { CardsBlock } from './sections/cardProject/cardBlock';
import { XRPlace } from './sections/xrPlace/XrPlace';

export function App() {
  return (
    <Layout>
      <XRPlace />
      <CardsBlock />
    </Layout>
  );
}
