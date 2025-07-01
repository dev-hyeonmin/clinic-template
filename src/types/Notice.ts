export type Notice = {
  id: number;
  title: string;
  content?: string;
  image_url?: string;
  is_pinned: boolean; // 상단 고정 여부
  created_at: string;
};
