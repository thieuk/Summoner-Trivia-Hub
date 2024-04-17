import './globals.css'
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'Summoner Trivia Hub',
  description: 'Test your knowledge of the League of Legends universe and Legend of Runeterra. Take challenging quizzes on champions and cards. Prove your expertise in both LoL and LoR with our interactive quizzes.',
  icons: {
    icon: 'logo.png', 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
