"use client"

import { GraduationCap, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                生命科学科の英語課程ってどんなとこ？
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 hidden sm:block">
                What is Biological Sciences Department English Program like?
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <Link href="/" className="text-sm lg:text-base text-gray-700 hover:text-purple-600 transition-colors">
              ホーム
            </Link>
            <Link href="/advice" className="text-sm lg:text-base text-gray-700 hover:text-purple-600 transition-colors">
              先輩のアドバイス
            </Link>
            <Link
              href="/support"
              className="text-sm lg:text-base text-gray-700 hover:text-purple-600 transition-colors"
            >
              サポート
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href="/advice"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                先輩のアドバイス
              </Link>
              <Link
                href="/support"
                className="text-gray-700 hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                サポート
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
