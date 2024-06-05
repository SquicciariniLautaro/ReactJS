import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const mockProducts = [
{ id: '1', category: 'vehiculos', name: 'Auto' },
{ id: '2', category: 'vehiculos', name: 'Bicicleta' },
{ id: '3', category: 'electronica', name: 'Notebook' },
{ id: '4', category: 'electronica', name: 'Smartphone' },
{ id: '5', category: 'muebles', name: 'Silla' },
{ id: '6', category: 'muebles', name: 'Mesa' }
];

function ItemListContainer() {
const { id: categoryId } = useParams();
const [products, setProducts] = useState([]);

useEffect(() => {
    if (categoryId) {
    setProducts(mockProducts.filter(product => product.category === categoryId));
    } else {
    setProducts(mockProducts);
    }
}, [categoryId]);

return (
    <div>
    <h1>Catálogo</h1>
    <ul>
        {products.map(product => (
        <li key={product.id}>
            <Link to={`/item/${product.id}`}>{product.name}</Link>
        </li>
        ))}
    </ul>
    </div>
);
}

export default ItemListContainer;