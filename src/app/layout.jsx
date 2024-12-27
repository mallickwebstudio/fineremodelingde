import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import localFont from "next/font/local";
import Script from 'next/script';

// Rubik font configuration
const rubik = localFont({
    src: "./fonts/Rubik-VariableFont_wght.ttf",
    variable: "--rubik",
    weight: "300 400 500 600 700 800 900",
    display: "swap",
});

// Roboto font configuration with all weights and styles
// const roboto = localFont({
//     src: [
//         { path: "./fonts/roboto/Roboto-Thin.ttf", weight: "100", style: "normal" },
//         { path: "./fonts/roboto/Roboto-ThinItalic.ttf", weight: "100", style: "italic" },
//         { path: "./fonts/roboto/Roboto-Light.ttf", weight: "300", style: "normal" },
//         { path: "./fonts/roboto/Roboto-LightItalic.ttf", weight: "300", style: "italic" },
//         { path: "./fonts/roboto/Roboto-Regular.ttf", weight: "400", style: "normal" },
//         { path: "./fonts/roboto/Roboto-Italic.ttf", weight: "400", style: "italic" },
//         { path: "./fonts/roboto/Roboto-Medium.ttf", weight: "500", style: "normal" },
//         { path: "./fonts/roboto/Roboto-MediumItalic.ttf", weight: "500", style: "italic" },
//         { path: "./fonts/roboto/Roboto-Bold.ttf", weight: "700", style: "normal" },
//         { path: "./fonts/roboto/Roboto-BoldItalic.ttf", weight: "700", style: "italic" },
//         { path: "./fonts/roboto/Roboto-Black.ttf", weight: "900", style: "normal" },
//         { path: "./fonts/roboto/Roboto-BlackItalic.ttf", weight: "900", style: "italic" },
//     ],
//     variable: "--roboto",
//     display: "swap",
// });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${rubik.className} ${rubik.variable} flex flex-col min-h-screen`}
                suppressHydrationWarning="true"
                suppressContentEditableWarning="true"
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
