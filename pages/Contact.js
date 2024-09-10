// pages/contact.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Contacto</h1>
          <p>Datos de contacto:</p>
          <p>Email: contacto@eventos.com</p>
          <p>Teléfono: +123 456 789</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
