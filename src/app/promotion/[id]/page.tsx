import { getEventGroupById } from '@/lib/api/event-group';
import { notFound } from 'next/navigation';
import PromotionDetailPage from '@/app/promotion/_components/PromotionDetailPage';
import { getEventsByGroupId } from '@/lib/api/event';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const eventGroup = await getEventGroupById(id);
  const events = await getEventsByGroupId(id);

  if (!eventGroup) {
    return notFound();
  }

  return <PromotionDetailPage eventGroup={eventGroup} events={events} />;
}
