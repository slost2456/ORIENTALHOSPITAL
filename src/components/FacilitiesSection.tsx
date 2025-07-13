import React from 'react';
import Image from 'next/image';

const FacilitiesSection = () => {
  return (
    <section className="relative py-24" id="facilities">
      {/* 투톤 배경 */}
      <div className="absolute inset-0">
        {/* 상단 라임블랙 배경 */}
        <div className="h-1/2 bg-[#C9E653]"></div>
        {/* 하단 이미지 배경 */}
        <div 
          className="h-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/chapter 5-2.jpg')`
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-black mb-16">
          <h2 className="text-3xl font-bold mb-4">튼튼 한방병원은 새로운 시작을 함께합니다.</h2>
          <p className="text-lg opacity-90">
            환자를 먼저 생각하는 시스템과 믿고 맡길 수 있는 체계적인 환경
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* 왼쪽 이미지 - chapter 5-1.png */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-80 bg-gray-200 relative">
              <Image
                src="/chapter 5-1.png"
                alt="한방 약재 조제"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-gray-900 mb-2">한방 약재 조제</h3>
            </div>
          </div>

          {/* 중앙 메인 이미지 - chapter 6-1.png */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-80 bg-gray-200 relative">
              <Image
                src="/chapter 6-1.png"
                alt="힐링 아로마 테라피"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-gray-900 mb-2">힐링 아로마 테라피</h3>
            </div>
          </div>

          {/* 오른쪽 이미지 - chapter 5-3.png */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-80 bg-gray-200 relative">
              <Image
                src="/chapter 5-3.png"
                alt="의료진 상담 진료"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-gray-900 mb-2">의료진 상담 진료</h3>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="flex justify-center space-x-4 mb-16">
          <button className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="bg-green-500 hover:bg-green-600 rounded-full p-3 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 상담 신청 섹션 */}
        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
          <div className="relative z-10 p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">정확한 진단과 최선의 진료를 약속드립니다.</h3>
            <p className="text-white/90 text-lg mb-8">
              검진을 통해 빠르게 회복될 수 있도록 도와드리겠습니다.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="이름"
                    className="px-6 py-4 rounded-lg border-0 bg-white/95 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-500"
                  />
                  <input
                    type="tel"
                    placeholder="연락처"
                    className="px-6 py-4 rounded-lg border-0 bg-white/95 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-500"
                  />
                </div>
                <textarea
                  placeholder="상담내용"
                  rows={4}
                  className="w-full px-6 py-4 rounded-lg border-0 bg-white/95 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-500"
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#8BC34A] hover:bg-[#7CB342] text-white px-12 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    빠른상담 신청하기
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-6">
              <label className="inline-flex items-center text-white/80 text-sm">
                <input type="checkbox" className="mr-2 accent-green-500" />
                개인정보취급방침 동의
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection; 