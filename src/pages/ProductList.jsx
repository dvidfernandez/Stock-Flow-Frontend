import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockProducts = [
        { id: 1, name: "Laptop Pro", category: "Electrónica", stock: 15, price: 899.99 },
        { id: 2, name: "Mouse Inalámbrico", category: "Periféricos", stock: 50, price: 25.50 },
        { id: 3, name: "Teclado Mecánico", category: "Periféricos", stock: 30, price: 89.99 },
        { id: 4, name: "Monitor 27\"", category: "Electrónica", stock: 8, price: 299.99 },
        { id: 5, name: "Cargador USB-C", category: "Accesorios", stock: 100, price: 15.00 }
      ];
      setProducts(mockProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <header className="product-header">
        <h1>Gestión de Productos</h1>
        <p>Bienvenido, {user?.name}. Inventario actualizado en tiempo real.</p>
      </header>

      {loading ? (
        <div className="loading">Cargando productos...</div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p><strong>Categoría:</strong> {product.category}</p>
              <p><strong>Stock:</strong> {product.stock} unidades</p>
              <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;