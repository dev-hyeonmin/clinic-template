import { EventGroupData } from '@/app/types/event-group';
import { EventData } from '@/app/types/event';
import EventItem from '@/app/promotion/_components/_EventItem';

interface PromotionDetailPageProps {
  eventGroup: EventGroupData;
  events: EventData[] | null;
}

export default function PromotionDetailPage({ eventGroup, events = [] }: PromotionDetailPageProps) {
  const { title } = eventGroup;

  return (
    <div className="header-offset">
      <div className="site-width py-8">
        <h3 className="mb-8 text-lg font-bold">{title}</h3>

        <div className="aspect-square w-full rounded bg-zinc-200" />

        <div className="mt-8 space-y-2">
          {events?.map((event) => (
            <EventItem key={`event-${event.id}`} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
