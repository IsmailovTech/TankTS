import React from 'react';
import BasicGrid from './Top';

export const AppContext = React.createContext({
  lang: 'en',
  setLang: () => {},
  is_dark_theme: true,
  is_logged_in: false,
  setLogin: () => {},
});

function App() {
  return (
    <div >
      <BasicGrid/>
    </div>
  );
}

export default App;
