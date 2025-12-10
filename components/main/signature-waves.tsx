import FadeIn from "../ui/fade-in";
import { ArrowUpRight } from "lucide-react";

const SIGNATURES = [
	{ title: "WAVE Pop-up Series", desc: "청춘 감성 팝업스토어 & 테마카페" },
	{ title: "Street Wave", desc: "거리·골목 라이브/공연 프로젝트" },
	{ title: "Artist Wave Lab", desc: "아티스트 스토리 실험실" },
];

export default function SignatureWaves() {
	return (
		<section className="py-24 bg-slate-900 text-white border-y border-slate-800">
			<div className="container mx-auto px-6">
				<FadeIn>
					<h2 className="text-3xl font-bold mb-10">Signature Waves</h2>
				</FadeIn>

				<div className="space-y-4">
					{SIGNATURES.map((item, idx) => (
						<FadeIn key={idx} delay={idx * 0.1} direction="left">
							<div className="group flex items-center justify-between p-6 md:p-10 border border-slate-700 rounded-2xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 cursor-pointer">
								<div>
									<h3 className="text-xl md:text-2xl font-bold mb-1">
										{item.title}
									</h3>
									<p className="text-slate-400 group-hover:text-blue-100 text-sm md:text-base">
										{item.desc}
									</p>
								</div>
								<ArrowUpRight
									className="text-slate-500 group-hover:text-white transition-colors"
									size={24}
								/>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
