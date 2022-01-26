import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163", "250", "250", "335"]}
      bgImage="url('/images/banner.jpg')"
      bgRepeat="no-repeat"
      bgPosition={["100 20%", "100% 20%", "100% 30%"]}
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        mx="auto"
        w="100%"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box as="div">
          <Heading color="light.900" fontWeight="400" fontSize={["xl", "2xl", "2xl", "4xl"]}>
            5 continentes, <Divider as="br" /> infinitas possibilidades.
          </Heading>
          <Text color="light.200" mt="2" fontSize={["0.8rem", "xl"]} maxW={["100%", "100%", "510"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          w={["300", "300", "430"]}
          display={["none", "none", "block"]}
          src="/images/airplane.svg"
          alt="airplane"
          transform="translateY(40px)"
          ml="8"
        />

      </Flex>
    </Flex>
  )
}