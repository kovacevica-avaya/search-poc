import React, { useState } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { setSearchInput } from './store/slice'; 
import { store } from './store/store';

function AppContent() {
  const [input, setInput] = useState('');
  const results = useSelector((state) => state.search.searchResults);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setInput(e.target.value);
    dispatch(setSearchInput(e.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <input value={input} onChange={handleSearch} placeholder="Search..." />
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;

