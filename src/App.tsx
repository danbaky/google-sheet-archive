import * as React from 'react';
import './App.css'
// import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import PodvalProvider from './PodvalProvider';


import TextField from '@mui/material/TextField';


const URL = "https://script.google.com/macros/s/AKfycbzOQ9GoJzXx67IDn4l9r_HsOdwAtrzozEApYaoHtnOpA0xQZF4EIFpgY2vV9q33-4BY/exec"

interface Case {
    case:string,
    phrases: string[]
}

interface SheetResponse {
    tasks:Case[]
}


function App() {

  const [jsonData, setJsonData] = React.useState<SheetResponse>({tasks:[]});

  const [search, setSearch] = React.useState('')

  React.useEffect(()=>{
    fetch(URL)
    .then(response=>response.json())
    .then(json=> setJsonData(json))

}, [])


  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
            <TextField id="outlined-basic" label="Поиск?" variant="outlined" onChange={(eve) => setSearch(eve.target.value) }/>
              {/* <Button variant="contained" >Кнопка</Button> */}
            </Toolbar>
          </AppBar>
        </Box>

        <PodvalProvider tasks={jsonData.tasks.filter((s)=>s.case.toLowerCase().includes(search.toLocaleLowerCase()))} />
    </>
  )
}

export default App
