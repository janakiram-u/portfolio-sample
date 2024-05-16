import './App.css';
import {Menu} from './Task/Components/Menu/Menu';
import { Adminmenu } from './Task/Components/Admin/Adminmenu/Adminmenu';

import Footer from './Task/Components/Admin/Admin-layout/Adminfooter/Adminfooter';
import{Home} from './Task/Components/Admin/Navcontents/Home/Home';
import { About } from './Task/Components/Admin/Navcontents/About/About';
import { Contact } from './Task/Components/Admin/Navcontents/Contact/Contact';
import { Portfolio } from './Task/Components/Admin/Navcontents/Portfolio/Portfolio';
import { Resume } from './Task/Components/Admin/Navcontents/Resume/Resume';
import { Skills } from './Task/Components/Admin/Navcontents/Skills/Skills';
import { Facts } from './Task/Components/Admin/Navcontents/Facts/Facts';
import { Services } from './Task/Components/Admin/Navcontents/Services/Services';
import { Adminlayout } from './Task/Components/Admin/Adminlayout/Adminlayout';

function App() {
  return (
    <div className="App">
      {/* <Menu></Menu> */}
      
      <Adminlayout></Adminlayout>
     {/* <About></About> */}
      {/* <Home></Home> */}
      {/* <Contact></Contact> */}
      {/* <Portfolio></Portfolio> */}
      {/* <Resume></Resume> */}
      {/* <Skills></Skills> */}
      {/* <Facts></Facts> */}
      {/* <Services></Services> */}
    </div>
  );
}

export default App;
