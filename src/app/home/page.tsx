'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const categories = [
    { id: 1, name: '전시·행사', icon: '/assets/icons/ticket.svg' },
    { id: 2, name: '영화·공연', icon: '/assets/icons/movie.svg' },
    { id: 3, name: '스포츠·경기', icon: '/assets/icons/sports.svg' },
    { id: 4, name: '관광·명소', icon: '/assets/icons/tourism.svg' },
  ];

  const events = [
    {
      id: 1,
      type: '전시·행사',
      title: '김대중컨벤션센터',
      image: '/assets/events/event1.jpg',
      tags: ['휠체어 대여 가능', '장애인 화장실', '전용 주차구역'],
      accessibility: '혼잡도 높음',
      moreCount: 3,
    },
    // ... 더 많은 이벤트 데이터
  ];

  return (
    <div className="flex flex-col min-h-screen pb-16">
      {/* 헤더 */}
      <header className="flex items-center justify-between p-4 border-b">
        <Image src="/assets/logo.svg" alt="로고" width={32} height={32} />
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="search"
              placeholder="보고싶은 전시를 검색해보세요!"
              className="w-full p-2 pl-10 bg-gray-50 rounded-full"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <button className="p-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-2">오늘 회원님에게 추천하는 행사에요!</h1>
        <p className="text-gray-600 mb-6">관심있는 행사를 선택해보세요!</p>
      </main>
    </div>
  );
}
