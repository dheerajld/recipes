import './App.css';
import  React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector , useDispatch }  from "react-redux";
import * as types from "./redux/actionTypes";

function App() {
  const [search , setSearch] = useState("");
  const [  query , setQuery ]  = useState("");
  let dispatch = useDispatch("");

  useEffect(() => {
      dispatch({ type: types.FETCH_RECIPE_START , query });
   },[dispatch,query]);

  const { recipes } = useSelector(state => state.data);
   
  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  };



  return (
    <div className="App">
      <h2>Recipe App</h2>
        <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
        noValidate
         autoComplete="off"
         >
      <TextField id="standard-basic" label="Chicken" variant="standard" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button variant="contained" sx={{ height:'5ch',width:'12ch' }}
      onClick={updateSearch}
      >Search</Button>
      {recipes && recipes.hits && recipes.hits.map((item) => (
       <h4>{item.recipes.label}</h4>
     ))} 
    </Box>
    
    </div>
  );
}

export default App;
