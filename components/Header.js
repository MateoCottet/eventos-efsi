// components/Header.js
import Link from 'next/link';

const Header = ({ user }) => {
  return (
    <header>
      <div className="container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/contact">Contacto</Link>
          {user ? (
            <div className="user-info">
              <span>{user.name}</span>
              <button>Logout</button>
            </div>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
