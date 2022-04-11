import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay, Mousewheel, Keyboard, Navigation } from 'swiper';
import { IoPlay, IoPause, IoChevronForward, IoChevronBack } from 'react-icons/io5';

import 'swiper/css';
import React, { useEffect, useState } from 'react';

const Home: NextPage = () => {

  const [ playStatus, setPlayStatus ] = useState(false);
  const swiperRef = React.useRef();

  useEffect(() => {
    const classLists = document.querySelector('.slider-progress-bar')?.classList;
    playStatus ? classLists?.remove('slider-active') : classLists?.add('slider-active');
  }, [playStatus]);

  function handlePlayControl () {
    const swiper: any = (swiperRef.current as any).swiper;
    console.log(playStatus);
    playStatus ? swiper.autoplay.start() : swiper.autoplay.stop() ;

    setPlayStatus(!playStatus);
  }

  function handleSlideChangeTransitionStart () {
    setPlayStatus(true);
  }

  function handleSlideChangeTransitionEnd () {
    setPlayStatus(false);
  }

  return (
    <>
      <div className='emesh-index w-screen h-screen'>
      <div className="swiper-container-wrapper">
          <div className="swiper-container">
              <Swiper
                modules={[Parallax, Autoplay, Mousewheel, Keyboard, Navigation]}
                onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
                onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
                {...{
                  ref: swiperRef,
                  preloadImages: false,
                  autoplay: {
                    delay: 4000,
                    // disableOnInteraction: false
                  },
                  init: true,
                  loop: false,
                  speed: 1200,
                  grabCursor: true,
                  mousewheel: false,
                  keyboard: true,
                  simulateTouch: true,
                  parallax: true,
                  effect: 'slide',
                  pagination: false,
                  navigation: {
                    nextEl: '.slide-next',
                    prevEl: '.slide-prev'
                  }
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide-inner" data-swiper-parallax="50%">
                    <div className="swiper-slide-inner-bg bg-img-1"></div>
                    <div className="overlay overlay-dark-60"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide-inner" data-swiper-parallax="50%">
                    <div className="swiper-slide-inner-bg bg-img-2"></div>
                    <div className="overlay overlay-dark-60"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide-inner" data-swiper-parallax="50%">
                    <div className="swiper-slide-inner-bg bg-img-3"></div>
                    <div className="overlay overlay-dark-60"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide-inner" data-swiper-parallax="50%">
                    <div className="swiper-slide-inner-bg bg-img-4"></div>
                    <div className="overlay overlay-dark-60"></div>
                  </div>
                </SwiperSlide>
              </Swiper>
          </div>
      </div>
      <div className="hero-slider-bg-controls fadeIn-element">
        <div className="swiper-slide-controls slide-prev">
          <div className="io-arrow-left">
            <IoChevronBack />
          </div>
        </div>
        <div className="swiper-slide-controls slide-next">
          <div className="io-arrow-right">
            <IoChevronForward />
          </div>
        </div>
      </div>

      <div className="swiper-slide-controls-play-pause-wrapper swiper-slide-controls-play-pause slider-on-off fadeIn-element">
        <div className="slider-on-off-switch" onClick={handlePlayControl}>
          { playStatus ? <IoPlay /> : <IoPause /> }
        </div>
        <div className="slider-progress-bar">
          <span><svg className="circle-svg" height="50" width="50">
          <circle className="circle" cx="25" cy="25" fill="none" r="24" stroke="#e0e0e0" strokeWidth="2"></circle></svg></span>
        </div>
      </div>
    </div>
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
          <path id="gentle-wave-1" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
      </defs>
      <g className="parallax">
          <use xlinkHref="#gentle-wave-1" x="48" y="0" fill="rgba(21, 21, 21, 0.7"></use>
          <use xlinkHref="#gentle-wave-1" x="48" y="3" fill="rgba(21, 21, 21, 0.5)"></use>
          <use xlinkHref="#gentle-wave-1" x="48" y="5" fill="rgba(21, 21, 21, 0.3)"></use>
          <use xlinkHref="#gentle-wave-1" x="48" y="7" fill="#151515"></use>
      </g>
    </svg>
    </>
  );
};

export default Home;
