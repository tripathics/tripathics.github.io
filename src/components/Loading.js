import React, { useEffect } from "react"

export function LoadingOld({ isLoading = true }) {
  const [isVisible, setIsVisible] = React.useState(isLoading);

  useEffect(() => {
    if (isVisible) document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
      setIsVisible(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-component ${isVisible ? '' : 'inactive'}`} >
      <div className="loading">
        <svg width="185" height="88" viewBox="0 0 185 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="loading" clipPath="url(#clip0_207_2)">
            <path id="c" fillRule="evenodd" clipRule="evenodd" d="M36.4 88H26.7C23.7867 88 21.3583 87.564 19.415 86.692C18.217 86.1704 17.1395 85.4071 16.25 84.45C14.166 82.1733 13.0843 78.5553 13.005 73.596C13.0017 73.3974 13.0001 73.1987 13 73V60C13.005 58.8667 12.9398 57.7342 12.805 56.609C12.5083 54.2297 11.8733 52.31 10.9 50.85C10.3603 50.007 9.63981 49.2946 8.79076 48.7645C7.9417 48.2344 6.98535 47.8998 5.991 47.785C5.5631 47.7274 5.13176 47.699 4.7 47.7H0V40.3H4.7C5.60994 40.3109 6.51565 40.1745 7.382 39.896C8.83394 39.4094 10.0755 38.4404 10.9 37.15C11.4687 36.2753 11.9067 35.3222 12.2 34.321C12.482 33.397 12.6897 32.372 12.823 31.246C12.9453 30.1684 13.0044 29.0845 13 28V15C13 9.66666 14.0833 5.83333 16.25 3.5C17.924 1.69733 20.3837 0.590998 23.629 0.180998C24.6479 0.0565103 25.6736 -0.00394172 26.7 -2.34129e-06H36.4V7H30.4C27.9247 7 25.9903 7.30233 24.597 7.907C24.5646 7.92108 24.5322 7.93542 24.5 7.95C23.279 8.5004 22.3093 9.48939 21.783 10.721C21.6971 10.9106 21.6194 11.1038 21.55 11.3C20.9833 12.9 20.7 15.1333 20.7 18V28.8C20.7053 30.0692 20.6265 31.3373 20.464 32.596C20.2853 33.9327 20.0053 35.1577 19.624 36.271C19.3754 37.005 19.0664 37.7171 18.7 38.4C17.427 40.7533 15.4178 42.6245 12.98 43.727C12.8541 43.7864 12.7275 43.8441 12.6 43.9V44.1C14.0654 44.7268 15.4035 45.6168 16.548 46.726C17.4053 47.5707 18.1308 48.5396 18.7 49.6C19.312 50.7554 19.7715 51.9854 20.067 53.259C20.3437 54.4063 20.5297 55.6537 20.625 57.001C20.6758 57.7329 20.7008 58.4663 20.7 59.2V70C20.698 70.83 20.7253 71.6599 20.782 72.488C20.8927 74.0433 21.1153 75.348 21.45 76.402C21.4817 76.5019 21.515 76.6012 21.55 76.7C21.7667 77.3322 22.0819 77.9262 22.484 78.46C23.0126 79.1501 23.7057 79.6968 24.5 80.05C25.842 80.6573 27.704 80.9737 30.086 80.999C30.1907 80.9999 30.2953 81.0002 30.4 81H36.4V88Z" fill="currentColor" />
            <path id="t" fillRule="evenodd" clipRule="evenodd" d="M56.5 0L91.9 81H83.8L48.4 0H56.5Z" fill="currentColor" />
            <path id="dash" fillRule="evenodd" clipRule="evenodd" d="M126.5 51.4H96.8V44H126.5V51.4Z" fill="currentColor" />
            <path id="cursor" fillRule="evenodd" clipRule="evenodd" d="M185 88.4H145V81H185V88.4Z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_207_2">
              <rect width="185" height="88.0002" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div >
  )
}

export default function Loading({ isLoading = true }) {
  const [counter, setCounter] = React.useState(4);
  const [intervalId, setIntervalId] = React.useState(null);

  useEffect(() => {
    if (intervalId && counter < -1) {
      document.body.style.overflow = 'auto';
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [counter])

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      var id = setInterval(() => {
        setCounter(prevValue => prevValue - 1);
      }, 300);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, []);

  return (
    counter > -2 && (<>
      <noscript>
        <style>{`
          .loading-component2 {
            display: none;
          }
        `}</style>
      </noscript>
      <div className={`loading-component2 ${counter < 0 ? 'inactive' : ''}`} >
        <div className="loading">
          <svg width="185" height="88" viewBox="0 0 185 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="loading" clipPath="url(#clip0_207_2)">
              <path style={{
                opacity: `${counter < 3 ? 1 : 0}`
              }} id="c" fillRule="evenodd" clipRule="evenodd" d="M36.4 88H26.7C23.7867 88 21.3583 87.564 19.415 86.692C18.217 86.1704 17.1395 85.4071 16.25 84.45C14.166 82.1733 13.0843 78.5553 13.005 73.596C13.0017 73.3974 13.0001 73.1987 13 73V60C13.005 58.8667 12.9398 57.7342 12.805 56.609C12.5083 54.2297 11.8733 52.31 10.9 50.85C10.3603 50.007 9.63981 49.2946 8.79076 48.7645C7.9417 48.2344 6.98535 47.8998 5.991 47.785C5.5631 47.7274 5.13176 47.699 4.7 47.7H0V40.3H4.7C5.60994 40.3109 6.51565 40.1745 7.382 39.896C8.83394 39.4094 10.0755 38.4404 10.9 37.15C11.4687 36.2753 11.9067 35.3222 12.2 34.321C12.482 33.397 12.6897 32.372 12.823 31.246C12.9453 30.1684 13.0044 29.0845 13 28V15C13 9.66666 14.0833 5.83333 16.25 3.5C17.924 1.69733 20.3837 0.590998 23.629 0.180998C24.6479 0.0565103 25.6736 -0.00394172 26.7 -2.34129e-06H36.4V7H30.4C27.9247 7 25.9903 7.30233 24.597 7.907C24.5646 7.92108 24.5322 7.93542 24.5 7.95C23.279 8.5004 22.3093 9.48939 21.783 10.721C21.6971 10.9106 21.6194 11.1038 21.55 11.3C20.9833 12.9 20.7 15.1333 20.7 18V28.8C20.7053 30.0692 20.6265 31.3373 20.464 32.596C20.2853 33.9327 20.0053 35.1577 19.624 36.271C19.3754 37.005 19.0664 37.7171 18.7 38.4C17.427 40.7533 15.4178 42.6245 12.98 43.727C12.8541 43.7864 12.7275 43.8441 12.6 43.9V44.1C14.0654 44.7268 15.4035 45.6168 16.548 46.726C17.4053 47.5707 18.1308 48.5396 18.7 49.6C19.312 50.7554 19.7715 51.9854 20.067 53.259C20.3437 54.4063 20.5297 55.6537 20.625 57.001C20.6758 57.7329 20.7008 58.4663 20.7 59.2V70C20.698 70.83 20.7253 71.6599 20.782 72.488C20.8927 74.0433 21.1153 75.348 21.45 76.402C21.4817 76.5019 21.515 76.6012 21.55 76.7C21.7667 77.3322 22.0819 77.9262 22.484 78.46C23.0126 79.1501 23.7057 79.6968 24.5 80.05C25.842 80.6573 27.704 80.9737 30.086 80.999C30.1907 80.9999 30.2953 81.0002 30.4 81H36.4V88Z" fill="currentColor" />
              <path style={{
                opacity: `${counter < 2 ? 1 : 0}`
              }} id="t" fillRule="evenodd" clipRule="evenodd" d="M56.5 0L91.9 81H83.8L48.4 0H56.5Z" fill="currentColor" />
              <path style={{
                opacity: `${counter < 1 ? 1 : 0}`
              }} id="dash" fillRule="evenodd" clipRule="evenodd" d="M126.5 51.4H96.8V44H126.5V51.4Z" fill="currentColor" />
              <path style={{
                transform: `translateX(calc(var(--letter-width) * ${counter < 0 ? 0 : -counter}))`
              }} id="cursor" fillRule="evenodd" clipRule="evenodd" d="M185 88.4H145V81H185V88.4Z" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_207_2">
                <rect width="185" height="88.0002" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div >
    </>)
  )
}