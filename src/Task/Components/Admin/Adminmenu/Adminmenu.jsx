import profile from "../../../../Assets/Images/profile.jpg"
import Footer from "../Admin-layout/Adminfooter/Adminfooter"
import './Adminmenu.css'
export function Adminmenu(){

return(


<div id="header">
<div className="d-flex flex-column">

  <div className="profile">
    <img src={profile} alt="" className="img-fluid rounded-circle" />
    <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
    <div className="social-links mt-3 text-center">
      <a href="#" className="twitter"><i className="bi-twitter"></i></a>
      <a href="#" className="facebook"><i className="bi-facebook"></i></a>
      <a href="#" className="instagram"><i className="bi-instagram"></i></a>
      <a href="#" className="google-plus"><i className="bi-skype"></i></a>
      <a href="#" className="linkedin"><i className="bi-linkedin"></i></a>
    </div>
  </div>

  <nav id="navbar" className="nav-menu navbar">
    <ul>
      <li><a href="#home" className="nav-link scrollto active"><i className="bi-house-door"></i> <span>Home</span></a></li>
      <li><a href="#about" className="nav-link scrollto"><i className="bi-person"></i> <span>About</span></a></li>
      <li><a href="#resume" className="nav-link scrollto"><i className="bi-file-text"></i> <span>Resume</span></a></li>
      <li><a href="#portfolio" className="nav-link scrollto"><i className="bi-book"></i> <span>Portfolio</span></a></li>
      <li><a href="#services" className="nav-link scrollto"><i className="bi-server"></i> <span>Services</span></a></li>
      <li><a href="#contact" className="nav-link scrollto"><i className="bi-envelope"></i> <span>Contact</span></a></li>
    </ul>
  </nav>
  <div><Footer></Footer></div>
  
</div>
</div>
)
}