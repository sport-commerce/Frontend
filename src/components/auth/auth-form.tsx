'use client';

import { useEffect, useRef } from 'react';
import AuthChar from './auth-char';
import gsap from 'gsap';
import { validateEmail } from '@/lib/validation';

const start =
  'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512';
const end =
  'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512';

export default function AuthForm() {
  useEffect(() => {
    const colorize = (color: string, line: any, placeholder: any) => {
      gsap.to(line, { stroke: color, duration: 0.75 });
      gsap.to(placeholder, { color: color, duration: 0.75 });
    };

    const containers = document.querySelectorAll('#container');
    const form = document.querySelector('#form');

    const tl = gsap.timeline({ defaults: { duration: 1 } });

    form!.addEventListener('click', () => {
      containers.forEach((container) => {
        const input = container.querySelector('#input');
        const line = container.querySelector('.elastic-line');
        const placeholder = container.querySelector('#placeholder');

        if (document.activeElement !== input) {
          // @ts-ignore
          if (!input!.value) {
            gsap.to(placeholder, {
              top: 0,
              left: 0,
              scale: 1,
              duration: 0.5,
              ease: 'Power2.easeOut',
            });
          }
        }
        //We will do our validation
        //Name Validation
        input!.addEventListener('input', (e) => {
          // @ts-ignore
          if (e.target!.type === 'text') {
            // @ts-ignore
            const inputText = e.target!.value;
            if (inputText.length > 2) {
              colorize('#6391E8', line, placeholder);
            } else {
              colorize('#FE8C99', line, placeholder);
            }
          }
          //Validate Email
          //@ts-ignore
          if (e.target!.type === 'email') {
            //@ts-ignore
            const valid = validateEmail(e.target!.value);
            if (valid) {
              colorize('#6391E8', line, placeholder);
            } else {
              colorize('#FE8C99', line, placeholder);
            }
          }
          //Validate Phone
          //@ts-ignore
          if (e.target!.type === 'tel') {
            //@ts-ignore
            const valid = e.target!.value.length > 8;
            if (valid) {
              colorize('#6391E8', line, placeholder);
            } else {
              colorize('#FE8C99', line, placeholder);
            }
          }
        });
      });
    });

    containers.forEach((container) => {
      const input = container.querySelector('#input');
      const line = container.querySelector('.elastic-line');
      const placeholder = container.querySelector('#placeholder');

      input!.addEventListener('focus', () => {
        // @ts-ignore
        if (!input!.value) {
          tl.fromTo(
            line,
            { attr: { d: start } },
            { attr: { d: end }, ease: 'Power2.easeOut', duration: 0.75 },
          );
          tl.to(
            line,
            { attr: { d: start }, ease: 'elastic.out(3,0.5)' },
            '<50%',
          );
          tl.to(
            placeholder,
            {
              top: -15,
              left: 0,
              scale: 0.7,
              duration: 0.5,
              ease: 'Power2.easeOut',
            },
            '<15%',
          );
        }
      });
    });

    const button = document.querySelector('button');
    const tl3 = gsap.timeline({
      defaults: { duration: 0.75, ease: 'Power2.easeOut' },
    });

    button!.addEventListener('click', (e) => {
      e.preventDefault();
      tl3.to('#right, #left', {
        y: 30,
        opacity: 0,
        pointerEvents: 'none',
      });
      tl3.to('#form', { scale: 0.8 }, '<');
      tl3.fromTo('#submit', { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
      //Hand wave
      gsap.set('#hand', { transformOrigin: 'left' });
      gsap.fromTo(
        '#hand',
        { rotation: 0, y: 0 },
        { rotation: -10, y: 2, ease: 'elastic(3,0.3)', duration: 2, delay: 1 },
      );
    });
  }, []);

  return (
    <form
      className="relative flex min-h-[40vh] w-[70vw] rounded-3xl bg-white px-20 py-12 text-gray-500"
      id="form"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex-1" id="left">
        <h1 className="font-bold text-blue-400">회원가입</h1>
        <p className="mt-1.5">
          Lorem ipsum dolor,.
          <br /> For more information, <br /> sign up.{' '}
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-between" id="right">
        <div className="relative" id="container">
          <p
            className="pointer-events-none relative z-10 origin-left py-1 text-sm opacity-60"
            id="placeholder"
          >
            Nickname
          </p>
          <input
            id="input"
            type="text"
            name="name"
            autoComplete="off"
            className="input-name absolute top-0 h-full w-full border-none text-sm text-gray-500 outline-none"
          />
          <svg
            className="absolute bottom-0 left-0 overflow-visible opacity-80"
            width="300"
            height="2"
            viewBox="0 0 300 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="elastic-line"
              d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
              stroke="#D1D4DA"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="relative" id="container">
          <p
            className="pointer-events-none relative z-10 origin-left py-1 text-sm opacity-60"
            id="placeholder"
          >
            Email
          </p>
          <input
            id="input"
            type="email"
            name="email"
            autoComplete="off"
            className="input-email absolute top-0 h-full w-full border-none text-sm text-gray-500 outline-none"
          />
          <svg
            className="absolute bottom-0 left-0 overflow-visible opacity-80"
            width="300"
            height="2"
            viewBox="0 0 300 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="elastic-line"
              d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
              stroke="#D1D4DA"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="relative" id="container">
          <p
            className="pointer-events-none relative z-10 origin-left py-1 text-sm opacity-60"
            id="placeholder"
          >
            Password
          </p>
          <input
            id="input"
            type="tel"
            name="tel"
            autoComplete="off"
            className="input-number absolute top-0 h-full w-full border-none text-sm text-gray-500 outline-none"
          />
          <svg
            className="absolute bottom-0 left-0 overflow-visible opacity-80"
            width="300"
            height="2"
            viewBox="0 0 300 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="elastic-line"
              d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
              stroke="#D1D4DA"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="relative flex items-center">
          <div className="relative h-4 w-5 overflow-hidden rounded-sm">
            <span className="absolute bottom-0 left-0 h-full w-full border-2 border-solid border-[#c5c5c5]"></span>
            <div className="absolute top-full h-full w-full bg-blue-300"></div>
            <input
              type="checkbox"
              className="absolute bottom-0 left-0 z-30 h-full w-full cursor-pointer border-2 border-solid border-[#c5c5c5] opacity-0"
            />
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] scale-50"
            >
              <path
                className="elastic-line"
                d="M2 8.5L6.5 13L17.5 2"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </div>
          <label className="pl-2 text-sm">Send me promotions and offers.</label>
        </div>
        <button className="mt-4 cursor-pointer self-start rounded-sm bg-blue-400 px-10 py-2 text-sm font-bold text-white">
          Join
        </button>
      </div>
      <AuthChar />
      <div
        id="submit"
        className="pointer-events-none absolute left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-bold text-gray-500 opacity-0"
      >
        <p>
          회원가입이 정상적으로 진행되었습니다. <br /> 등록하신 이메일의
          메일함을 확인해주세요! 👏
        </p>
      </div>
    </form>
  );
}
