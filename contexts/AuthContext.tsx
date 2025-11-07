'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  email: string
  id: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check localStorage for persisted user (only on client side)
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('electricloop_user')
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser))
        } catch (e) {
          // Invalid JSON, clear it
          localStorage.removeItem('electricloop_user')
        }
      }
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, validate credentials
    const mockUser = { email, id: Math.random().toString(36).substr(2, 9) }
    setUser(mockUser)
    if (typeof window !== 'undefined') {
      localStorage.setItem('electricloop_user', JSON.stringify(mockUser))
    }
    return true
  }

  const signup = async (email: string, password: string): Promise<boolean> => {
    // Mock signup
    const mockUser = { email, id: Math.random().toString(36).substr(2, 9) }
    setUser(mockUser)
    if (typeof window !== 'undefined') {
      localStorage.setItem('electricloop_user', JSON.stringify(mockUser))
    }
    return true
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('electricloop_user')
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

