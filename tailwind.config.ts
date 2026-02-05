import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: '#0b1020',
                panel: '#121a2e',
                muted: '#aab2c8',
                text: '#e6ecff',
                accent: '#76e0c2',
                accent2: '#9fb6ff',
            },
            backgroundImage: {
                'main-gradient': 'linear-gradient(180deg, #0a0f20, #0b1226 35%, #0a0f20)',
            }
        },
    },
    plugins: [],
};
export default config;
