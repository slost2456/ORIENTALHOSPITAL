import React from 'react';

const DoctorIntro = () => {
  return (
    <section className="bg-gray-50 py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 왼쪽: 의료진 소개 */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">의료진 소개</h2>
              <p className="text-gray-600 mb-6">
                신뢰할 수 있는 전문 의료진이<br />
                안심할 수 있는 수준 높은 의료서비스로<br />
                환자와 가족의 소중한 일상을 지켜드리겠습니다.
              </p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                바로가기 →
              </button>
            </div>

            {/* 온라인상담 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">온라인상담</h3>
              <p className="text-gray-600 mb-4">직접적인 상담이 어려우시다면</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600">○</span>
                  <span className="flex-1 ml-3 text-sm">한약짓기 전 체질 검사 하나요?</span>
                  <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">답변대기중</span>
                  <span className="text-gray-400 text-xs ml-2">2025-07-10</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600">○</span>
                  <span className="flex-1 ml-3 text-sm">입원문의드립니다.</span>
                  <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">답변대기중</span>
                  <span className="text-gray-400 text-xs ml-2">2025-07-07</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600">○</span>
                  <span className="flex-1 ml-3 text-sm">치료는 어느 정도 간격으로 받아야 하나요?</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">답변완료</span>
                  <span className="text-gray-400 text-xs ml-2">2025-03-22</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600">○</span>
                  <span className="flex-1 ml-3 text-sm">기존에 복용 중인 약과 한약을 함께 복용해도 되나요?</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">답변완료</span>
                  <span className="text-gray-400 text-xs ml-2">2025-01-15</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600">○</span>
                  <span className="flex-1 ml-3 text-sm">허리 디스크에 한방 치료가 도움이 될까요?</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">답변완료</span>
                  <span className="text-gray-400 text-xs ml-2">2024-11-08</span>
                </div>
              </div>
              
              
              <div className="mt-4 text-center">
                <button className="text-green-500 hover:text-green-600 font-medium">
                  상담 바로가기 ✏️
                </button>
              </div>
            </div>
          </div>

          {/* 오른쪽: 튼튼 한약 */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">튼튼 한약</h3>
              
              {/* 한약재 이미지 */}
              <div className="mb-4">
                <img 
                  src="/cheon-yeon-yag-yong-hyangsinlyowa-heobeuui-pyeongpyeonghan-nuwo.jpg"
                  alt="천연 약용 향신료와 허브의 평평한 누워"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              {/* 멘트 */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">건강한 회복을 위해</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  몸과 마음을 차근차근, 한걸음씩<br />
                  회복의 여정을 이어갑니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorIntro; 