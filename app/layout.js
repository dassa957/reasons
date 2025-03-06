import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import '@styles/globals.css';

// Enhanced metadata for SEO tailored to "Reasons Podcast"
export const metadata = {
  title: "Reasons Podcast - Sri Lanka's Formula 1 Insights",
  description: "Reasons Podcast brings you the latest Formula 1 news, race analysis, and expert insights from a Sri Lankan perspective. Tune in for F1 updates and more!",
  keywords: "Reasons Podcast, Formula 1 Sri Lanka, F1 podcast, motorsport news, Sri Lankan F1, racing analysis, sinhala podcast, podcast, sri lankan podcast, f1, f1 news, cars, f1 sinhala, f1srilanka",
  authors: [{ name: "Reasons Podcast Team" }],
  openGraph: {
    title: "Reasons Podcast - Sri Lanka's Formula 1 Insights",
    description: "Explore Formula 1 with Sri Lanka's Reasons Podcast – your source for race recaps, driver updates, and local F1 perspectives.",
    url: "https://www.reasonspodcast.com", // Replace with your actual domain
    siteName: "Reasons Podcast",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reasons Podcast - Sri Lanka's F1 Podcast",
    description: "Get Formula 1 news and insights from Sri Lanka with Reasons Podcast.",
    creator: "@ReasonsPodcast", // Replace with your actual Twitter handle
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Base SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Reasons Podcast Team" />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content={metadata.viewport} />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />

        {/* Favicon - Replace with your actual favicon path */}
        <link rel="icon" href="/assets/images/logo.jpg" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}