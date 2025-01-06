import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <header className="p-4 bg-white shadow-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            Rhino & Grasshopper Weekly
          </Link>
          <ul className="flex space-x-4">
            <li>cd 
              <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} Rhino & Grasshopper Weekly. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

