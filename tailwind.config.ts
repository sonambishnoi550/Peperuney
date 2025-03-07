import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "16px",
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1140px",

                },
            },
            // fontFamily: {
            //     'luckiest': "'luckiest guy', sans-serif",
            //     'schoolbell': "'schoolbell', sans-serif",
            // },
            colors: {
                'crimson-red': "#DA291C",
                'green': "#067A52",
                'charcoal-black': "#0E0E0E",
            },
            fontSize: {
                'custom-xl': "22px",
                'custom-2xl': "28px",
                'custom-3xl': "32px",
                'custom-4xl': "40px",
                'custom-5xl': "52px",
                'custom-6xl': "54px",
                'custom-8xl': "80px",
            },
            lineHeight: {
            },
            backgroundImage: {
                'meet-small': "url('./assets/images/webp/meet-small-bg.webp')",

            },
        },
    },
    plugins: [],
} satisfies Config;
