import {
	FaDiscord,
	FaGithub,
} from "https://deno.land/x/react_icons@0.2.3/fa/mod.ts";

import { useState } from "preact/hooks";

function HSVtoRGB(h: number, s: number, v: number) {
	let r, g, b;

	const i = Math.floor(h * 6);
	const f = h * 6 - i;
	const p = v * (1 - s);
	const q = v * (1 - f * s);
	const t = v * (1 - (1 - f) * s);
	switch (i % 6) {
		case 0:
			r = v, g = t, b = p;
			break;
		case 1:
			r = q, g = v, b = p;
			break;
		case 2:
			r = p, g = v, b = t;
			break;
		case 3:
			r = p, g = q, b = v;
			break;
		case 4:
			r = t, g = p, b = v;
			break;
		case 5:
			r = v, g = p, b = q;
			break;
	}
	return {
		r: Math.round(r || 0 * 255),
		g: Math.round(g || 0 * 255),
		b: Math.round(b || 0 * 255),
	};
}

export default function Footer() {
	const [filter, setFilter] = useState(
		"drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.2))",
	);

	return (
		<>
			<footer class="flex flex-row gap-4 justify-center items-center p-12">
				<nav class="hidden sm:flex flex-col gap-4 justify-center items-end max-h-16 ml-auto">
					<div>
						<h2 class="text-2xl">Database</h2>

						<div class="flex flex-row gap-2">
							<ul class="flex flex-col gap-1">
								<li class="text-xl">
									<a href="/dreams/fissure-outpost">Dreams</a>
								</li>
								<li class="text-xl">
									<a href="/dreams/graveyard-sea">Items</a>
								</li>
								<li class="text-xl">
									<a href="/dreams/ocean-lab">Documents</a>
								</li>
							</ul>
							<ul class="flex flex-col gap-1">
								<li class="text-xl">
									<a href="/dreams/pink-swamp">Entities</a>
								</li>
								<li class="text-xl">
									<a href="/dreams/ten-mou">Maps</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<a
					onClick={() => {
						const rot = Math.random();
						const color = HSVtoRGB(rot, 1, 1);
						setFilter(
							`brightness(100%) sepia(100) saturate(100) hue-rotate(${
								rot * 360
							}deg) drop-shadow(0px 0px 9px rgba(${color.r * 255}, ${
								color.g * 255
							}, ${color.b * 255}, 0.418))`,
						);
					}}
					class="flex justify-center items-center small mx-8"
				>
					<img
						src="/owl.png"
						style={{ filter: filter }}
						class="h-32 w-auto mx-16 pixelated"
					/>
				</a>

				<div class="hidden sm:block">
					<nav class="flex flex-row gap-4 text-2xl justify-start items-center">
						<ul class="flex flex-col gap-2">
							<li class="flex flex-row gap-2 justify-start items-center">
								<FaDiscord />
								<a
									class="shrink-footer text-sm"
									href="https://discord.gg/FERfyDvVjp"
								>
									Ten-Mou Illuminati
								</a>
							</li>
							<li class="flex flex-row gap-2 justify-start items-center">
								<FaGithub />
								<a
									class="shrink-footer text-sm"
									href="https://github.com/frugalism/nocturn"
								>
									Nocturn GitHub
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
}
