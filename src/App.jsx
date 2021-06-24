import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const App = () => {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const multipyCash = () => {
    dispatch({type: 'MULTIPY_CASH', payload: 2})
  }

  return (
    <div className = "container d-flex justify-content-center align-items-center flex-column" style={{height:'100vh'}}>
      <div className = " d-flex align-items-center flex-column" style={{border: '1px solid black', width: 200}}>
        
        <div className = " d-flex justify-content-between flex-row" >
          <button onClick={() => addCash(Number(prompt()))} className='btn btn-success m-2'>Plus</button>
          <button onClick={() => getCash(Number(prompt()))} className='btn btn-danger m-2'>Minus</button>     
          <button onClick={() => multipyCash()} className='btn btn-warning m-2'>*</button>        
        </div>

        <div style={{marginBottom: 10}}>
          Счётчик: <span style={{fontWeight: 'bold'}}>{cash}</span>       
        </div>

      </div>
    </div>
  );
}

export default App;
