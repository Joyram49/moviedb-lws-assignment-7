"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "./[lang]/dictionaries/dictionaries";

export default function NotFound() {
  const [data, setData] = useState();
  let params = "";
  const path = usePathname();
  const locale = path.split("/");
  const isLocalInclude = locale.some((lang) => lang === "en" || lang === "bn");
  if (isLocalInclude) {
    params = locale[1];
  }

  useEffect(() => {
    let temp = null;
    const getData = async () => {
      if (params) {
        temp = await getDictionary(params);
        setData({ ...temp });
      }
    };
    getData();
  }, []);

  return (
    <div className='container mx-auto h-screen'>
      <div className='w-full h-full flex flex-col  justify-center items-center'>
        <svg
          xmlSpace='preserve'
          viewBox='0 -0.5 17 17'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          className='si-glyph si-glyph-document-error mb-4'
          fill='#000000'
          width={200}
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            {" "}
            <title>731</title> <defs> </defs>{" "}
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              {" "}
              <g transform='translate(2.000000, 0.000000)' fill='#3d3f53'>
                {" "}
                <path
                  d='M9.016,3.984 L13.997,3.984 L9.016,0.016 L9.016,3.984 Z'
                  className='si-glyph-fill'
                >
                  {" "}
                </path>{" "}
                <path
                  d='M4.207,11.086 L2.5,12.793 L0.793,11.086 L0.086,11.793 L1.793,13.5 L0.086,15.207 L0.793,15.914 L2.5,14.207 L4.207,15.914 L4.914,15.207 L3.207,13.5 L4.914,11.793 L4.207,11.086 Z'
                  className='si-glyph-fill'
                >
                  {" "}
                </path>{" "}
                <path
                  d='M7.969,5.016 L7.969,0.011 L2.034,0.011 L2.034,10.411 L2.5,10.877 L4.408,8.971 L7.031,11.594 L5.125,13.5 L7.595,15.969 L13.977,15.969 L13.977,5.016 L7.969,5.016 Z'
                  className='si-glyph-fill'
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <h1 className='text-slate-200 font-semibold text-2xl lg:text-5xl'>
          {data?.notfound?.title}
        </h1>
        <div className='mt-2 font-medium text-slate-200'>
          {data?.notfound?.description}
        </div>
        <p className='mt-2 text-xl'>
          {data?.notfound?.return.split(" ").slice(0, 2).join(" ")}
          {"  "}
          <Link
            className='text-cyan-300 font-semibold hover:underline'
            href={`/${params}`}
          >
            {data?.notfound?.return.split(" ").slice(2).join(" ")}
          </Link>
        </p>
      </div>
    </div>
  );
}
