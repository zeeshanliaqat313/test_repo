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
  const [isEqualButtonPressed, setIsEqualButtonPressed] = useState(false);
  const [sum, setSum] = useState(0);


  const buttonPlusClicked = (value: any) => {
    console.log('resss', result);

    if (result.length === 0) {
      return;
    }
    if (result.length > 0) {
      const lastChar = result.charAt(result.length - 1);
      if (lastChar === '+') {
        return;
      }
    }

    setResult(result+value);


  }
  const buttonEqualClicked = (value: any) => {
    const valuesArr = result.split('+');
    let sum: number = 0;
    valuesArr.forEach(element => {
      sum = Number(sum) + Number(element);
    });
    setSum(sum);
    setResult(String(sum));
    setIsEqualButtonPressed(true);
  }

  const reset = () => {
    setResult('0');

  }
  

 const setResultValue =(value: any) => {

    if(sum > 0 && !isLastCharaterPlus()) {
      setResult(value);
    } else {
      setResult(result+value);
    }
 }

 const isLastCharaterPlus = () => {
  if (result.length > 0) {
    const lastChar = result.charAt(result.length - 1);
    if (lastChar === '+') {
      return true;
    }

  return false;
  
  }
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

              <Button onClick={() => setResultValue(7)}>7</Button>
              <Button onClick={() => setResultValue(8)}>8</Button>
              <Button onClick={() => setResultValue(9)}>9</Button>

            </FormControl>
            <FormControl w='50%'>
              <Button onClick={() => setResultValue(4)}>4</Button>
              <Button onClick={() => setResultValue(5)}>5</Button>
              <Button onClick={() => setResultValue(6)}>6</Button>

            </FormControl>
            <FormControl w='50%'>
              <Button onClick={() => setResultValue(1)}>1</Button>
              <Button onClick={() => setResultValue(2)}>2</Button>
              <Button onClick={() => setResultValue(3)}>3</Button>

            </FormControl>
            <FormControl w='50%'>
              <Button onClick={() => setResultValue(0)}>0</Button>
            </FormControl>
            <FormControl w='50%'>
              <Button onClick={() => buttonPlusClicked('+')}>+</Button>
              <Button onClick={() => buttonEqualClicked('=')}>=</Button>
            </FormControl>
            
            </div>
        </Box>
        </ChakraProvider >
    </div>
  );
};
