import './Menu.css';
import bootstrapmade from "../../../Assets/Images/bootstrapmade.png"
import laptop from "../../../Assets/Images/laptop.svg"
import tablet from "../../../Assets/Images/tablet.svg"
import phone from "../../../Assets/Images/phone.svg"
import linkk from "../../../Assets/Images/linkk.svg"
export function Menu() {
    return(
<div className='Header'>
    
    <div className='logo'>
        <a href="https://bootstrapmade.com/" rel="home" title="Bootstrap Templates | Premium &amp; Free Download">
        <img src={bootstrapmade} alt="" /></a></div>
        
    <div className='preview-devices'>
        
       
    <ul className="nav ">
      <li className="preview-test preview-devices-active nav-item" id="preview-test-desktop" title="Desktop preview of the iPortfolio template"> 
      <a href=""><img src={laptop} alt="" /></a>
      </li>
      <li className="preview-test nav-item" id="preview-test-tablet" title="Tablet preview of the iPortfolio template">
        <a href="#">
        <img src={tablet} alt="" />
        </a>
      </li>
      <li className="preview-test nav-item" id="preview-test-mobile" title="Mobile preview of the iPortfolio template">
        <a href="#">
        <img src={phone} alt="" />
        </a>
      </li>
    </ul>
    </div>
    <div className="current-template">
    <a href="https://bootstrapmade.com/demo/NiceAdmin/" title="Previous Template: NiceAdmin" target="_top" className="btn btn-link">
     <h2>{'<'}</h2>
      </a>

<a href="https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/" title="iPortfolio Template Home Page" className="template-home btn btn-link">
  <h4 style={{color:'white'}}>iPortfolio</h4>
</a>
<a href="https://bootstrapmade.com/demo/MyResume/" title="Next Template: MyResume" target="_top" className="btn btn-link ">
        <h2>{'>'}</h2>
      </a>
      </div>
      <div className="navigate">
      <a href="https://bootstrapmade.com/demo/templates/iPortfolio/" target="_top" title="Hide the demo bar" className="btn btn-link">
      <img src={linkk} alt="" />
      </a>
      <a href="https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/#download" title="Download the iPortfolio Template" className="btn btn-primary">
        <i className="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <use href="https://bootstrapmade.com/assets/img/icons.svg#download" />
        </i>
        <span>Free Download</span>
      </a>
    
</div>

</div>
 )
}