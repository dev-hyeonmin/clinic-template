import { Notice } from '@/types/Notice';
import Link from 'next/link';

interface NoticeListProps {
  noticeList: Notice[];
}

export default function NoticeList({ noticeList }: NoticeListProps) {
  console.log(noticeList);
  return (
    <div className="site-width py-12">
      <h1 className="text-2xl font-bold">Notice</h1>

      <div className="mt-8">
        {noticeList.map((notice) => (
          <Link
            key={`notice-${notice.id}`}
            href={`/notice/${notice.id}`}
            className="flex w-full flex-col border-b border-zinc-100 py-4"
          >
            <div className="font-medium">{notice.title}</div>
            <div className="text-xs text-zinc-400">
              created at. {notice.created_at.substring(0, 10)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
