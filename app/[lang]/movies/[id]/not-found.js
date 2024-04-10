"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "../../dictionaries/dictionaries";

export default function MovieNotFound() {
  const [data, setData] = useState();
  const params = useParams();
  let localParam = "";
  const path = usePathname();
  const locale = path.split("/");
  const isLocalInclude = locale.some((lang) => lang === "en" || lang === "bn");
  if (isLocalInclude) {
    localParam = locale[1];
  }

  useEffect(() => {
    let temp = null;
    const getData = async () => {
      if (params) {
        temp = await getDictionary(params.lang);
        setData({ ...temp });
      }
    };
    getData();
  }, []);

  console.log(data);

  return (
    <div className='container mx-auto custom-height'>
      <div className='flex h-full flex-col justify-center items-center'>
        <svg
          fill='#48464a'
          height='200px'
          width='200px'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 512 512'
          xmlSpace='preserve'
          className='mb-4'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d='M297.891,170.537H87.584c-20.508,0-37.191,16.684-37.191,37.192v101.233c0,20.508,16.684,37.192,37.191,37.192h210.307 c20.508,0,37.191-16.684,37.191-37.192V207.729C335.083,187.221,318.399,170.537,297.891,170.537z M297.892,312.807H87.584 c-2.121,0-3.845-1.725-3.845-3.846V207.729c0-2.121,1.725-3.846,3.845-3.846h210.307c2.121,0,3.845,1.725,3.845,3.846v101.233 h0.001C301.737,311.082,300.012,312.807,297.892,312.807z'></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d='M140.056,207.626c-27.966,0-50.719,22.752-50.719,50.719c0,27.966,22.752,50.719,50.719,50.719 c27.966,0,50.717-22.752,50.717-50.719S168.022,207.626,140.056,207.626z M140.056,275.717c-9.579,0-17.372-7.793-17.372-17.372 c0-9.579,7.793-17.372,17.372-17.372c9.579,0,17.371,7.793,17.371,17.372C157.427,267.924,149.635,275.717,140.056,275.717z'></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d='M244.757,207.626c-27.966,0-50.719,22.752-50.719,50.719c0,27.966,22.752,50.719,50.719,50.719 s50.719-22.752,50.719-50.719S272.724,207.626,244.757,207.626z M244.757,275.717c-9.579,0-17.372-7.793-17.372-17.372 c0-9.579,7.793-17.372,17.372-17.372s17.372,7.793,17.372,17.372C262.13,267.924,254.337,275.717,244.757,275.717z'></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d='M504.905,151.275c-4.447-3.122-10.137-3.877-15.247-2.032l-104.184,37.664v-36.322c0-19.396-15.781-35.177-35.177-35.177 h-29.736V42.42c0-9.208-7.465-16.673-16.673-16.673H92.855c-9.208,0-16.673,7.465-16.673,16.673s7.465,16.673,16.673,16.673 h194.361v56.313H35.177C15.781,115.406,0,131.188,0,150.584v215.523c0,19.396,15.781,35.177,35.177,35.177h92.859l-32.154,60.464 c-4.324,8.13-1.237,18.226,6.893,22.55c8.13,4.323,18.227,1.237,22.549-6.893l40.479-76.121h53.867l40.479,76.121 c4.323,8.129,14.418,11.218,22.549,6.893c8.13-4.324,11.217-14.42,6.893-22.55l-32.152-60.464h92.859 c19.396,0,35.177-15.781,35.177-35.177v-36.323l104.184,37.664c5.088,1.841,10.782,1.1,15.247-2.032 c4.447-3.122,7.095-8.214,7.095-13.648V164.922C512,159.489,509.352,154.397,504.905,151.275z M352.129,366.106 c0,1.009-0.821,1.831-1.831,1.831c-12.608,0-300.486,0-315.121,0c-1.009,0-1.831-0.821-1.831-1.831V150.584 c0-1.009,0.821-1.831,1.831-1.831h315.121c1.009,0,1.831,0.821,1.831,1.831C352.129,158.132,352.129,355.392,352.129,366.106z M478.654,328.011l-93.178-33.685v-71.961l93.178-33.685V328.011z'></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <h1 className='text-slate-200 font-semibold text-2xl lg:text-5xl'>
          {data?.noMovieFound?.title}
        </h1>
        <div className='mt-5'>
          {data?.noMovieFound?.descriptionOne} -
          <span className='mx-2 text-xl font-semibold text-cyan-300'>
            &ldquo;{params.id}&rdquo;
          </span>{" "}
          {data?.noMovieFound?.descriptionTwo}
        </div>
        <p className='mt-2 text-xl'>
          {data?.noMovieFound?.return.split(" ").slice(0, 2).join(" ")}{" "}
          <Link
            className='text-cyan-300 font-semibold hover:underline'
            href={`/${localParam}`}
          >
            {data?.noMovieFound?.return.split(" ").slice(2).join(" ")}
          </Link>
        </p>
      </div>
    </div>
  );
}
