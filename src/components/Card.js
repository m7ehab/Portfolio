import { Heading, HStack, Image, Text ,Divider ,Stack ,Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return(
    <Box borderRadius='10'	 backgroundColor='white' color='black'>
    <Box maxW='sm'>
      <Image
        borderRadius='lg'
        src={imageSrc}
      />
      <Stack px="4" pb='2'  mt='6' spacing='3'>
        <Heading size='xs'>{title}</Heading>
        <Text fontSize='xs' color="#333">
          {description}
        </Text>
        <Text fontSize='xs'>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Stack>
    </Box>   
      
    </Box>
);
};

export default Card;
