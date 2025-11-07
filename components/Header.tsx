'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            ElectricLoop
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors text-sm">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors text-sm">
              About
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-primary transition-colors text-sm">
              Our Team
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors text-sm">
              Contact
            </Link>
            {user ? (
              <>
                <Link href="/shop" className="text-gray-700 hover:text-primary transition-colors text-sm">
                  Marketplace
                </Link>
                <Link href="/dashboard" className="text-gray-700 hover:text-primary transition-colors text-sm">
                  Dashboard
                </Link>
                <span className="text-gray-600 text-sm">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-blue-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-primary transition-colors text-sm">
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-blue-600 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

