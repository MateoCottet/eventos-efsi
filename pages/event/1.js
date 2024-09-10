// pages/event/[id].js
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EventDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Detalle del Evento {id}</h1>
          <p>Descripción del evento {id}.</p>
          {/* Agrega más detalles aquí */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventDetail;
