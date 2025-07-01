import NoticePage from '@/app/notice/_components/NoticePage';
import { getNoticeList } from '@/app/notice/api';

export default async function Page() {
  const noticeList = await getNoticeList();

  return <NoticePage noticeList={noticeList} />;
}
