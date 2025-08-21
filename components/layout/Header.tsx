'use client'

import { useUser } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { Menu, User,Wheat, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { LanguageSelector } from '@/app/components/ui/LanguageSelector'
import { ThemeSwitcher } from '@/app/components/ui/ThemeSwitcher'
import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'
import { Avatar, AvatarFallback, AvatarImage } from '@/lib/components/ui/avatar'
import { Button } from '@/lib/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/lib/components/ui/dropdown-menu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguageStore()
  const { user, isSignedIn } = useUser()
  const t = translations[language as keyof typeof translations]

  const navItems = [
    { name: t.nav.about, href: '/about' },
    { name: t.nav.careers, href: '/careers' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.reviews, href: '/reviews' },
    { name: t.nav.contact, href: '/contact' },
  ]

  const mobileNavItems = [
    { name: t.nav.about, href: '/about', icon: '🏢' },
    { name: t.nav.careers, href: '/careers', icon: '💼' },
    { name: t.nav.products, href: '/products', icon: '📍' },
    { name: t.nav.services, href: '/services', icon: '⚙️' },
    { name: t.nav.reviews, href: '/reviews', icon: '⭐' },
    { name: t.nav.contact, href: '/contact', icon: '📞' },
  ]


  const ProfileButton = () => {
    if (!isSignedIn) {
      return (
        <a 
          href="/sign-in" 
          title={language === 'de' ? 'Anmelden' : 'Sign In'}
          className="h-8 w-8 rounded-full border border-black hover:border-gray-700 flex items-center justify-center transition-colors"
        >
            <User className="h-4 w-4" />
          </a>
      )
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="h-8 w-8 rounded-full border-2 border-black hover:border-gray-700 flex items-center justify-center transition-colors cursor-pointer overflow-hidden">
            {user?.imageUrl ? (
              <Avatar className="h-7 w-7 rounded-full">
                <AvatarImage src={user.imageUrl} alt={user?.fullName || 'Profile'} className="object-cover" />
                <AvatarFallback className="bg-gray-200 text-gray-700 text-xs">
                {user?.firstName?.charAt(0)?.toUpperCase() || user?.emailAddresses[0]?.emailAddress?.charAt(0)?.toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
            ) : (
              <User className="h-4 w-4" />
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-xl rounded-lg p-2" 
          align="end" 
          forceMount
          sideOffset={8}
        >
          <DropdownMenuLabel className="font-normal p-3 bg-gray-50 dark:bg-gray-700 rounded-md mb-2">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold leading-none text-gray-900 dark:text-gray-100">
                {user?.fullName || 'User'}
              </p>
              <p className="text-xs leading-none text-gray-500 dark:text-gray-400">
                {user?.emailAddresses[0]?.emailAddress}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />
          <DropdownMenuItem asChild className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
            <Link href={`/profile/clerk/${user?.id}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">
              <User className="h-4 w-4" />
              {language === 'de' ? 'Profil' : 'Profile'}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
            <Link href="/reviews/my" className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {language === 'de' ? 'Meine Bewertungen' : 'My Reviews'}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-600" />
          <DropdownMenuItem asChild className="p-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
            <a href="/sign-out" className="flex items-center gap-3 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              {language === 'de' ? 'Abmelden' : 'Sign Out'}
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/50 bg-white/80 text-black backdrop-blur-xl dark:border-neutral-700/50 dark:bg-neutral-900/80 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {}
          <motion.a
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="from-primary-500 to-primary-600 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm">
              <Wheat className="h-6 w-6 text-black dark:text-white" />
            </div>
            <div>
              <span className="font-display from-primary-600 to-primary-800 bg-gradient-to-r bg-clip-text text-xl font-bold text-black dark:text-white">
                Noventa
              </span>
              <p className="-mt-1 text-xs text-neutral-500">
                {language === 'de' ? 'Seit 1928' : 'Since 1928'}
              </p>
            </div>
          </motion.a>

          {}
          <nav className="hidden flex-1 items-center justify-center px-8 md:flex">
            <div className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary-600 group relative px-1 py-2 text-sm font-medium text-neutral-600 transition-all duration-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="font-medium">{item.name}</span>
                  <motion.span className="bg-primary-600 absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </nav>

          {}
          <div className="flex items-center gap-1">
            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ThemeSwitcher />
              <div className="-mx-1">
              <LanguageSelector />
              </div>
              <div className="ml-2">
              <ProfileButton />
              </div>
            </motion.div>

            {}
            <motion.button
              className="hover:text-primary-600 p-2 text-neutral-600 transition-colors md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {}
        {isMenuOpen && (
          <motion.div
            className="border-t border-neutral-200 py-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {}
            {isSignedIn && (
              <motion.div
                className="mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg mb-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.imageUrl} alt={user?.fullName || 'Profile'} />
                    <AvatarFallback className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm">
                      {user?.firstName?.charAt(0)?.toUpperCase() || user?.emailAddresses[0]?.emailAddress?.charAt(0)?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {user?.fullName || 'User'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user?.emailAddresses[0]?.emailAddress}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 text-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <Link href={`/profile/clerk/${user?.id}`} className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      {language === 'de' ? 'Profil' : 'Profile'}
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 text-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <Link href="/reviews/my" className="flex items-center gap-2">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      {language === 'de' ? 'Bewertungen' : 'Reviews'}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )}

            <nav className="flex flex-wrap justify-end gap-2">
              {mobileNavItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary-600 hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/20 dark:hover:to-primary-800/20 group relative flex items-center gap-2 overflow-hidden rounded-lg px-3 py-2 text-sm text-neutral-600 transition-all duration-300 hover:bg-gradient-to-r"
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {}
                  <motion.div
                    className="from-primary-500/10 to-primary-600/10 absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {}
                  <motion.span
                    className="relative z-10 text-base"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {item.icon}
                  </motion.span>

                  {}
                  <motion.span
                    className="relative z-10 font-medium"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>

                  {}
                  <motion.div
                    className="bg-primary-500/20 absolute inset-0 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
