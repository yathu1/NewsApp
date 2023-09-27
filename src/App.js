
import NavBar from './components/NavBar';
import News from './components/News';
import {NewsContextProvider} from './NewsContext';

function App() {
  const myStyle = {
    paddingLeft:0,
    marginLeft:0
  };  
  return (
  <NewsContextProvider>
    <div style={myStyle}>
      <NavBar/>
      <News/>
    </div>
   </NewsContextProvider>
   
  );
}

export default App;
