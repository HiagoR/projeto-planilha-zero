import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';

import './styles.css';

const ListProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            api.get('/produtos').then(response => {
                setProducts(response.data);
            });
        }

        getProducts();
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="table-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Preço</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.nome}</td>
                                    <td>{product.valor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ListProducts;