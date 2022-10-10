import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { setupStore } from './store/store';



function App() {
  const dispatch = useAppDispatch();
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [ ])

  return (
    <React.Fragment>
        <div>
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>{error}</h1>}
          {JSON.stringify(users, null, 2)}
        </div>
    </React.Fragment>
  );
}
export default App;