import {
  Popover as Popo,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Box,
  Icon
} from '@chakra-ui/react'

import { RiInformationLine } from 'react-icons/ri'

interface IPopover {
  mostVisited: string;
}

export function Popover({ mostVisited }: IPopover) {
  return (
    <Popo>
      <PopoverTrigger>
        <Box as="span">
          <Icon
            as={RiInformationLine}
            w={["10px", "16px"]}
            h={["10px", "16px"]}
            ml="1"
            cursor="pointer"
            color="dark.50"
          />
        </Box>
      </PopoverTrigger>

      <PopoverContent bg="dark.500" color="yellow.500">
        <PopoverArrow bg="dark.500" />
        <PopoverCloseButton />

        <PopoverBody fontWidth="400" fontSize="lg">
          {mostVisited}
        </PopoverBody>
      </PopoverContent>
    </Popo>
  )
}