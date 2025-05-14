import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LastProjects from "./LastProjects";

export default function CarouselComponent() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50",
        },
      },
    ],
  };

  return (
    <div className="h-fit w-full flex justify-center items-center">
      <Slider {...settings} className="w-full">
        <div className="flex justify-center items-center">
          <LastProjects
            project="Em Breve"
            tech="React"
            image=""
            bgColor="bg-gray-300 dark:text-gray-200"
          />
        </div>
        <div className="flex justify-center items-center">
          <LastProjects
            project="Em Breve"
            tech="React"
            image=""
            bgColor="bg-gray-300 dark:text-gray-200"
          />
        </div>
        <div className="flex justify-center items-center">
          <LastProjects
            project="Em Breve"
            tech="React"
            image=""
            bgColor="bg-gray-300 dark:text-gray-200"
          />
        </div>
        <div className="flex justify-center items-center">
          <LastProjects
            project="Em Breve"
            tech="React"
            image=""
            bgColor="bg-gray-300 dark:text-gray-200"
          />
        </div>
      </Slider>
    </div>
  );
}
