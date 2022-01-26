import {
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import { Popover } from "./Popover";

interface IInfos {
  numberCountries: number;
  numberLaguages: number;
  citiesPopular: number;
  mostVisited: string;
}

export function Infos({
  citiesPopular,
  mostVisited,
  numberCountries,
  numberLaguages
}: IInfos) {
  return (
    <Flex align="center" justify="space-between">

      <Flex direction="column" justify="center" align={["flex-start", "center"]}>
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.500"
          fontWeight="600"
        >
          {numberCountries}
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]}>
          países
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "center"]}>
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.500"
          fontWeight="600"
        >
          {numberLaguages}
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]}>
          línguas
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start", "center"]}>
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.500"
          fontWeight="600"
        >
          {citiesPopular}
        </Heading>
        <Text fontWeight="600" fontSize={["md", "xl"]}>
          cidades +100

          <Popover mostVisited={mostVisited} />

        </Text>
      </Flex>

    </Flex>
  )
}