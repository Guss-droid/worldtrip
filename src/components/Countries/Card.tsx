import { Grid, Heading } from "@chakra-ui/react";
import { CardContent } from "./CardContent";

export function Card() {
  return (
    <>
      <Heading fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>

      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <CardContent
          city="Londres"
          country="Reino Unido"
          cityImg="/images/cardLondon.svg"
          flagImg="/images/flagLondon.svg"
        />

        <CardContent
          city="Paris"
          country="França"
          cityImg="/images/cardParis.svg"
          flagImg="/images/flagParis.svg"
        />

        <CardContent
          city="Roma"
          country="Itália"
          cityImg="/images/cardItaly.svg"
          flagImg="/images/flagItaly.svg"
        />

        <CardContent
          city="Praga"
          country="República Tcheca"
          cityImg="/images/cardPraga.svg"
          flagImg="/images/flagPraga.svg"
        />

        <CardContent
          city="Amsterdã"
          country="Holanda"
          cityImg="/images/cardHolanda.svg"
          flagImg="/images/flagHolanda.svg"
        />

      </Grid>
    </>
  )
}