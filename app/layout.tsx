import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"COOP-ALPHA | Digital Infrastructure for Stronger Cooperatives",description:"Scalable cooperative management and agricultural intelligence platform for Cameroon."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
