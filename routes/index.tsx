import { Head } from "$fresh/runtime.ts";
import Footer from "../islands/Footer.tsx";
import Tile from "../islands/Tile.tsx";

import { FaBars } from "https://deno.land/x/react_icons@0.2.3/fa/mod.ts";

export default function Home() {
	return (
		<>
			<Head>
				<title>Nocturn Database</title>
				<link rel="stylesheet" href="./global.css" />

				<meta property="og:title" content="Nocturn Database" />
				<meta property="og:description" content="Nocturn Database" />
				<meta property="og:image" content="" />
				<meta property="og:url" content="" />
				<meta property="og:type" content="website" />
			</Head>
			<header class="py-4 px-11">
				<nav class="mx-auto max-w-screen-lg flex gap-3 justify-between text-4xl">
					<a href="/" class="p-4 flex items-center text-shadow">
						<img src="/ovo.svg" class="h-8 w-auto mr-3" />
						<h1 class="text-4xl mb-[2px]">
							Nocturn <span class="hidden lg:inline-block">Database</span>
						</h1>
					</a>
					<button class="flex justify-center items-center text-3xl">
						<FaBars />
					</button>
					<ul class="text-2xl hidden justify-center items-center gap-8 mx-4 flex-wrap">
						<li class="">
							<a href="/">Home</a>
						</li>
						<li class="">
							<a href="#maps">Maps</a>
						</li>
						<li class="">
							<a href="/">Database</a>
						</li>
						<li class="">
							<a href="/contribute">Contributing</a>
						</li>
					</ul>
				</nav>
			</header>
			<article>
				<div class="warning hidden">
					<div class="max-w-screen-xl mx-auto p-4">
						<div class="flex flex-col gap-0 justify-center items-center">
							<h1 class="text-md text-center">
								Your screen is not wide enough!
							</h1>
							<p class="text-sm text-center">Try using a different device.</p>
						</div>
					</div>
				</div>
				<div class="page max-w-screen-xl hidden sm:flex justify-center items-center mx-auto">
					<div class="grid grid-cols-2 grid-rows-2 gap-16">
						<Tile
							title="Windy Island"
							image="/thumbnails/windy.png"
						/>
						<Tile
							title="Fissure Outpost"
							image="/thumbnails/outpost.png"
						/>
						<Tile
							title="Graveyard Sea"
							image="/thumbnails/graveyard.png"
						/>
						<Tile
							title="Ten-Mou"
							image="/thumbnails/ten-mou.png"
						/>
					</div>
				</div>
				<Footer />
			</article>
		</>
	);
}
