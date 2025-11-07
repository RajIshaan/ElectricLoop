'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'

interface EwasteItem {
  id: string
  title: string
  description: string
  price: number
  aiValue: number
  category: string
  condition: string
  seller_email: string
  created_at: string
}

export default function Dashboard() {
  const router = useRouter()
  const { user } = useAuth()
  const [items, setItems] = useState<EwasteItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }
    loadUserItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const loadUserItems = async () => {
    await new Promise(resolve => setTimeout(resolve, 500))
    // Mock user's items
    setItems([
      {
        id: '1',
        title: 'Used Laptop - Dell Inspiron',
        description: 'Dell Inspiron laptop in good condition.',
        price: 150,
        aiValue: 145,
        category: 'Laptops',
        condition: 'Good',
        seller_email: user?.email || '',
        created_at: new Date().toISOString(),
      },
    ])
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">Dashboard</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">{items.length}</div>
            <div className="text-gray-600 text-sm">Active Listings</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">$0</div>
            <div className="text-gray-600 text-sm">Total Earnings</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">0</div>
            <div className="text-gray-600 text-sm">Items Sold</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">0</div>
            <div className="text-gray-600 text-sm">Items Recycled</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <Link href="/shop">
              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors">
                List New Item
              </button>
            </Link>
            <Link href="/shop">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                Browse Marketplace
              </button>
            </Link>
          </div>
        </div>

        {/* My Listings */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">My Listings</h2>
          </div>
          <div className="p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">You haven't listed any items yet.</p>
                <Link href="/shop">
                  <button className="px-6 py-3 bg-primary text-white rounded hover:bg-blue-600 transition-colors">
                    List Your First Item
                  </button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-500">Category: {item.category}</span>
                          <span className="text-sm text-gray-500">Condition: {item.condition}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${item.price}</div>
                        <div className="text-sm text-gray-500">AI Value: ${item.aiValue}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

