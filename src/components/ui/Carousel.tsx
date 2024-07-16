// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  /* const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }; */

  return (
    <div className="w-full flex flex-row h-[200px] md:h-[150px] gap-[20px]">
      {/* <Slider {...settings}> */}
      <div className="w-[70%] h-full rounded-lg cursor-pointer bg-[gray]/20">
        <img
          src="https://cdn.dribbble.com/users/4749204/screenshots/12231405/media/9261c6aebebda807767325a6ff87a351.gif"
          alt="crypto illustration"
          className="size-full object-cover object-center rounded-lg"
        />
      </div>
      <div className="w-[10%] h-full rounded-lg cursor-pointer bg-[gray]/20">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8555bc116147295.605c07d985be1.gif"
          alt="crypto illustration"
          className="size-full object-cover object-center rounded-lg"
        />
      </div>
      <div className="w-[10%] h-full rounded-lg cursor-pointer bg-[gray]/20">
        <img
          src="https://cdn.dribbble.com/users/3186406/screenshots/7157295/media/49e2beb65b16fd14d8e1ded7b1eec48f.gif"
          alt="crypto illustration"
          className="size-full object-cover object-center rounded-lg"
        />
      </div>
      <div className="w-[10%] h-full rounded-lg cursor-pointer bg-[gray]/20">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-robber-cartoon-illustration_52683-157858.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719187200&semt=ais_user"
          alt="crypto illustration"
          className="size-full object-cover object-center rounded-lg"
        />
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default Carousel;


