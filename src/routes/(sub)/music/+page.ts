// src/routes/blog/+page.js 

export const load = async ({fetch}) => {
    const response = await fetch(`/api/music`);
    const imgpaths = await response.json();

    return {
        imgpaths 
    };
};

