import Logo from '@/components/layout/Logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-4 text-white">
      <div className="site-width flex flex-col gap-4">
        <Logo />

        <div className="flex gap-4 text-sm">
          <Link href="/">공지사항</Link>
          <Link href="/">이용약관</Link>
          <Link href="/">개인정보처리방침</Link>
        </div>

        <div className="flex opacity-80">
          <dl className="space-y-2">
            <div className="flex text-xs">
              <dt className="w-24">상호명</dt>
              <dd>ABC 회사</dd>
            </div>
            <div className="flex text-xs">
              <dt className="w-24">전화번호</dt>
              <dd>010-1234-5678</dd>
            </div>
            <div className="flex text-xs">
              <dt className="w-24">사업자등록번호</dt>
              <dd>123-45-67890</dd>
            </div>
            <div className="flex text-xs">
              <dt className="w-24">주소</dt>
              <dd>서울특별시 강남구 강남대로 지하396 (역삼동 858)</dd>
            </div>
          </dl>
        </div>
      </div>
    </footer>
  );
}
