import { Button, Container, Image, Link, Text } from '@nextui-org/react';
import NextLink from 'next/link';

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }}>
      <Text h1>There are no favorites here</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
        width={250}
        height={250}
        css={{ opacity: 0.2}}
      />

    <NextLink href='/' passHref>
      <Link>
        <Button 
          color='gradient' 
          bordered ghost
          css={{marginTop: 5}}
        >
          Return to Homepage
        </Button>
      </Link>
    </NextLink>

    </Container>
  )
}
