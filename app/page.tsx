import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header user={{ name: 'Juan Pérez' }} /> {/* Asegúrate de pasar un objeto de usuario válido */}
      <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
        <Image
          src="/logo.png" // Asegúrate de agregar tu logo en public/
          alt="Eventos Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">Listado de Eventos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          <div className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Evento 1</h2>
            <p>Descripción breve del evento 1.</p>
            <Link href="/event/1" className="text-blue-500 hover:underline">
              Ver detalles
            </Link>
          </div>
          <div className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Evento 2</h2>
            <p>Descripción breve del evento 2.</p>
            <Link href="/event/2" className="text-blue-500 hover:underline">
              Ver detalles
            </Link>
          </div>
          {/* Agrega más eventos aquí */}
        </div>
      </main>
      <Footer />
    </>
  );
}
