import { Card, Container, Grid, Image, Text, Button } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import pokeApi from '../../api/pokeApi';
import { Layout } from "../../components/layouts";
import { Pokemon } from '../../interfaces';
import { PokemonListResponse } from '../../interfaces/pokemon-list';
import { getPokemonInfo } from '../../utils/getPokemonInfo';
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonPageByName: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(false);
  
  useEffect(() => {}, [isInFavorites]);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    
    if (isInFavorites) return;
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
      
    })
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>

        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                onPress={onToggleFavorite}
                color='gradient' bordered ghost
              >
                {isInFavorites ? 'Remove from Favorites' : 'Save in Favorites'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30} css={{textAlign: 'center'}}>Sprites</Text>

              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

              </Container>
            </Card.Body>



          </Card>
        </Grid>

      </Grid.Container>

    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons151 = data.results.map((e, index) => `${e.name}`);

  return {
    paths: pokemons151.map(name => ({
      params: { name }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name: name } = params as { name: string }
  const pokemon = await getPokemonInfo(name)

  if (!pokemon){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400, //In seconds
  }
}


export default PokemonPageByName;