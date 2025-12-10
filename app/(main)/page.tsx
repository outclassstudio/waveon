import CurrentWaves from "@/components/main/current-waves";
import HeroSection from "@/components/main/hero-section";
import IntroTeaser from "@/components/main/intro-teaser";
import JoinSection from "@/components/main/join-section";
import SignatureWaves from "@/components/main/signature-waves";
import WhatWeDo from "@/components/main/what-we-do";

export default function Home() {
	return (
		<main className="min-h-screen bg-slate-950 selection:bg-blue-500 selection:text-white">
			{/* 1. 브랜드 첫인상 */}
			<HeroSection />

			{/* 2. NOW: 현재 진행중 */}
			<CurrentWaves />

			{/* 3. 소개 티저 */}
			<IntroTeaser />

			{/* 4. 대표 활동 Highlight */}
			<WhatWeDo />

			{/* 5. 시그니처 시리즈 */}
			<SignatureWaves />

			{/* 6. Join CTA */}
			<JoinSection />
		</main>
	);
}
