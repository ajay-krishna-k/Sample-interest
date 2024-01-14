import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
import { useState } from 'react';

function App() {

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const getvalidate = (e) => {
    const { name, value } = e.target
    // console.log(name, value);
    // console.log(typeof(value));
    // console.log(!!value.match(/^[0-9]+$/));
    if (!!value.match(/^[0-9]+$/)) {// !!-used to onvert to boolean

      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if (name === 'rate') {
        setRate(value)
        setIsRate(true)
      }
      else {
        setYear(value)
        setIsYear(true)
      }
    }
    else {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if (name === 'rate') {
        setRate(value)
        setIsRate(false)
      }
      else {
        setYear(value)
        setIsYear(false)
      }
    }

  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert('Pleasse fill the form')
    }
    else{
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset = (e)=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  return (
    <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center w-100 bg-dark ">
      <div className='bg-light p-5 rounded' >
        <h1 style={{ color: 'dark' }} >Simple-Interest</h1>
        <p>Calculate Simple Interest Easily</p>

        <div className='bg-warning  d-flex justify-content-center align-items-center w-30  p-4 rounded flex-column ' >
          <h1>₹ {' '} {interest} </h1>
          <p>Total simple Interest</p>
        </div>

        <form onSubmit={handleCalculate} className='mt-5' >
          <div className='mt-3' >
            <TextField name='principle' onChange={(e) => getvalidate(e)} value={principle || ""} className='w-100' id="outlined-basic" label=" ₹ Principle Amount " variant="outlined" />
          </div>

          {!isPrinciple &&
            <div>
              <p className='text-danger' >Invalid Input</p>
            </div>
          }

          <div className='mt-3' >
            <TextField name='rate' onChange={(e) => getvalidate(e)} value={rate || ""} className='w-100' id="outlined-basic" label="Rate of Interest (p.a) % " variant="outlined" />
          </div>
          {!isRate &&
            <div>
              <p className='text-danger' >Invalid Input</p>
            </div>
          }
          <div className='mt-3' >
            <TextField value={year || ""} name='year' onChange={(e) => getvalidate(e)} className='w-100' id="outlined-basic" label="Year (Yr) " variant="outlined" />
          </div>
          {!isYear &&
            <div>
              <p className='text-danger' >Invalid Input</p>
            </div>
          }

          <Stack className='mt-3 align-items-center ' direction="row" spacing={1}>
            <Button type='submit' disabled={isPrinciple && isRate && isYear?false:true} className='bg-success' style={{ width: '200px', height: '50px' }} variant="contained">Calculate</Button>
            <Button onClick={handleReset} className='bg-' style={{ width: '200px', height: '50px' }} variant="outlined">Reset</Button>
          </Stack>


        </form>

      </div>
    </div>
  );
}

export default App;
