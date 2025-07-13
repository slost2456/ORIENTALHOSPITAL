import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "튼튼한방병원",
  description: "전문성과 따뜻함이 어우러진 진료로 환자와 가족의 일상을 지키겠습니다.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
