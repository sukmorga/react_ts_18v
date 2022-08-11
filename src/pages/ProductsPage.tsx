import React, { useContext } from 'react'
import CreateProduct from '../components/CreateProduct';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Product from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';

const ProductsPage = () => {

    const { products, error, loading, addProducts } = useProducts();
    const { modal, open, close } = useContext(ModalContext);

    const createHandler = (product: IProduct) => {
        close();
        addProducts(product);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <Error error={error} />}
            {products.map(prod => <Product product={prod} key={prod.id} />)}


            {modal && <Modal title='Create new product' onClose={close}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}

            <button className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-3 py-1" onClick={open}>+</button>
        </div>
    );
}

export default ProductsPage