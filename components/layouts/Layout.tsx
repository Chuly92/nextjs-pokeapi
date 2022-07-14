import Head from 'next/head';
import { FC } from 'react';
import { NavBar } from '../ui/NavBar';

interface Props {
  children: React.ReactNode,
  title?: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
  
  const origin = (typeof window === 'undefined') ? '' : window.location.origin;
  
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Julieta Gallego" />
        <meta name="descripcion" content="Information about Pokemon" />
        <meta name="keywords" content={`${title}, pikachu, pokemon, pokedex`} />

        <meta property="og:title" content={`Information about ${title}`} />
        <meta property="og:description" content={`This is a page about ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
        T
      </Head>

      <NavBar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>


    </>
  )
}
