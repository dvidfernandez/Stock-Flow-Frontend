import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Reports.css';

const Reports = () => {
  const { user } = useAuth();

  return (
    <div className="reports">
      <header className="reports-header">
        <h1>Reportes de Inventario</h1>
        <p>Resumen analítico del estado actual de tu stock, {user?.name}.</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>133</h2>
          <p>Unidades totales en inventario</p>
        </div>
        <div className="stat-card">
          <h2>2</h2>
          <p>Productos con stock bajo</p>
        </div>
        <div className="stat-card">
          <h2>$15,423.85</h2>
          <p>Valor total del inventario</p>
        </div>
        <div className="stat-card">
          <h2>5</h2>
          <p>Productos activos</p>
        </div>
      </div>

      <div className="report-note">
        <p>ℹ️ Estos reportes se generan automáticamente a partir de los datos del sistema.</p>
      </div>
    </div>
  );
};

export default Reports;