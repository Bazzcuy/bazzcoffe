'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { ProductCard } from '@/components/product-card'
import { ShoppingCart, Plus, Minus, X } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const menuItems = [
  // Coffee
  {
    id: '1',
    name: 'Espresso',
    description: 'Rich and bold single shot of premium coffee',
    price: 25000,
    image: '/images/espresso.jpg',
    category: 'Coffee',
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Creamy cappuccino with perfect latte art',
    price: 35000,
    image: '/images/cappuccino.jpg',
    category: 'Coffee',
  },
  {
    id: '3',
    name: 'Iced Coffee',
    description: 'Traditional Indonesian iced coffee with condensed milk',
    price: 28000,
    image: '/images/iced-coffee.jpg',
    category: 'Coffee',
  },
  // Pastry
  {
    id: '4',
    name: 'Croissant',
    description: 'Fresh baked French-style croissant',
    price: 28000,
    image: '/images/croissant.jpg',
    category: 'Pastry',
  },
  // Dessert
  {
    id: '5',
    name: 'Tiramisu',
    description: 'Decadent tiramisu cake with coffee layers',
    price: 38000,
    image: '/images/tiramisu.jpg',
    category: 'Dessert',
  },
]

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const categories = ['All', 'Coffee', 'Pastry', 'Dessert']

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  const addToCart = (item: typeof menuItems[0]) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.id === item.id)
      if (existing) {
        return prev.map(ci =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        )
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(ci => ci.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
    } else {
      setCartItems(prev =>
        prev.map(ci => ci.id === id ? { ...ci, quantity } : ci)
      )
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + tax

  if (typeof window !== 'undefined' && !isMounted) {
    setIsMounted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Page Header */}
      <section className="bg-card border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Daftar Menu"
            subtitle="Nikmati kreasi terbaik kami dari bahan-bahan berkualitas"
            centered
          />
        </div>
      </section>

      {/* Menu Filter Section */}
      <section className="sticky top-16 md:top-20 z-30 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="relative rounded-full gap-2"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Keranjang</span>
            {isMounted && cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold">
                {cartItems.length}
              </span>
            )}
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map(item => (
              <ProductCard
                key={item.id}
                {...item}
                onAddToCart={() => addToCart(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Sheet */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
          <SheetHeader className="p-6 border-b">
            <SheetTitle className="font-serif text-2xl flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-accent" />
              Keranjang Belanja
            </SheetTitle>
          </SheetHeader>

          <ScrollArea className="flex-1 p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-10 h-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Keranjang Kosong</h3>
                  <p className="text-muted-foreground">Yuk, pilih menu favoritmu!</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="group relative flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all">
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive p-1 rounded-md transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-accent font-bold">
                          Rp {item.price.toLocaleString('id-ID')}
                        </span>
                        <div className="flex items-center gap-3 bg-muted rounded-lg p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-md"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-md"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          {cartItems.length > 0 && (
            <SheetFooter className="p-6 border-t bg-card/50">
              <div className="w-full space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Pajak (10%)</span>
                    <span>Rp {tax.toLocaleString('id-ID')}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-lg">Total Akhir</span>
                    <span className="font-serif text-3xl font-black text-accent">
                      Rp {total.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
                <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]">
                  Bayar Sekarang
                </Button>
              </div>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>

      {/* Floating Cart Button (Desktop only if visible) */}
      <Button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-10 right-10 w-16 h-16 rounded-full shadow-2xl z-40 bg-accent hover:bg-accent/90"
        size="icon"
      >
        <ShoppingCart className="w-8 h-8 text-white" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 border-4 border-background rounded-full flex items-center justify-center text-xs font-black shadow-lg">
            {cartItems.length}
          </span>
        )}
      </Button>

      <Footer />
    </div>
  )
}
