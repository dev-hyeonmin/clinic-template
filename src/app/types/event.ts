export type EventData = {
  id: number;
  title: string;
  description: string | null;
  original_price: number | null;
  sale_price: number;
  created_at: string; // ISO 문자열 (Prisma DateTime은 string으로 받음)
  event_group_id: number;
};
