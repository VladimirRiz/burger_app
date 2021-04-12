import Layout from './hoc/Layout';

import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
      <Checkout />
    </div>
  );
}

export default App;
