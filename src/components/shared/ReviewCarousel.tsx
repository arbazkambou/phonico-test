"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./ReviewCarousel.module.css";

const reviewsData = [
  {
    ratingsImg: "/images/5Stars.svg",
    title: "eSIM Worked Smoothly",
    review:
      "“This is my first time using Phonico eSIM. It worked smoothly on iPhone, and the signal didn’t drop for a minute.”",
    userImg: "/images/clientPic1.png",
    userName: "Lesile Alexander",
    userDescription: "Freelance React Developer",
  },
  {
    ratingsImg: "/images/5Stars.svg",
    title: "Most Convenient eSIM Service",
    review:
      "“With Phonico eSIM, I saved a lot of money while travelling to the US. Their eSIM plans are convenient and well-priced.”",
    userImg: "/images/clientPic2.png",
    userName: "Jacob Jones",
    userDescription: "Digital Marketer",
  },
  {
    ratingsImg: "/images/5Stars.svg",
    title: "Easy to Use",
    review:
      "“You made it so simple. The Phonico app is much faster and easier to understand. I enjoyed the convenient activation process and flexibility.”",
    userImg: "/images/clientPic3.png",
    userName: "Jenny Wilson",
    userDescription: "Graphic Designer",
  },
  {
    ratingsImg: "/images/5Stars.svg",
    title: "Smooth Connection",
    review:
      "“eSIM worked perfectly on my phone. No hassle with setup, and the connection was smooth throughout the trip. I’m super happy with it!”",
    userImg: "/images/clientPic3.png",
    userName: "Lesile Alexander",
    userDescription: "Freelance React Developer",
  },
  {
    ratingsImg: "/images/5Stars.svg",
    title: "Affordable Plans",
    review:
      "“Phonico offers cost-effective plans. It was an excellent experience with Phonico eSIM to enjoy my travel adventure.”",
    userImg: "/images/clientPic2.png",
    userName: "Jacob Jones",
    userDescription: "Digital Marketer",
  },
  {
    ratingsImg: "/images/5Stars.svg",
    title: "Excellent Customer Support",
    review:
      "“eSIM takes a few minutes to install and activate. The customer service was superb, they guided me through every detail about eSIM.”",
    userImg: "/images/clientPic3.png",
    userName: "Jenny Wilson",
    userDescription: "Graphic Designer",
  },
  {
    ratingsImg: "/images/5Stars.svg",
    title: "Fast Internet Connection",
    review:
      "“I purchased the Phonico eSIM, and it was remarkable. I enjoyed a fast internet connection wherever I traveled in the US.”",
    userImg: "/images/clientPic3.png",
    userName: "Jenny Wilson",
    userDescription: "Graphic Designer",
  },
  {
    ratingsImg: "/images/5Stars.svg",
    title: "Best eSIM experience",
    review:
      "“Best eSIM experience I’ve had! eSIM worked so well, I enjoyed the unlimited calls and texts service without any hassle. ”",
    userImg: "/images/clientPic3.png",
    userName: "Jenny Wilson",
    userDescription: "Graphic Designer",
  },
];
export default function ReviewCarousel() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ clickable: true }}
      className="mySwiper"
      speed={1000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      loop={true}
      breakpoints={{
        1200: {
          slidesPerView: 3,
        },

        840: {
          slidesPerView: 2,
        },

        0: {
          slidesPerView: 1,
        },
      }}
    >
      {reviewsData.map((item, index) => (
        <SwiperSlide key={index} className="mb-5">
          {/* <div className={`${styles.reviewCard} d-flex flex-column gap-4 p-3`}> */}
          <div
            className={`${styles.reviewCard} d-flex flex-column gap-4 justify-content-between p-3`}
          >
            <Image
              src={item.ratingsImg}
              height={16}
              width={96}
              alt="5 star rating"
            />
            <div>
              <h3 className="font30 fontWeight500 textPrimary">{item.title}</h3>
              <p className="font18 fontWeight400 textPrimary mt-2">
                {item.review}
              </p>
            </div>

            <div className="d-flex align-items-center gap-3">
              <Image
                src={item.userImg}
                height={60}
                width={60}
                style={{ objectFit: "contain" }}
                alt={item.userName}
              />
              <div className="d-flex flex-column justify-content-center gap-1">
                <span className="font16 fontWeight700">{item.userName}</span>
                <span>{item.userDescription}</span>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className={`${styles.reviewCard} d-flex flex-column gap-4 p-3`}>
            <Image
              src={item.ratingsImg}
              height={16}
              width={96}
              alt="5 star rating"
            />
            <div className="d-flex flex-column gap-4 justify-content-between">
              <div>
                <h3 className="font30 fontWeight500 textPrimary">
                  {item.title}
                </h3>
                <p className="font18 fontWeight400 textPrimary mt-2">
                  {item.review}
                </p>
              </div>

              <div className="d-flex align-items-center gap-3">
                <Image
                  src={item.userImg}
                  height={60}
                  width={60}
                  style={{ objectFit: "contain" }}
                  alt={item.userName}
                />
                <div className="d-flex flex-column justify-content-center gap-1">
                  <span className="font16 fontWeight700">{item.userName}</span>
                  <span>{item.userDescription}</span>
                </div>
              </div>
            </div>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
