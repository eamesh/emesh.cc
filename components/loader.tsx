import gsap from 'gsap';

export default function Loader () {
  function loaded (start: number, end: number, timeout: number, callback: (val: number) => void){
    const timeOrigin = window.performance.timeOrigin;
    const threshold = -1 * timeOrigin / 1e3 % 50 * 10;
    const step = end > start ? 1 : -1;
    const duration = Math.abs(Math.floor((threshold + timeout) / 100));
    const timer = setInterval(() => {
      console.log('interval');

      callback(start += step);
      start >= end && clearInterval(timer);
    }, duration);

    return timer;
  }

  if (typeof window !== 'undefined') {
    const preLoader = document.querySelector('.preloader') as HTMLElement;
    const progressNumber = preLoader.querySelector('.percent') as HTMLElement;
    const progressTitle = preLoader.querySelector('.title');
    const progressLoading = preLoader.querySelector('.loading');
    const preloaderBar = preLoader.querySelector('.preloader-bar');
    const preloaderProgress = preLoader.querySelector('.preloader-progress') as HTMLElement;
    const preloaderAfter = preLoader.querySelector('.preloader-after');
    const preloaderBefore = preLoader.querySelector('.preloader-before');

    const progressTimer = loaded(0, 100, 300, (val) => {
      progressNumber.innerText = val.toString();
      preloaderProgress.style.width = val + '%';
    });

    window.onload = () => {
      console.log('loaded');
      clearInterval(progressTimer);
      gsap.fromTo(preloaderProgress, { duration: 0.5, width: '95%' }, {
        width: '100%',
        onUpdate: () => {
          const preloaderProgressRect = preloaderProgress.getBoundingClientRect();
          const parenRect = (preloaderProgress.parentElement as HTMLElement).getBoundingClientRect();
          const text = preloaderProgressRect.width / parenRect.width * 100;
          progressNumber.innerHTML = parseInt(text.toString(), 10).toString();
        },
        onComplete: () => {
          gsap.to(preloaderBar, { duration: 0.5, left: '100%' });
          gsap.to(progressTitle, { duration: 1, autoAlpha: 0, y: -100 });
          gsap.to(progressLoading, { duration: 1, autoAlpha: 0, y: 100 });
          gsap.to(progressNumber, { duration: 1, autoAlpha: 0 });

          gsap.to(preloaderBefore, { duration: 1, y: '-100%', delay: 0.7 });
          gsap.to(preloaderAfter, {
            duration: 1,
            y: '100%',
            delay: 0.7,
            onComplete: function () {
              preLoader.classList.add('hidden');
            }
          });
        }
      });
    };
  }

  return (
    <div className="preloader">
      <div className="preloader-after"></div>
      <div className="preloader-before"></div>
      <div className="preloader-block">
        <div className="title">Eamesh</div>
        <div className="percent">0</div>
        <div className="loading">loading...</div>
      </div>
      <div className="preloader-bar">
        <div className="preloader-progress"></div>
      </div>
    </div>
  );
}
