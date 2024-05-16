import { Menu } from "../../Menu/Menu";
import Footer from "../Admin-layout/Adminfooter/Adminfooter";
import { Adminmenu } from "../Adminmenu/Adminmenu";
import { About } from "../Navcontents/About/About";
import { Contact } from "../Navcontents/Contact/Contact";
import { Facts } from "../Navcontents/Facts/Facts";
import { Home } from "../Navcontents/Home/Home";
import { Portfolio } from "../Navcontents/Portfolio/Portfolio";
import { Resume } from "../Navcontents/Resume/Resume";
import { Services } from "../Navcontents/Services/Services";
import { Skills } from "../Navcontents/Skills/Skills";
import './Adminlayout.css'

export function Adminlayout() {
    return (
   
            <div className="container">

                <Menu></Menu>
                <div className="row">
                    <div className="col-1">
                        <Adminmenu></Adminmenu>
                    </div>
                    <div className="col-10 right" >
                    <div><Home></Home></div>
                    <div><About></About></div>
                    <div><Facts></Facts></div>
                    <div><Skills></Skills></div>
                    <div><Resume></Resume></div>
                    <div><Portfolio></Portfolio></div>
                    <div><Services></Services></div>
                    <div><Contact></Contact></div>
                    
                    </div>

                </div >

            </div>
        
    )
}