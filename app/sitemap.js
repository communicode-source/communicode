const sitemap = [
    {
        path: '/',
        priority: 0.8,
        changeFreq: 'daily',
        public: true,
        static: true
    },
    {
        path: '/about',
        changeFreq: 'daily',
        public: true,
        static: true
    },
    {
        path: '/nonprofits',
        priority: 0.7,
        changeFreq: 'daily',
        public: true,
        static: true
    },
    {
        path: '/developers',
        priority: 0.7,
        changeFreq: 'daily',
        public: true,
        static: true
    },
    {
        path: '/feed',
        public: false,
        static: false
    }
];

export default sitemap;
export const baseURL = 'https://communicode.co';
export const paths = sitemap.map((path) => path.path);
export const publicPaths = sitemap.filter((path) => path.public).map((path) => path.path);
export const staticPaths = sitemap.filter((path) => path.static).map((path) => path.path);
export const publicStaticPaths = sitemap.filter((path) => path.public && path.static).map((path) => path.path);
