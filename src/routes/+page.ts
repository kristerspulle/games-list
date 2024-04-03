import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const gamesResponse = await fetch('https://storage.googleapis.com/estoty-temp/games.json');
	const games = await gamesResponse.json();

	const retentionResponse = await fetch(
		'https://storage.googleapis.com/estoty-temp/retention.json'
	);
	const retention = await retentionResponse.json();
	return { games, retention };
}) satisfies PageLoad;
