// src/routes/blog/[slug]/+page.ts

export async function load({ params }) {
    const post = await import(`../posts/${params.slug}.md`.replace("\(curry\)","\\(curry\\)"));
    const { title, date } = post.metadata;
    const content = post.default;

    return {
        content,
        title,
        date
    };
}
