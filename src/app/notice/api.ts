import { Notice } from '@/types/Notice';

export async function getNoticeList() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/example`, {
  //     next : {revalidate: 60}
  // });
  // const data = await res.json();

  return notices;
}

const notices: Notice[] = [
  {
    id: 1,
    title: '여름 휴진 안내',
    content:
      '○○클리닉은 7월 15일(월)~7월 17일(수)까지 여름 휴진입니다. 예약 및 내원 시 참고 부탁드립니다.',
    image_url: '/images/notices/summer-break.jpg',
    is_pinned: true,
    created_at: '2025-06-25T10:00:00Z',
  },
  {
    id: 2,
    title: '신규 장비 도입 안내',
    content: '최신 레이저 장비가 도입되어 더욱 정밀한 진료가 가능합니다.',
    image_url: '/images/notices/new-equipment.jpg',
    is_pinned: false,
    created_at: '2025-06-20T09:30:00Z',
  },
  {
    id: 3,
    title: '6월 이벤트 마감 임박',
    content: '6월 한정 이벤트가 곧 종료됩니다. 서둘러 예약해 주세요!',
    image_url: '/images/notices/event-ending.jpg',
    is_pinned: false,
    created_at: '2025-06-18T14:15:00Z',
  },
  {
    id: 4,
    title: '진료 시간 변경 안내',
    content: '7월부터 토요일 진료 시간이 오후 3시까지로 변경됩니다.',
    image_url: '/images/notices/clinic-hours.jpg',
    is_pinned: true,
    created_at: '2025-06-15T08:45:00Z',
  },
  {
    id: 5,
    title: '비급여 항목 수가 변경 안내',
    content:
      '2025년 7월 1일부터 일부 비급여 항목의 수가가 변경될 예정입니다. 자세한 사항은 홈페이지를 참고해 주세요.',
    image_url: '/images/notices/price-update.jpg',
    is_pinned: false,
    created_at: '2025-06-10T11:20:00Z',
  },
];
