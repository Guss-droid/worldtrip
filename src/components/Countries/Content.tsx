import { Grid, Text } from "@chakra-ui/react";

import { Infos } from "./Infos";

interface IContent {
  desc: string;
  numberCountries: number;
  numberLaguages: number;
  citiesPopular: number;
  mostVisited: string;
}

export function Content({ 
  desc,
  citiesPopular,
  mostVisited,
  numberCountries,
  numberLaguages
 }: IContent) {
  return (
    <Grid templateColumns={["1fr", "1.2fr 1fr"]} gap={[5, 20]} my={["8", "20"]}>
      <Text fontSize={["lg", "2xl"]} textAlign="justify">
        {desc}
      </Text>
      <Infos
        citiesPopular={citiesPopular}
        mostVisited={mostVisited}
        numberCountries={numberCountries}
        numberLaguages={numberLaguages}
      />
    </Grid>
  )
}