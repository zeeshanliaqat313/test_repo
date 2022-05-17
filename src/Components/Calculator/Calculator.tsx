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
  const buttonZeroClicked = (value: any) => {

    
  };
  const buttonTwoClicked = (value: any) => {

    
  };
  const buttonThreeClicked = (value: any) => {

    
  };
  const buttonFourClicked = (value: any) => {

    
  };
  const buttonFiveClicked = (value: any) => {

    
  };
  const buttonSixClicked = (value: any) => {

    
  };
  const buttonSevenClicked = (value: any) => {

    
  };
  const buttonEightClicked = (value: any) => {

    
  };
  const buttonNineClicked = (value: any) => {

    
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
            <FormLabel htmlFor='inputValue'></FormLabel>
                <Input id='inputValue' type='inputValue' value={inputValue}/>
            

            </FormControl>
            <FormControl w='50%'>
            <FormLabel htmlFor='inputValue'></FormLabel>
            <Button onClick={() => buttonZeroClicked(1)}>0</Button>
            <Button onClick={() => buttonOneClicked(1)}>1</Button>
            <Button onClick={() => buttonTwoClicked(2)}>2</Button>
            <Button onClick={() => buttonThreeClicked(3)}>3</Button>
            <Button onClick={() => buttonFourClicked(4)}>4</Button>
            <Button onClick={() => buttonFiveClicked(5)}>5</Button>
            <Button onClick={() => buttonSixClicked(6)}>6</Button>
            <Button onClick={() => buttonSevenClicked(7)}>7</Button>
            <Button onClick={() => buttonEightClicked(8)}>8</Button>
            <Button onClick={() => buttonNineClicked(9)}>9</Button>

            </FormControl>
            </div>
        </Box>
        </ChakraProvider >
    </div>
  );
};
