import React from "react";
import Slider from "react-slick";
import { Tweet } from "react-tweet";
import { tweetIds } from "~~/data/data";

function CarruselTweets() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="max-w-[1450px] ">
      <Slider {...settings}>
        {tweetIds.map(id => (
          <div key={id} className="px-[20px]">
            <Tweet id={id} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarruselTweets;
