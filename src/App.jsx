// import SideMenu from './Components/share/SideMenu/SideMenu'
import HeaderMenu from './Components/share/HeaderMenu/HeaderMenu'
import { CssBaseline, Container } from '@material-ui/core';
import Linechart from './Components/Linechart';

function App() {
  return (
   
    <Container style={{ paddingTop: 100 }}>
      <CssBaseline />
      <HeaderMenu />
      <Linechart />
      
    </Container>
  );
}

export default App;
