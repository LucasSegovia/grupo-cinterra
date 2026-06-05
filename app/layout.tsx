import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Grupo Cinterra S.A. — Ingeniería, infraestructura y desarrollo para el país",
  description:
    "Más de 45 años construyendo infraestructura estratégica. Obras viales, puentes, hormigón elaborado e ingeniería civil en todo el país.",
  keywords: ["infraestructura argentina", "hormigón elaborado", "obras viales", "ingeniería civil", "puentes"],
  openGraph: {
    title: "Grupo Cinterra S.A.",
    description: "Ingeniería, infraestructura y desarrollo para el país.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
