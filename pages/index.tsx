import type { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay, Mousewheel, Keyboard, Navigation } from 'swiper';
import { IoPlay, IoPause, IoChevronForward, IoChevronBack, IoLogoGithub, IoLogoWechat } from 'react-icons/io5';
import React, { useEffect, useState } from 'react';

import 'swiper/css';

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
      <div className='emesh-index w-screen h-screen relative'>
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
              {
                [...Array(7)].map((_, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="swiper-slide-inner" data-swiper-parallax="50%">
                        <div className="swiper-slide-inner-bg" style={{
                        }}></div>
                        <div className="overlay overlay-dark-60"></div>
                      </div>
                    </SwiperSlide>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
        <div className="hero-slider-bg-controls fadeIn-element z-20">
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

        <div className="swiper-slide-controls-play-pause-wrapper swiper-slide-controls-play-pause slider-on-off fadeIn-element z-20">
          <div className="slider-on-off-switch" onClick={handlePlayControl}>
            { playStatus ? <IoPlay /> : <IoPause /> }
          </div>
          <div className="slider-progress-bar">
            <span><svg className="circle-svg" height="50" width="50">
            <circle className="circle" cx="25" cy="25" fill="none" r="24" stroke="#e0e0e0" strokeWidth="2"></circle></svg></span>
          </div>
        </div>
      </div>

      <div className='w-screen h-screen absolute top-0 left-0 z-10 flex flex-col justify-center items-center'>
        <h1 className='text-8xl text-animation' style={{
          fontFamily: 'Rubik Moonrocks, cursive'
        }}>Eamesh</h1>
        <ul className="flex space-x-8 mt-4 text-2xl">
          <li>
            <a className="hover:text-sky-500 dark:hover:text-sky-400 text-animation" href="https://github.com/eamesh" target="_blank" title='eamesh' rel="noreferrer">
              <IoLogoGithub />
            </a>
          </li>
          <li className='relative wechat-li'>
            <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 text-animation" title='ylqnixing'>
              <IoLogoWechat />
            </a>
            <div role="tooltip" className="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip dark:bg-gray-700 tooltip">
              ylqnixing
            </div>
          </li>
        </ul>
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
