import React from 'react';

const TreatmentInfo = () => {
  return (
    <section className="bg-white py-16" id="treatment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                더 큰 사랑의 실천,<br />
                <span className="text-green-600">튼튼한방병원</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* 물리치료소 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">전담 물리치료사의 1:1 맞춤 치료 프로그램</h3>
                <p className="text-green-600 font-medium mb-2">Systemic physical therapy</p>
                <p className="text-gray-600 text-sm">
                  회복을 앞당기는 통합 의료 서비스<br />
                  제공합니다.
                </p>
              </div>

              {/* 한방과 양방의 협진 진료 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">한방과 양방의 조화로운 치료 방식</h3>
                <p className="text-green-600 font-medium mb-2">Oriental and western cooperation</p>
                <p className="text-gray-600 text-sm">
                  전문 협진으로 건강한 일상 복귀를<br />
                  지원합니다.
                </p>
              </div>

              {/* 개인별 맞춤 치료 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">체질과 증상에 딱 맞춘 개인 특화 치료</h3>
                <p className="text-green-600 font-medium mb-2">Personal physical therapy</p>
                <p className="text-gray-600 text-sm">
                  환자의 회복과 빠른 일상 복귀를 위한<br />
                  전문적인 솔루션을 제공해드립니다.
                </p>
              </div>
            </div>

            {/* 네비게이션 화살표 */}
            <div className="flex space-x-4">
              <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* 오른쪽: 치료 이미지 그리드 */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-96">
              {/* 진단 상담 (챕터4-1) */}
              <div className="bg-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow relative">
                <img 
                  src="/챕터4-1.png"
                  alt="진단 및 상담"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold text-sm">진단 상담</h4>
                  </div>
                </div>
              </div>

              {/* 뜸치료 (챕터4-2) */}
              <div className="bg-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow relative">
                <img 
                  src="/챕터4-2.png"
                  alt="뜸 치료"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold text-sm">뜸 치료</h4>
                  </div>
                </div>
              </div>

              {/* 부항치료 (챕터4-3) */}
              <div className="bg-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow relative">
                <img 
                  src="/챕터4-3.png"
                  alt="부항 치료"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold text-sm">부항 치료</h4>
                  </div>
                </div>
              </div>

              {/* 침치료 (챕터4-4) */}
              <div className="bg-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow relative">
                <img 
                  src="/챕터4-4.png"
                  alt="침 치료"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold text-sm">침 치료</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* 치료 설명 오버레이 */}
            <div className="mt-6 bg-green-50 rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://cdn.pixabay.com/photo/2020/07/12/13/10/traditional-chinese-medicine-5397193_1280.jpg"
                  alt="한방 약재"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">전문 한방 치료 서비스</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    전통 한의학과 현대 의료 기술을 결합한<br />
                    체계적이고 안전한 치료를 제공합니다.
                  </p>
                  <div className="text-right">
                    <span className="text-green-400 font-medium text-sm">치료 문의 상담 →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentInfo; 