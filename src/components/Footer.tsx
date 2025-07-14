'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

const Footer = () => {
  useEffect(() => {
    const initMap = () => {
      if (typeof window.naver === 'undefined') {
        console.error('NAVER Maps API not loaded');
        return;
      }

      try {
        const mapOptions = {
          center: new window.naver.maps.LatLng(36.3503849, 127.3778532),
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT
          }
        };

        const map = new window.naver.maps.Map('map', mapOptions);
        const marker = new window.naver.maps.Marker({
          position: mapOptions.center,
          map: map
        });

        console.log('NAVER Maps initialized successfully');
      } catch (error) {
        console.error('Error initializing NAVER Maps:', error);
      }
    };

    // 스크립트 로드 전에 callback 함수를 전역 스코프에 추가
    window.initNaverMap = initMap;

    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=qzks3s69tp&callback=initNaverMap`;
    script.async = true;
    script.onerror = () => {
      console.error('Failed to load NAVER Maps API');
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      // 전역 callback 함수 제거
      delete window.initNaverMap;
    };
  }, []);

  return (
    <footer className="bg-gradient-to-br from-black via-[#1B2D4D] to-[#0A1220] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 지도 섹션 */}
        <div className="mb-12">
          <div id="map" className="w-full h-[300px] rounded-lg overflow-hidden relative">
            {/* 지도 로딩 중 표시할 폴백 UI */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <p className="text-white">지도를 불러오는 중...</p>
            </div>
          </div>
        </div>

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
                <p>(화, 목 저녁 19:00)</p>
                <p>토요일 오전 09:00 ~ 오후 13:00</p>
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

        {/* 회사 정보 */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-80">
            <div>
              <p><strong>튼튼한방병원</strong></p>
              <p>주소: 대전광역시 서구 한밭대로 755 4층 | 사업자등록번호: 847-92-01435</p>
              <p>대표자명: 한기풍 | 전화번호: 1544-6082</p>
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

// TypeScript 전역 타입 선언
declare global {
  interface Window {
    initNaverMap: () => void;
  }
}

export default Footer; 