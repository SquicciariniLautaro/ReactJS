import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockProducts = [
{ id: '1', name: 'Auto', description: 'Un auto rápido' },
{ id: '2', name: 'Bicicleta', description: 'Una bicicleta agradable' },
{ id: '3', name: 'NoteBook', description: 'Una NoteBook potente' },
{ id: '4', name: 'Smartphone', description: 'Un smartphone inteligente' },
{ id: '5', name: 'Silla', description: 'Una silla cómoda' },
{ id: '6', name: 'Mesa', description: 'Una mesa robusta' }
];

function ItemDetailContainer() {
const { id: itemId } = useParams();
const [product, setProduct] = useState(null);

useEffect(() => {
    const foundProduct = mockProducts.find(product => product.id === itemId);
    setProduct(foundProduct);
}, [itemId]);

if (!product) {
    return <div>Cargando...</div>;
}

return (
    <div>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    </div>
);
}

export default ItemDetailContainer;