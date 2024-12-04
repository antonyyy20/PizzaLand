'use client'
import Login from "./componentes/login";
import Menu from "./componentes/menu";
import Cart from "./componentes/carrito";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirige automáticamente a /home
    router.push('/login');
  }, [router]);

  return null; // O un indicador de carga si prefieres mostrar algo temporalmente
};

export default IndexPage;
