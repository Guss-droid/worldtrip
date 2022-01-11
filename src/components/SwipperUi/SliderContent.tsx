import Link from "next/link";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface ISlider {
  link: string;
  image: string;
  title: string;
  subtitle: string;
  colorTitle?: string;
  colorSubtitle?: string;
}

export function Slider({
  link,
  image,
  subtitle,
  title,
  colorSubtitle,
  colorTitle
}: ISlider) {
  return (
    <Link href={link}>
      <Flex
        w="100%"
        h="100%"
        bgImage={image}
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        cursor="pointer"
      >
        <Box as="a">
          <Heading
            size="lg"
            fontWeight="600"
            color={!colorTitle ? 'light.900' : colorTitle}
            mb="3"
          >
            {title}
          </Heading>

          <Text
            color={!colorSubtitle ? 'light.200' : colorSubtitle}
          >
            {subtitle}
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}