import Link from "next/link";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper as Swipered, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, A11y } from 'swiper';
import { Slider } from "./SliderContent";

SwiperCore.use([Pagination, A11y, Navigation]);

export function Swipper() {
  return (
    <Flex
      w="100%"
      h={["250", "450"]}
      maxW="1240px"
      mx="auto"
      mt="10"
      mb={["5", "10"]}
    >
      <Swipered
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1 }}
        style={{ width: '100%', flex: '1' }}
      >

        <SwiperSlide>
          <Slider
            link="/continent/europe"
            image="/images/imageEurope.svg"
            title="Europa"
            subtitle="O continente mais antigo."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            link="/continent/african"
            image="/images/imageAfrican.jpg"
            title="África"
            subtitle="O berço humano."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            link="/continent/asian"
            image="/images/imageAsian.jpg"
            title="Ásia"
            subtitle="O maior continente."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            link="/continent/oceania"
            image="/images/imageOceania.jpg"
            title="Oceania"
            subtitle="O continente azul."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            link="/continent/northAmerica"
            image="/images/imageNorthAmerica.jpg"
            title="América do norte"
            subtitle="O continente da magia."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            link="/continent/centralAmerica"
            image="/images/imageCentralAmerica.jpg"
            title="América central"
            subtitle="O continente das praias."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            link="/continent/southAmerica"
            image="/images/imageSouthAmerica.jpg"
            title="América do sul"
            subtitle="O continente tropical."
          />
        </SwiperSlide>
      </Swipered>
    </Flex>
  )
}

