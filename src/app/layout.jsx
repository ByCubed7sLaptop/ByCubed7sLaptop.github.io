import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

const username = "ByCubed7";
const twitterHandle = "@ByCubed7";

const defaultdata = {
    title: {
        template: "%s | BC7",
        default: "Ethan's Website"
    },
    description: "Contains Ethan™ facts",
    author: username,
    keywords: ["Programming", "Game Design", "Art"],
    icon: "fav.ico",

    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    creator: username,
    publisher: username,
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    }
};

const twitterdata = {
    title: defaultdata.title,
    description: defaultdata.description,
    card: "summary_large_image",
    images: ["https://example.com/twitter-image.jpg"],
    creator: twitterHandle
};

export const metadata = {
    ...defaultdata,
    twitter: twitterdata
};

export const viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#24add0"},
        {media: "(prefers-color-scheme: dark)", color: "black"}
    ]
};

import Banner from "../../components/banner2";
import Footer from "../../components/footer";

export default function Layout({children}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/tokyo-night-dark.min.css"
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Banner style={{backgroundColor: "var(--accent)"}}>
                    <a href="./">Home</a>
                    <a href="debug">Debug</a>
                    <a href="blog">Blog</a>
                </Banner>
                {children}
                <Footer />
            </body>
        </html>
    );
}
