import CreateProduct from './components/CreateProduct';
import Error from './components/Error';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Product from './components/Product';
import { useProducts } from './hooks/products';

function App() {

  const { products, error, loading } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map(prod => <Product product={prod} key={prod.id} />)}


      <Modal title='Create new product'>
        <CreateProduct />
      </Modal>
    </div>
  );
}

export default App;
