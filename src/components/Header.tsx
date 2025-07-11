'use client';

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: '병원소개', href: '#about' },
    { name: '한방치료', href: '#treatment' },
    { name: '체형교정', href: '#correction' },
    { name: '교통사고', href: '#accident' },
    { name: '안면마비', href: '#facial' },
    { name: '재활치료', href: '#rehabilitation' },
    { name: '여성질환', href: '#women' },
    { name: '성장·비만', href: '#growth' },
    { name: '커뮤니티', href: '#community' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <span className="text-green-500 font-bold text-2xl">🌿</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">튼튼한방병원</h1>
                <p className="text-xs text-gray-500">STRONG ORIENTAL MEDICINE HOSPITAL</p>
              </div>
            </div>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden lg:flex space-x-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 px-2 py-2 text-xs font-medium transition-colors whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 