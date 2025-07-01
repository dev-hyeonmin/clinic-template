import NoticeList from '@/app/notice/_components/NoticeList';
import { Notice } from '@/types/Notice';

interface NoticePageProps {
  noticeList: Notice[];
}

export default function NoticePage({ noticeList }: NoticePageProps) {
  return (
    <div className="offset">
      <NoticeList noticeList={noticeList} />
    </div>
  );
}
