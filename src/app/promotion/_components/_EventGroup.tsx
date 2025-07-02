import { EventGroupData } from '@/app/types/event-group';
import Link from 'next/link';

interface EventGroupProps {
  eventGroup: EventGroupData;
}
export default function EventGroup({ eventGroup }: EventGroupProps) {
  const { id, title, description, image_url, start_date, end_date } = eventGroup;

  return (
    <Link href={`/promotion/${id}`} className="col-span-6 md:col-span-4">
      <div className="aspect-square rounded-lg bg-zinc-200" />
    </Link>
  );
}
