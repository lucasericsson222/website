// place files you want to import through the `$lib` alias in this folder.
export const fetchMarkdownPosts = async () => {
    const postFiles = import.meta.glob('/src/routes/\\(sub\\)/blog/posts/*.md');
    const iterPostFiles = Object.entries(postFiles);
    const posts = await Promise.all(
        iterPostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);

            return {
                meta: metadata,
                path: postPath
            };
        })
    );

    return posts;
}
