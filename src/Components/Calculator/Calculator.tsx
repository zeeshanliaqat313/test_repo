import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Input,
  Grid,
  theme,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Button,
  ButtonGroup,
  Stack,
  HStack,
  Select,
  FormControl,
  FormLabel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Textarea,
} from "@chakra-ui/react";


export const Calculator = () => {
  const [buttonZero, setButtonZero] = useState(undefined);
  const [buttonOne, setButtonOne] = useState(undefined);
  const [buttonTwo, setButtonTwo] = useState(undefined);
  const [buttonThree, setButtonThree] = useState(undefined);
  const [buttonFour, setButtonFour] = useState(undefined);
  const [buttonFive, setButtonFive] = useState(undefined);
  const [buttonSix, setButtonSix] = useState(undefined);
  const [buttonSeven, setButtonSeven] = useState(undefined);
  const [buttonEight, setButtonEight] = useState(undefined);

  // const [selectedExperienceCategory, setSelectedExperienceCategory] = useState({
  //   id: '',
  //   name: '',
  // });




  return (
    <div>
      <ChakraProvider theme={theme}>
        <Box fontSize="xl">
          <Heading className='applicationTitle' as="h1" size="xl">
            Basic Calculator
          </Heading>
        </Box>
        </ChakraProvider >
    </div>
  );
};
