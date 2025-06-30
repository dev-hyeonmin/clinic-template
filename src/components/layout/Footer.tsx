import Logo from '@/components/layout/Logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="site-width flex items-center justify-between gap-4">
        <Logo />

        <div className="flex gap-4 text-xs md:text-sm">
          <Link href="/">공지사항</Link>
          <Link href="/">이용약관</Link>
          <Link href="/">개인정보처리방침</Link>
        </div>
      </div>

      <div className="site-width mt-4 flex opacity-80">
        <dl className="space-y-1 text-xs md:flex">
          <div className="flex gap-2">
            <dt>상호명</dt>
            <dd>ABC 회사</dd>
            <dt className="ml-4">전화번호</dt>
            <dd>010-1234-5678</dd>
          </div>

          <div className="flex gap-2 md:ml-4">
            <dt>사업자등록번호</dt>
            <dd>123-45-67890</dd>
          </div>

          <div className="flex gap-2 md:ml-4">
            <dt>주소</dt>
            <dd>서울특별시 강남구 강남대로 지하396 (역삼동 858)</dd>
          </div>
        </dl>
      </div>
    </footer>
  );
}
