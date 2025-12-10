import FadeIn from "../ui/fade-in";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

// Mock Data (나중에 Tanstack Query로 대체될 부분)
const PROJECTS = [
	{
		id: 1,
		category: "POP-UP",
		title: "한여름 밤의 네온 파도",
		desc: "도심 속에서 즐기는 청춘의 칵테일 바",
		date: "2024.07.15 - 07.30",
		location: "성수동 WAVE A동",
		image: "bg-blue-900", // 실제 이미지 URL로 교체 필요
	},
	{
		id: 2,
		category: "EXHIBITION",
		title: "Deep Dive: 감정의 심해",
		desc: "당신의 가장 깊은 우울과 희망을 마주하다",
		date: "2024.08.01 - 08.20",
		location: "홍대 아트센터",
		image: "bg-indigo-900",
	},
];

export default function CurrentWaves() {
	return (
		<section className="py-24 bg-slate-950 text-white">
			<div className="container mx-auto px-6">
				<FadeIn className="mb-12 flex justify-between items-end">
					<div>
						<span className="text-blue-500 font-bold tracking-widest text-sm mb-2 block">
							ON AIR
						</span>
						<h2 className="text-4xl font-bold">
							NOW: 지금 <span className="text-blue-400">WAVEON</span>의 흐름
						</h2>
					</div>
				</FadeIn>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{PROJECTS.map((project, idx) => (
						<FadeIn
							key={project.id}
							delay={idx * 0.2}
							className="group cursor-pointer"
						>
							<div
								className={`h-64 rounded-2xl ${project.image} relative overflow-hidden mb-6`}
							>
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
								<div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20">
									{project.category}
								</div>
							</div>
							<h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
								{project.title}
							</h3>
							<p className="text-slate-400 mb-4">{project.desc}</p>
							<div className="flex flex-col gap-2 text-sm text-slate-500 mb-6">
								<div className="flex items-center gap-2">
									<Calendar size={16} /> {project.date}
								</div>
								<div className="flex items-center gap-2">
									<MapPin size={16} /> {project.location}
								</div>
							</div>
							<button className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform">
								자세히 보기 <ArrowRight size={18} />
							</button>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
