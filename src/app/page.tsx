'use client'

import { DateTime } from 'luxon';

export default function Home() {
  const currentTime = DateTime.local();

  return (
    <div className="w-full h-full min-h-screen max-h-screen flex flex-col items-center justify-center bg-linear-to-t from-sky-500 to-indigo-500 p-[25px]">
      <div className="w-full h-auto px-[25px] py-[50px] bg-white rounded-[24px] max-w-[728px] flex flex-col items-center justify-center gap-[16px]">
        <p className="text-center text-[57px] leading-[64px] text-[#000000] font-semibold">
          {currentTime.toLocaleString(DateTime.TIME_WITH_SECONDS)}
        </p>
        <p className="text-center text-[36px] leading-[44px] text-[#000000]">
          {currentTime.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
        </p>
      </div>
    </div>
  );
}
