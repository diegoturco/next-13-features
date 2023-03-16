export const metadata = {
  title: "Next.js 13.2",
  description: "Metadata, Route Handlers, and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
