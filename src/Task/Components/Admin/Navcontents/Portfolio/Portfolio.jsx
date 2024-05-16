import React from 'react';
import { BiPlus, BiLink } from 'react-icons/bi';
import portfolio1 from "../../../../../Assets/Images/portfolio1.jpg"
import portfolio2 from "../../../../../Assets/Images/portfolio2.jpg"
import portfolio3 from "../../../../../Assets/Images/portfolio3.jpg"
import portfolio4 from "../../../../../Assets/Images/portfolio4.jpg"
import portfolio5 from "../../../../../Assets/Images/portfolio5.jpg"
import portfolio6 from "../../../../../Assets/Images/portfolio6.jpg"

export function Portfolio(){
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row aos-init aos-animate" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
          <nav>
      <div className="nav nav-pills" id="portfolio-flters">
        <a className="nav-link active" data-filter="*">
          All
        </a>
        <a className="nav-link" data-filter=".filter-app">
          App
        </a>
        <a className="nav-link" data-filter=".filter-card">
          Card
        </a>
        <a className="nav-link" data-filter=".filter-web">
          Web
        </a>
      </div>
    </nav>
          </div>
        </div>

        <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          {/* Portfolio items go here, use React map to iterate over the items */}
          {/* Example Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio1} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                  <BiPlus />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <BiLink />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio2} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                  <BiPlus />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <BiLink />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio3} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                  <BiPlus />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <BiLink />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio4} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                  <BiPlus />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <BiLink />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio5} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                  <BiPlus />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <BiLink />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio6} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                  <BiPlus />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <BiLink />
                </a>
              </div>
            </div>
          </div>
          
          {/* Repeat this structure for each portfolio item */}
        </div>

      </div>
    </section>
  )
}
