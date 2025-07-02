import { EventData } from '@/app/types/event';

interface EventItemProps {
  event: EventData;
}
export default function EventItem({ event }: EventItemProps) {
  const { id, title, description, original_price, sale_price, created_at } = event;

  return <div>{title}</div>;
}
