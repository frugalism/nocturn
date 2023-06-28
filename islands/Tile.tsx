interface TileProps {
	title: string;
	image: string;
}

export default function Tile(props: TileProps) {
	return (
		<>
			<a class="tile-link">
				<div class="tile rounded-lg overflow-hidden shadow-lg w-64 sm:w-72 md:w-96 lg:w-[32rem]">
					<div class="relative w-full h-full">
						<img src={props.image} class="w-full h-full" />
						<div class="absolute bottom-0 left-0 right-0 p-4">
							<h1 class="text-2xl">{props.title}</h1>
						</div>
					</div>
				</div>
			</a>
		</>
	);
}
