import { EventGroupData } from '@/app/types/event-group';
import EventGroup from '@/app/promotion/_components/_EventGroup';

interface PromotionPageProps {
  eventGroups: EventGroupData[];
}

export default function PromotionPage({ eventGroups }: PromotionPageProps) {
  return (
    <div className="header-offset">
      <div className="site-width py-8">
        <h3 className="mb-8 text-lg font-bold">Promotions</h3>

        <div className="grid grid-cols-12 gap-2 md:gap-4">
          {eventGroups.map((group) => (
            <EventGroup key={`event-group-${group.id}`} eventGroup={group} />
          ))}
        </div>
      </div>
    </div>
  );
}
