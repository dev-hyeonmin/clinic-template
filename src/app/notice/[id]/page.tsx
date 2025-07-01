import NoticeDetailPage from '@/app/notice/_components/NoticeDetailPage';
import { getNotice } from '@/app/notice/api';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const notice = await getNotice(id);

  if (!notice) {
    return notFound();
  }

  return <NoticeDetailPage notice={notice} />;
}
