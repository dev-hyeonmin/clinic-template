'use client';

import 'swiper/css';
import Link from 'next/link';

export default function HomeEventSeeMore() {
  return (
    <div className="flex gap-4 bg-zinc-100 py-8 pr-0 pl-4 md:px-20 md:py-20">
      <div>
        <div className="text-2xl">
          Personalized dermatology care for all skin types and conditions
        </div>

        <div className="mt-4 text-sm break-keep text-zinc-700">
          환자 한 분 한 분의 피부 상태와 라이프스타일을 세심하게 고려하여 개개인에 최적화된 맞춤
          치료를 진행합니다. 최신 기술과 친절한 케어로 건강한 피부를 위한 여정을 함께합니다.
        </div>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-zinc-900 px-8 py-3 text-center text-sm text-white"
        >
          이벤트 보러 가기
        </Link>
      </div>
    </div>
  );
}
