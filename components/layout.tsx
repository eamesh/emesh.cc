import { ReactNode, useEffect } from 'react';
import gsap from 'gsap';
import Loader from './loader';

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {

  useEffect(() => {
    handleCursor();
  });

  return (
    <>
      <Loader />
      {children}
      <div className="cursor">
        <div className="cursor-helper cursor-view">
          <span>VIEW</span>
        </div>
        <div className="cursor-helper cursor-close">
          <span>Close</span>
        </div>
        <div className="cursor-helper cursor-link"></div>
      </div>

      <div className="bottom-credits fadeIn-element">
        © All Rights Reserved.
      </div>
    </>
  );
}

function handleCursor () {
  const body = document.body;
  body.addEventListener('mousemove', (e) => {
    console.log('move');
    gsap.to('.cursor', {
      duration: 0.5,
      left: e.pageX,
      top: e.pageY
    });
  });

  elementHover(['a.link-pop', 'a > img'], 'cursor-view');
  elementHover(['.close-wind'], 'cursor-close');
  elementHover(['a:not(img)', 'button'], 'cursor-link');
}

function elementHover (elements: string[], className: string) {
  const cursor = document.querySelector('.cursor') as HTMLElement;

  const handleHover = (element: string) => {
    const elementSelector = document.querySelectorAll(element);
    console.log(elementSelector);
    elementSelector.forEach((selector) => {
      selector.addEventListener('mouseenter', () => {
        cursor.classList.add(className);
      });

      selector.addEventListener('mouseleave', () => {
        cursor.classList.remove(className);
      });
    });
  };

  elements.forEach(element => {
    handleHover(element);
  });
}
