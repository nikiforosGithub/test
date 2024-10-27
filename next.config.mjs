/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // If you're deploying to GitHub Pages:
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    trailingSlash: true,
}

export default  nextConfig