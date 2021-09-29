import React from "react";
import TeamMember1 from '../../assets/teamMember1.png';

const ServiceContent = [
  {
    name: 'Afzaal afzal',
    imgSrc: TeamMember1,
  },
  {
    name: '@PeerThrough',
    imgSrc: TeamMember1,
  },
  {
    name: 'test name',
    imgSrc: TeamMember1,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map(({imgSrc,name}, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            // data-aos-delay={val.delayAnimation}
          >
            <img src={imgSrc} alt={name}/>
            <h3 className={`py-2 text-center`}>
              {name}
            </h3>
            {/*<div className="feature-box-01">*/}
            {/*  <div className="icon">*/}
            {/*    <i className={`icon ${val.icon}`}></i>*/}
            {/*  </div>*/}
            {/*  <div className="feature-content">*/}
            {/*    <h5>{val.title}</h5>*/}
            {/*    <p>{val.descriptions}</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
