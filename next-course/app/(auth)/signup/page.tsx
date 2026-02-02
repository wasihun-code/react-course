// app/layout.tsx

export default function RootLayout({
  children,
  stats
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        {/* Main Content */}
        <div className="w-2/3">
            {children}
        </div>
        
        {/* TODO: 3. Render stats sidebar */}
        <div className="w-1/3 border-l">
            {/* ... */}
            {stats}
        </div>
      </body>
    </html>
  );
}