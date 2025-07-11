import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 병원명 */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🌿</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">튼튼한방병원</h3>
                <p className="text-xs opacity-80">STRONG ORIENTAL MEDICINE HOSPITAL</p>
              </div>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h4 className="font-bold mb-4">CS Center</h4>
            <div className="space-y-2">
              <p className="text-2xl font-bold">1544-6082</p>
              <div className="text-sm opacity-80">
                <p>월~금 오전 09:00 ~ 오후 18:00</p>
                <p>토요일 오전 09:00 ~ 오후 13:00</p>
                <p>일요일 오전 09:00 ~ 오후 13:00</p>
              </div>
            </div>
          </div>

          {/* 소셜 미디어 */}
          <div>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-sm">📱</span>
              </button>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-sm">📧</span>
              </button>
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <a href="#" className="hover:underline">병원소개</a>
            <a href="#" className="hover:underline">한방치료</a>
            <a href="#" className="hover:underline">척추관절</a>
            <a href="#" className="hover:underline">교통사고</a>
            <a href="#" className="hover:underline">안면마비</a>
            <a href="#" className="hover:underline">재활치료</a>
            <a href="#" className="hover:underline">비만치료</a>
            <a href="#" className="hover:underline">커뮤니티</a>
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-80">
            <div>
              <p><strong>튼튼한방병원</strong></p>
              <p>주소: 대전광역시 서구 한밭대로 755 4층 | 사업자등록번호: 123-45-67890</p>
              <p>대표자명: 홍길동 | 전화번호: 1544-6082</p>
            </div>
            <div>
              <p><strong>Company Info.</strong></p>
              <p>© 2024 튼튼한방병원. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 