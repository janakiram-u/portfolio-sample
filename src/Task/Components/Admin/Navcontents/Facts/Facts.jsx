import React from 'react';
import './Facts.css'
export function Facts (){
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p style={{fontSize:'20px'}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row no-gutters">
          <FactBox icon="bi-emoji-smile" count={232} title="Happy Clients" description="consequuntur quae" />
          <FactBox icon="bi-journal-richtext" count={521} title="Projects" description="adipisci atque cum quia aut" />
          <FactBox icon="bi-headset" count={1453} title="Hours Of Support" description="aut commodi quaerat" />
          <FactBox icon="bi-people" count={32} title="Hard Workers" description="rerum asperiores dolor" />
        </div>
      </div>
    </section>
  );
};

const FactBox = ({ icon, count, title, description }) => {
  return (
    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate" data-aos="fade-up">
      <div className="count-box">
        <i className={`bi ${icon}`}></i>
        <span data-purecounter-start="0" data-purecounter-end={count} data-purecounter-duration="0" className="purecounter">
          {count}
        </span>
        <p>
          <strong>{title}</strong> {description}
        </p>
      </div>
    </div>
  );
}
