import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Input,
  theme,
  Heading,
  Button,

  FormControl,
  FormLabel,
  
} from "@chakra-ui/react";


export const Calculator = () => {
  
  const [inputValue, setInputValue] = useState('0');

  // const [selectedExperienceCategory, setSelectedExperienceCategory] = useState({
  //   id: '',
  //   name: '',
  // });

  const buttonOneClicked = (value: any) => {

    setInputValue(value);
    
  };
 


  return (
    <div>
      <ChakraProvider theme={theme}>
        <Box fontSize="xl">
          <Heading className='applicationTitle' as="h1" size="xl">
            Basic Calculator
          </Heading>
            <div>

          <FormControl w='50%'>
            <FormLabel htmlFor='name'>First Name</FormLabel>
                <Input id='inputValue' type='inputValue' value={inputValue}/>
            <Button onClick={() => buttonOneClicked(1)}>1</Button>

            </FormControl>
            </div>
        </Box>
        </ChakraProvider >
    </div>
  );
};
