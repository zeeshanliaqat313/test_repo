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
  
  const [result, setResult] = useState('');

  const buttonOneClicked = (value: any) => {

    setResult(result+value);
    
  };
  const buttonZeroClicked = (value: any) => {
    setResult(result+value);
    
  };
  const buttonTwoClicked = (value: any) => {
    setResult(result+value);
    
  };
  const buttonThreeClicked = (value: any) => {
    setResult(result+value);
    
  };
  const buttonFourClicked = (value: any) => {
    setResult(result+value);
    
  };
  const buttonFiveClicked = (value: any) => {

    setResult(result+value);
  };
  const buttonSixClicked = (value: any) => {

    setResult(result+value);
  };
  const buttonSevenClicked = (value: any) => {

    setResult(result+value);
  };
  const buttonEightClicked = (value: any) => {

    setResult(result+value);
  };
  const buttonNineClicked = (value: any) => {

    setResult(result+value);
  };

  const buttonPlusClicked = (value: any) => {

  }
  const buttonEqualClicked = (value: any) => {

  }
  

 


  return (
    <div>
      <ChakraProvider theme={theme}>
        <Box fontSize="xl">
          <Heading className='applicationTitle' as="h1" size="xl">
            Basic Calculator
          </Heading>
            <div className='row'>

            <FormControl w='50%'>
              <FormLabel htmlFor='result'></FormLabel>
                  <Input id='result' type='result' value={result}/>
              

            </FormControl>
            </div>
            <div className='row'>

            <FormControl w='50%'>

              <Button onClick={() => buttonSevenClicked(7)}>7</Button>
              <Button onClick={() => buttonEightClicked(8)}>8</Button>
              <Button onClick={() => buttonNineClicked(9)}>9</Button>

            </FormControl>
            <FormControl w='50%'>
              <Button onClick={() => buttonFourClicked(4)}>4</Button>
              <Button onClick={() => buttonFiveClicked(5)}>5</Button>
              <Button onClick={() => buttonSixClicked(6)}>6</Button>

            </FormControl>
            <FormControl w='50%'>
              <Button onClick={() => buttonOneClicked(1)}>1</Button>
              <Button onClick={() => buttonTwoClicked(2)}>2</Button>
              <Button onClick={() => buttonThreeClicked(3)}>3</Button>

            </FormControl>
            <FormControl w='50%'>
              <Button onClick={() => buttonZeroClicked(0)}>0</Button>
            </FormControl>
            <FormControl w='50%'>
              <Button onClick={() => buttonPlusClicked(1)}>+</Button>
              <Button onClick={() => buttonEqualClicked(1)}>=</Button>
            </FormControl>
            
            </div>
        </Box>
        </ChakraProvider >
    </div>
  );
};
