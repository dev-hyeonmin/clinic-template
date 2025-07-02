import PromotionPage from '@/app/promotion/_components/PromotionPage';
import { getEventGroups } from '@/lib/api/event-group';

export default async function Page() {
  const eventGroups = await getEventGroups();

  return <PromotionPage eventGroups={eventGroups} />;
}
