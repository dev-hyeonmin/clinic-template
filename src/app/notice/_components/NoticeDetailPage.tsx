import { Notice } from '@/types/Notice';
import Link from 'next/link';

interface NoticeDetailPageProps {
  notice: Notice;
}

export default function NoticeDetailPage({ notice }: NoticeDetailPageProps) {
  return (
    <div className="body-offset">
      <div className="site-width py-12">
        <h1 className="text-2xl font-bold">Notice</h1>

        <div className="mt-5 text-lg font-bold">{notice.title}</div>
        <div className="mt-1 text-xs text-zinc-400">{notice.created_at.substring(0, 10)}</div>

        <div className="mt-6 border-t border-zinc-100 py-10 text-sm leading-relaxed">
          {notice.content}
        </div>

        <Link href={`/notice`} className="mt-8 flex w-fit rounded bg-zinc-100 px-5 py-2 text-xs">
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
