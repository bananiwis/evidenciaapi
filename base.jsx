import React from 'react';
import './App.css';
import logo from './image.png'; // Importa la imagen correctamente

function Base() {
  return (
    <div className="main-container">
      <header>
        <div className="logo">
          <img src={logo} alt="FarmaX Logo" />
        </div>
        <div>
          <strong>Usuario</strong>
          <small>Cargo</small>
          <button style={{ marginLeft: '10px' }}>Ver perfil</button>
        </div>
      </header>

      <nav>
        <a href="#" className="active">Gestión de Inventario</a>
        <a href="#">Reportes</a>
        <a href="#">Ventas</a>
        <a href="#">Cliente</a>
      </nav>


      <div className="tabs">
        <button id="agregarProductoBtn">Agregar Producto</button>
        <button>Editar Producto</button>
        <button>Control de Vencimientos</button>
      </div>

      <div className="search-bar">
        <input type="text" id="searchInput" placeholder="Buscar producto..." />
        <button title="Buscar">🔍</button>
      </div>

      <div className="inventory-section">
        <div className="form-container">
          <div className="product-image">+</div>
          <div className="form-grid">
            <input type="text" placeholder="Nombre comercial" />
            <input type="text" placeholder="Nombre genérico" />
            <input type="text" placeholder="Concentración" />
            <input type="text" placeholder="Laboratorio" />
            <input type="number" placeholder="Cantidad" />
            <input type="date" placeholder="Fecha de Vencimiento" />
            <input type="text" placeholder="INVIMA" />
            <input type="text" placeholder="Categoría" />
            <input type="text" placeholder="Precio de venta" />
          </div>
        </div>

        <div className="bottom-row">
          <div className="barcode">
            <span className="link">Agregar código de barras</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Base;