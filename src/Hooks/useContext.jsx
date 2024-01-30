import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function UseContext() {
  const theme = useContext(ThemeContext);
  return <div>Your theme is {theme}</div>;
}
export default UseContext;