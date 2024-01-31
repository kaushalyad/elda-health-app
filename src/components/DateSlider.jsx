import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DateItem from "./DateItem";

const ItemSlider = () => {
  const [data, setData] = useState([
    {
      date: "29th Jan",
      nameOfDate: "MON",
      isSelected: false,
    },
    {
      date: "30th Jan",
      nameOfDate: "TUE",
      isSelected: false,
    },
    {
      date: "31th Jan",
      nameOfDate: "WED",
      isSelected: false,
    },
    {
      date: "1st Feb",
      nameOfDate: "THU",
      isSelected: false,
    },
    {
      date: "2nd Feb",
      nameOfDate: "FRI",
      isSelected: false,
    },
    {
      date: "3rd Feb",
      nameOfDate: "MON",
      isSelected: false,
    },
    {
      date: "4th Feb",
      nameOfDate: "TUE",
      isSelected: false,
    },
    {
      date: "7th Feb",
      nameOfDate: "WED",
      isSelected: false,
    },
    {
      date: "8th Feb",
      nameOfDate: "THU",
      isSelected: false,
    },
    {
      date: "9th Feb",
      nameOfDate: "FRI",
      isSelected: false,
    },
    {
      date: "12th Feb",
      nameOfDate: "MON",
      isSelected: false,
    },
    {
      date: "13th Feb",
      nameOfDate: "TUE",
      isSelected: false,
    },
    {
      date: "14th Feb",
      nameOfDate: "WED",
      isSelected: false,
    },
    {
      date: "15th Feb",
      nameOfDate: "THU",
      isSelected: false,
    },
    {
      date: "16th Feb",
      nameOfDate: "FRI",
      isSelected: false,
    },
  ]);

  const updateData = (date) => {
    const updatedData = data.map((val) => ({
      ...val,
      isSelected: val.date === date,
    }));
    setData(updatedData);
  };

  const CustomNextArrow = (props) => {
    const { style } = props;
    return (
      <div
        className="slick-arrow slick-next"
        style={{ ...style, backgroundColor: "red" }}
        onClick={props.onClick}
      ></div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { style } = props;
    return (
      <div
        className="slick-arrow slick-prev "
        style={{ ...style, backgroundColor: "red" }}
        onClick={props.onClick}
      ></div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((Item) => (
        <DateItem
          date={Item.date}
          nameOfDate={Item.nameOfDate}
          isSelected={Item.isSelected}
          key={Item.date}
          onClick={() => updateData(Item.date)}
        />
      ))}
    </Slider>
  );
};

export default ItemSlider;
