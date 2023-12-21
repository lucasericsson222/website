// +server.js
import { json } from '@sveltejs/kit';
import { fetchMusicImg } from '$lib';
export const GET = async () => {
    const objs = await fetchMusicImg();
    const paths = objs.map((value) => value.path); 
    return json(paths);
};


