import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom'; // 👈 Importamos Link
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard - Stock Flow</h1>
        <div className="user-info">
          <span>Bienvenido, {user?.name}</span>
          <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>¡Sistema de Gestión de Inventarios Stock Flow!</h2>
          <p>Actividad 4 - Desarrollo de Aplicaciones Web</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 Dashboard</h3>
            <p>Visualiza métricas y estadísticas de tu inventario</p>
          </div>
          <Link to="/products" className="feature-card-link">
            <div className="feature-card">
              <h3>📦 Gestión de Productos</h3>
              <p>Administra tu catálogo de productos y stock</p>
            </div>
          </Link>
          <Link to="/reports" className="feature-card-link">
            <div className="feature-card">
              <h3>📋 Reportes</h3>
              <p>Genera reportes de movimientos y análisis</p>
            </div>
          </Link>
          <div className="feature-card">
            <h3>⚙️ Configuración</h3>
            <p>Personaliza tu experiencia de usuario</p>
          </div>
        </div>

        <div className="tech-stack">
          <h3>Tecnologías Implementadas:</h3>
          <ul>
            <li>✅ ReactJS con Hooks</li>
            <li>✅ Context API para estado global</li>
            <li>✅ React Router para navegación</li>
            <li>✅ Componentes reutilizables</li>
            <li>✅ Manejo de estado con useState y useEffect</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;