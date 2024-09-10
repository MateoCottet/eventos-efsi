// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Eventos</h1>
          <div className="event-list">
            <div className="event-item">
              <h2>Evento 1</h2>
              <p>Descripción del evento 1.</p>
              <a href="pages/event/1">Ver detalles</a>
            </div>
            <div className="event-item">
              <h2>Evento 2</h2>
              <p>Descripción del evento 2.</p>
              <a href="pages/event/2">Ver detalles</a>
            </div>
            {/* Agrega más eventos aquí */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
