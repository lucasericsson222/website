// +server.js
import { json } from '@sveltejs/kit';
import { fetchMarkdownPosts } from '$lib';
export const GET = async () => {
    const posts = await fetchMarkdownPosts();

    const sortedPosts = posts.sort((a, b) => {
        return (new Date(b.meta.date)).getMilliseconds() - (new Date(a.meta.date)).getMilliseconds();
    });

    return json(sortedPosts);
};

