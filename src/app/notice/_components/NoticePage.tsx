import NoticeList from '@/app/notice/_components/NoticeList';
import { Notice } from '@/types/Notice';

interface NoticePageProps {
  noticeList: Notice[];
}

export default function NoticePage({ noticeList }: NoticePageProps) {
  return (
    <div className="body-offset">
      <div className="site-width py-12">
        <h1 className="text-2xl font-bold">Notice</h1>
        <NoticeList noticeList={noticeList} />
      </div>
    </div>
  );
}
