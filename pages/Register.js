// pages/register.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Register</h1>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Register</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
