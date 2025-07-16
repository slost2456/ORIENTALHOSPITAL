'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const treatmentCategories = [
    {
      title: '척추관절 체형교정',
      description: '체형 진단과 대한 진단한 맞춤',
      tags: ['#체형교정', '#척추측만증', '#교정'],
      image: '/chapter 2-1.jpg'
    },
    {
      title: '교통사고',
      description: '체형 진단과 대한 진단한 맞춤',
      tags: ['#교통사고', '#외상치료', '#재활'],
      image: '/chapter 2-2.jpg'
    },
    {
      title: '안면마비',
      description: '체형 진단과 대한 진단한 맞춤',
      tags: ['#안면마비', '#침치료', '#재활'],
      image: '/chapter 2-3.jpg'
    },
    {
      title: '재활치료',
      description: '체형 진단과 대한 진단한 맞춤',
      tags: ['#재활치료', '#물리치료', '#회복'],
      image: '/chapter 2-4.jpg'
    }
  ];

  return (
    <section className="relative">
      {/* 메인 히어로 배너 */}
      <div className="relative h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/mainpage.jpg"
            alt="환자와 의사의 상담 장면"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-bold text-white mb-6">
              {/* 모바일 버전 */}
              <div className="block md:hidden">
                <p className="text-[46px] leading-normal">
                  <span className="inline-block w-full text-center">환자 중심의 진료,</span>
                  <span className="inline-block w-full text-center mt-2">정밀한 진단으로</span>
                  <span className="inline-block w-full text-center mt-2">최선을 다하겠습니다.</span>
                </p>
              </div>
              {/* 데스크톱 버전 */}
              <div className="hidden md:block text-6xl">
                <p className="leading-tight">
                  <span className="inline-block w-full text-center">환자 중심의 진료, 정밀한 진단으로</span>
                  <span className="inline-block w-full text-center mt-4">최선을 다하겠습니다.</span>
                </p>
              </div>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              전문성과 따뜻함이 어우러진 진료로<br />
              환자와 가족의 일상을 지키겠습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 진료안내 섹션 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">진료안내</h2>
            <p className="text-gray-600">환자와 가족의 건강한 삶을 위해 한 걸음 더 다가가겠습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentCategories.map((category, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform ${
                  index === activeIndex ? 'scale-105 shadow-xl' : 'scale-100 hover:shadow-xl'
                }`}
                style={{
                  opacity: index === activeIndex ? 1 : 0.7,
                }}
              >
                <div className="h-64 bg-gray-200 relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex justify-center mt-12 space-x-2">
            {treatmentCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-green-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`진료 카테고리 ${index + 1}번으로 이동`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 