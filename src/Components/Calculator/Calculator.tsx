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
  const [result, setResult] = useState('');

  const buttonOneClicked = (value: any) => {

    // this.state.inputValue + value;
    // console.log('lodd', value);
    console.log('lodd', inputValue);
    setResult(inputValue+value)
    console.log('lodd', inputValue+value);

    setInputValue(result);
    
  };
  const buttonZeroClicked = (value: any) => {
    setResult(inputValue+value)

    setInputValue(result);
    
  };
  const buttonTwoClicked = (value: any) => {
    setInputValue(value);
    
  };
  const buttonThreeClicked = (value: any) => {
    setInputValue(value);
    
  };
  const buttonFourClicked = (value: any) => {
    setInputValue(value);
    
  };
  const buttonFiveClicked = (value: any) => {

    setInputValue(value);
  };
  const buttonSixClicked = (value: any) => {

    setInputValue(value);
  };
  const buttonSevenClicked = (value: any) => {

    setInputValue(value);
  };
  const buttonEightClicked = (value: any) => {

    setInputValue(value);
  };
  const buttonNineClicked = (value: any) => {

    setInputValue(value);
  };
  

 


  return (
    <div>
      <ChakraProvider theme={theme}>
        <Box fontSize="xl">
          <Heading className='applicationTitle' as="h1" size="xl">
            Basic Calculator
          </Heading>
            <div className='row'>

            <FormControl w='50%'>
              <FormLabel htmlFor='inputValue'></FormLabel>
                  <Input id='inputValue' type='inputValue' value={inputValue}/>
              

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
              <Button onClick={() => buttonZeroClicked(1)}>0</Button>
            </FormControl>
            </div>
        </Box>
        </ChakraProvider >
    </div>
  );
};
