import { Link, red, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from 'next/link';

export const NavBar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0x 20px',
      backgroundColor: theme?.colors.gray50.value
    }}>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="app icon"
        width={70}
        height={70}
      />


      <NextLink href='/' passHref>
        <Link>
          <Text h2 color='#F75F94'>P</Text>
          <Text h3
            css={{ textGradient: "112deg, #06B7DB -63.59%, #FF4ECD 20.3%, #3694FF 70.46%" }}
          >okémon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref>
        <Link>
          <Text
            size={22}
            css={{ textGradient: "112deg, #06B7DB -63.59%, #FF6BD5 10.3%, #FFEBF9 70.46%", marginRight: 25, fontWeight: 500 }}
          >
            Favorites
          </Text>
        </Link>
      </NextLink>

    </div>
  )
}
