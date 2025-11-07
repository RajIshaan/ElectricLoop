'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
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

export default function Shop() {
  const router = useRouter()
  const { user } = useAuth()
  const [items, setItems] = useState<EwasteItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    condition: '',
  })
  const [aiEstimating, setAiEstimating] = useState(false)
  const [aiEstimate, setAiEstimate] = useState<number | null>(null)

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }
    loadItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const loadItems = async () => {
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Mock data with AI values
    setItems([
      {
        id: '1',
        title: 'Used Laptop - Dell Inspiron',
        description: 'Dell Inspiron laptop in good condition. Battery needs replacement.',
        price: 150,
        aiValue: 145,
        category: 'Laptops',
        condition: 'Good',
        seller_email: 'seller@example.com',
        created_at: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Old Smartphone Collection',
        description: 'Collection of 5 old smartphones. Some working, some for parts.',
        price: 75,
        aiValue: 80,
        category: 'Smartphones',
        condition: 'Fair',
        seller_email: 'seller2@example.com',
        created_at: new Date().toISOString(),
      },
      {
        id: '3',
        title: 'Vintage CRT Monitor',
        description: 'Old CRT monitor, working condition. Great for retro setups.',
        price: 45,
        aiValue: 50,
        category: 'Monitors',
        condition: 'Good',
        seller_email: 'seller3@example.com',
        created_at: new Date().toISOString(),
      },
      {
        id: '4',
        title: 'Mechanical Keyboard Set',
        description: 'Set of 3 mechanical keyboards, various switches. All functional.',
        price: 120,
        aiValue: 125,
        category: 'Keyboards',
        condition: 'Excellent',
        seller_email: 'seller4@example.com',
        created_at: new Date().toISOString(),
      },
    ])
    setLoading(false)
  }

  const handleGetAIEstimate = async () => {
    if (!formData.title || !formData.category || !formData.condition) {
      alert('Please fill in title, category, and condition for AI estimation')
      return
    }
    setAiEstimating(true)
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    // Mock AI estimate based on category and condition
    const basePrices: { [key: string]: number } = {
      'Laptops': 200,
      'Smartphones': 100,
      'Tablets': 80,
      'Monitors': 60,
      'Keyboards': 50,
      'Mice': 20,
      'Other': 40
    }
    const conditionMultipliers: { [key: string]: number } = {
      'Excellent': 1.2,
      'Good': 1.0,
      'Fair': 0.7,
      'Poor': 0.4,
      'For Parts': 0.2
    }
    const estimate = Math.round((basePrices[formData.category] || 50) * (conditionMultipliers[formData.condition] || 0.5))
    setAiEstimate(estimate)
    setFormData({ ...formData, price: estimate.toString() })
    setAiEstimating(false)
  }

  const handleSubmitListing = async (e: React.FormEvent) => {
    e.preventDefault()
    const newItem: EwasteItem = {
      id: Math.random().toString(36).substr(2, 9),
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      aiValue: aiEstimate || parseFloat(formData.price),
      category: formData.category,
      condition: formData.condition,
      seller_email: user?.email || '',
      created_at: new Date().toISOString(),
    }
    
    setItems([newItem, ...items])
    setShowForm(false)
    setFormData({
      title: '',
      description: '',
      price: '',
      category: '',
      condition: '',
    })
    setAiEstimate(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">E-Waste Marketplace</h1>
            <p className="text-gray-600">Buy and sell electronic waste with AI-powered valuation</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 text-sm font-medium text-white bg-accent rounded hover:bg-green-600 transition-colors"
          >
            {showForm ? 'Cancel' : 'Sell E-Waste'}
          </button>
        </div>

        {/* Sell Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">List Your E-Waste</h2>
            <form onSubmit={handleSubmitListing} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="">Select category</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Smartphones">Smartphones</option>
                    <option value="Tablets">Tablets</option>
                    <option value="Monitors">Monitors</option>
                    <option value="Keyboards">Keyboards</option>
                    <option value="Mice">Mice</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Condition
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  >
                    <option value="">Select condition</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                    <option value="For Parts">For Parts</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={handleGetAIEstimate}
                    disabled={aiEstimating || !formData.title || !formData.category || !formData.condition}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                  >
                    {aiEstimating ? 'Analyzing...' : 'AI Estimate'}
                  </button>
                </div>
                {aiEstimate && (
                  <p className="text-sm text-purple-600 mt-1">
                    AI Estimated Value: ${aiEstimate}
                  </p>
                )}
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
                >
                  List Item
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setAiEstimate(null)
                  }}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="p-4">
                <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      ${item.price}
                    </span>
                    {item.aiValue && (
                      <p className="text-xs text-purple-600 mt-1">
                        AI Value: ${item.aiValue}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {item.condition}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  <span className="font-medium">Category:</span> {item.category}
                </div>
                <button className="w-full py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {items.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items listed yet. Be the first to sell!</p>
          </div>
        )}
      </main>
    </div>
  )
}
