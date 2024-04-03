import type { PageLoad } from "./$types";

export const load = (async () => {
    const response = await fetch('https://storage.googleapis.com/estoty-temp/games.json')
    const data = await response.json()
    return data;
}) satisfies PageLoad;