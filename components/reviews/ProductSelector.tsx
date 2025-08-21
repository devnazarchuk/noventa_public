'use client'

import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { Button } from '@/lib/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/lib/components/ui/dialog'

interface Product {
  _id: string
  name: string
  category: string
  imageUrl?: string
  price?: number
}

interface ProductSelectorProps {
  products: Product[]
  selectedProductId: string
  onProductSelect: (productId: string) => void
  isLoading?: boolean
}

const ProductSelector = ({ products, selectedProductId, onProductSelect, isLoading = false }: ProductSelectorProps) => {
  const { language } = useLanguageStore()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  const pageSize = 8

  const translations = {
    de: {
      selectProduct: 'Produkt auswählen',
      searchProducts: 'Produkte durchsuchen...',
      browse: 'Alle Produkte',
      change: 'Ändern',
      clear: 'Zurücksetzen',
      allCategories: 'Alle Kategorien',
      brot: 'Brot',
      broetchen: 'Brötchen',
      fruehstuecksgebaeck: 'Frühstücksgebäck',
      feingebaeck: 'Feingebäck',
      snack: 'Snack',
      noProducts: 'Keine Produkte gefunden',
      loading: 'Produkte werden geladen...',
      select: 'Auswählen',
      selected: 'Ausgewählt'
    },
    en: {
      selectProduct: 'Select Product',
      searchProducts: 'Search products...',
      browse: 'Browse All',
      change: 'Change',
      clear: 'Clear',
      allCategories: 'All Categories',
      brot: 'Bread',
      broetchen: 'Rolls',
      fruehstuecksgebaeck: 'Breakfast Pastries',
      feingebaeck: 'Fine Pastries',
      snack: 'Snack',
      noProducts: 'No products found',
      loading: 'Loading products...',
      select: 'Select',
      selected: 'Selected'
    }
  }

  const t = translations[language]


  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))]


  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })


  const suggestions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [] as Product[]
    return products
      .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 8)
  }, [products, searchQuery])

  const getCategoryName = (category: string) => {
    const categoryMap: Record<string, string> = {
      brot: t.brot,
      broetchen: t.broetchen,
      fruehstuecksgebaeck: t.fruehstuecksgebaeck,
      feingebaeck: t.feingebaeck,
      snack: t.snack
    }
    return categoryMap[category] || category
  }

  const selectedProduct = useMemo(() => products.find(p => p._id === selectedProductId), [products, selectedProductId])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize))
  const pageItems = filteredProducts.slice(page * pageSize, (page + 1) * pageSize)

  const handleSelect = (id: string) => {
    onProductSelect(id)
    setOpen(false)
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{t.selectProduct}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 dark:bg-gray-700 h-32 rounded-lg mb-2"></div>
              <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-3/4 mb-1"></div>
              <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{t.selectProduct}</h3>
        <div className="flex items-center gap-2">
          {selectedProduct && (
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
              {t.change}
            </Button>
          )}
          <Button size="sm" onClick={() => setOpen(true)}>
            {t.browse}
          </Button>
        </div>
      </div>

      {}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder={t.searchProducts}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchQuery && (
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" onClick={() => setSearchQuery('')}>
            <X className="h-4 w-4" />
          </button>
        )}
        {suggestions.length > 0 && (
          <div className="absolute z-10 mt-2 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
            {suggestions.map(p => (
              <button
                key={p._id}
                className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-left"
                onClick={() => handleSelect(p._id)}
              >
                <div className="relative h-10 w-10 rounded overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  {p.imageUrl ? (
                    <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
                  ) : (
                    <span className="text-gray-400">🍞</span>
                  )}
                </div>
                <span className="truncate text-sm">{p.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {}
      {selectedProduct && (
        <div className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-800">
          <div className="relative h-14 w-14 rounded overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            {selectedProduct.imageUrl ? (
              <Image src={selectedProduct.imageUrl} alt={selectedProduct.name} fill className="object-cover" />
            ) : (
              <span className="text-gray-400">🍞</span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium truncate">{selectedProduct.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{getCategoryName(selectedProduct.category)}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onProductSelect('')}>
            {t.clear}
          </Button>
        </div>
      )}

      {}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0">
          <div className="flex h-[85vh] flex-col">
            {}
            <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b">
              <div className="p-4 space-y-3">
                <DialogHeader>
                  <DialogTitle>{t.selectProduct}</DialogTitle>
                </DialogHeader>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder={t.searchProducts}
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setPage(0) }}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
                      onClick={() => { setSelectedCategory(category); setPage(0) }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category === 'all' ? t.allCategories : getCategoryName(category)}
          </button>
        ))}
                </div>
              </div>
      </div>

            {}
            <div className="flex-1 overflow-auto p-4 pb-20">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">{t.noProducts}</div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {pageItems.map((product) => (
                    <div
                    key={product._id}
                      className="cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700 p-3 hover:shadow-md transition-shadow"
                      onClick={() => handleSelect(product._id)}
                    >
                      <div className="aspect-square relative mb-2">
                        <Image
                          src={product.imageUrl || '/images/placeholder.jpg'}
                          alt={product.name}
                          fill
                          className="object-cover rounded-md"
                        />
                        </div>
                      <h5 className="font-medium text-gray-900 dark:text-gray-100 text-sm truncate">{product.name}</h5>
                    </div>
                ))}
              </div>
              )}
            </div>

            {}
            {totalPages > 1 && (
              <div className="mt-auto bg-white dark:bg-gray-900 border-t p-3 flex items-center justify-center gap-3">
                  <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  disabled={page === 0}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                  {page + 1} / {totalPages}
                  </span>
                  <button
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  disabled={page >= totalPages - 1}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
                        </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductSelector 