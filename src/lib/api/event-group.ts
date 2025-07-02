// /lib/api/eventGroups.ts

import { EventGroupData } from '@/app/types/event-group';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getEventGroups(): Promise<EventGroupData[]> {
  return eventGroup;

  // const res = await fetch(`${API_BASE_URL}/event-groups`, {
  //   cache: 'no-store',
  // });
  //
  // if (!res.ok) {
  //   throw new Error('Failed to fetch event groups');
  // }
  //
  // return res.json();
}

export async function getEventGroupById(id: number | string): Promise<EventGroupData | null> {
  return eventGroup.find((group) => group.id === Number(id)) || null;

  // const res = await fetch(`${API_BASE_URL}/event-groups/${id}`, {
  //   cache: 'no-store',
  // });
  //
  // if (!res.ok) {
  //   throw new Error(`Failed to fetch event group with id ${id}`);
  // }
  //
  // return res.json();
}

const eventGroup: EventGroupData[] = [
  {
    id: 1,
    title: '봄 시즌 할인',
    description: '봄맞이 특별 할인 이벤트입니다.',
    image_url: '/images/event1.jpg',
    start_date: '2025-03-01',
    end_date: '2025-03-31',
  },
  {
    id: 2,
    title: '여름 패키지',
    description: '여름 한정 패키지 판매!',
    image_url: '/images/event2.jpg',
    start_date: '2025-06-01',
    end_date: '2025-06-30',
  },
  {
    id: 3,
    title: '가을 감사제',
    description: '가을 고객 감사 이벤트.',
    image_url: '/images/event3.jpg',
    start_date: '2025-09-01',
    end_date: '2025-09-30',
  },
  {
    id: 4,
    title: '겨울 특별전',
    description: '겨울 시즌 스페셜 할인.',
    image_url: '/images/event4.jpg',
    start_date: '2025-12-01',
    end_date: '2025-12-31',
  },
  {
    id: 5,
    title: '블랙 프라이데이',
    description: '1년에 단 한 번! 블랙 프라이데이 할인!',
    image_url: '/images/event5.jpg',
    start_date: '2025-11-25',
    end_date: '2025-11-30',
  },
  {
    id: 6,
    title: '연말 결산 세일',
    description: '올해 마지막 세일!',
    image_url: '/images/event6.jpg',
    start_date: '2025-12-20',
    end_date: '2025-12-31',
  },
  {
    id: 7,
    title: '신년 맞이 이벤트',
    description: '새해 첫 프로모션!',
    image_url: '/images/event7.jpg',
    start_date: '2026-01-01',
    end_date: '2026-01-10',
  },
  {
    id: 8,
    title: '발렌타인데이 이벤트',
    description: null,
    image_url: '/images/event8.jpg',
    start_date: '2026-02-01',
    end_date: '2026-02-14',
  },
  {
    id: 9,
    title: '화이트데이 이벤트',
    description: '화이트데이 기념 프로모션.',
    image_url: null,
    start_date: '2026-03-01',
    end_date: '2026-03-14',
  },
  {
    id: 10,
    title: '여름 준비 이벤트',
    description: null,
    image_url: '/images/event10.jpg',
    start_date: '2026-05-01',
    end_date: '2026-05-31',
  },
];
