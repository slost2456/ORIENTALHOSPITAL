'use client';

import React, { useEffect, useState } from 'react';

interface KakaoMaps {
  maps: {
    LatLng: new (lat: number, lng: number) => any;
    Map: new (container: HTMLElement, options: any) => any;
    MapTypeControl: new () => any;
    ZoomControl: new () => any;
    ControlPosition: {
      TOPRIGHT: any;
      RIGHT: any;
    };
    Marker: new (options: any) => any;
    InfoWindow: new (options: any) => any;
    event: {
      addListener: (target: any, type: string, handler: () => void) => void;
    };
    load: (callback: () => void) => void;
  };
}

declare global {
  interface Window {
    kakao: KakaoMaps;
  }
}

const KAKAO_MAP_API_KEY = '4db06a9e3301548c29f72afdb5e74007';

const Footer = () => {
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        initializeMap();
      } else {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&libraries=services,clusterer&autoload=false`;
        
        script.onload = () => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
              initializeMap();
            });
          }
        };

        document.head.appendChild(script);
      }
    };

    const initializeMap = () => {
      try {
        const container = document.getElementById('map');
        if (!container) return;

        const options = {
          center: new window.kakao.maps.LatLng(36.3503849, 127.3778532),
          level: 3
        };

        const map = new window.kakao.maps.Map(container, options);

        // 지도 컨트롤 추가
        const mapTypeControl = new window.kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
        
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
        
        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(36.3503849, 127.3778532);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        
        marker.setMap(map);

        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: `
            <div style="padding:15px;width:300px;">
              <div style="padding:5px;font-size:14px;">
                <strong style="display:block;margin-bottom:7px;font-size:16px;color:#333;">튼튼한방병원</strong>
                <span style="display:block;margin-top:4px;font-size:13px;color:#666;">대전광역시 서구 한밭대로 755 4층</span>
                <span style="display:block;margin-top:4px;font-size:13px;color:#009900;">Tel: 1544-6082</span>
              </div>
              <div style="display:flex;justify-content:space-between;margin-top:12px;">
                <a href="https://map.kakao.com/link/map/튼튼한방병원,36.3503849,127.3778532" 
                   target="_blank" 
                   style="color:#007AFF;text-decoration:none;font-size:13px;">
                  큰지도보기
                </a>
                <a href="https://map.kakao.com/link/to/튼튼한방병원,36.3503849,127.3778532" 
                   target="_blank" 
                   style="color:#007AFF;text-decoration:none;font-size:13px;">
                  길찾기
                </a>
                <a href="https://map.kakao.com/link/roadview/36.3503849,127.3778532" 
                   target="_blank" 
                   style="color:#007AFF;text-decoration:none;font-size:13px;">
                  로드뷰
                </a>
              </div>
            </div>
          `
        });
        
        window.kakao.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
        });

        infowindow.open(map, marker);
        setMapError(null);
      } catch (error) {
        console.error('Error initializing KakaoMap:', error);
        setMapError('지도를 초기화하는 중 오류가 발생했습니다.');
      }
    };

    loadKakaoMap();

    return () => {
      const mapScript = document.querySelector('script[src*="dapi.kakao.com"]');
      if (mapScript) {
        document.head.removeChild(mapScript);
      }
    };
  }, []);

  return (
    <footer className="bg-gradient-to-br from-black via-[#1B2D4D] to-[#0A1220] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 지도 섹션 */}
        <div className="mb-12">
          <div id="map" className="w-full h-[400px] rounded-lg overflow-hidden relative shadow-xl">
            {mapError ? (
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <p className="text-white">{mapError}</p>
              </div>
            ) : null}
          </div>
        </div>

        {/* 나머지 Footer 내용은 동일하게 유지 */}
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
              <p>주소: 대전광역시 서구 한밭대로 755 4층</p>
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

export default Footer; 