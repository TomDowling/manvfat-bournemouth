import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Man v Fat Bournemouth",
    description: "all the fixtures, teams and players for the Bournemouth league"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
