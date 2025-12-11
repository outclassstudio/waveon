"use client";

import { motion } from "motion/react";

export default function ScrollBtn() {
	return (
		<button
			onClick={() => {
				document
					.getElementById("current-waves")
					?.scrollIntoView({ behavior: "smooth" });
			}}
			className="absolute bottom-10 md:bottom-16 right-1/2 cursor-pointer hover:text-white transition-colors"
			aria-label="Scroll to next section"
		>
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				className="text-slate-500"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M7 13l5 5 5-5" />
					<path d="M7 6l5 5 5-5" />
				</svg>
			</motion.div>
		</button>
	);
}
