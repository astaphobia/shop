import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import withData from '../lib/withData';

export default withData(props => (
  <Layout {...props}>
    Hello World.{' '}

    <ProductList />
  </Layout>
));