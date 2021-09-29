import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "YouTube.png",
      desc: `  Check out the No Fun Toads YouTube for aniamted NFT News Updates, songs, skits and tons of no fun content.`,
      // reviewerName: "Nancy Byers",
      // designation: "CEO at ib-themes",
      delayAnimation: "",
    },
    {
      imageName: "PeerThrough.jpg",
      desc: ` Peer behind the scenes and watch the vlogs and blogs of the people building the toads and exploring the crypto space. `,
      // reviewerName: "Jara Afsari",
      // designation: "CEO at ib-themes",
      delayAnimation: "200",
    },
    // {
    //   imageName: "YouTube.png",
    //   desc: `  Check out the No Fun Toads YouTube for aniamted NFT News Updates, songs, skits and tons of no fun content.`,
    //   // reviewerName: "Nancy Byers",
    //   // designation: "CEO at ib-themes",
    //   delayAnimation: "",
    // },
    // {
    //   imageName: "YouTube",
    //   desc: `Check out the No Fun Toads YouTube for aniamted NFT News Updates, songs, skits and tons of no fun content.`,
    //   reviewerName: "Janiaya kiaram",
    //   designation: "Visual Designer",
    //   delayAnimation: "400",
    // },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                {/*<h6>{val.reviewerName}</h6>*/}
                {/*<span>{val.designation}</span>*/}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
