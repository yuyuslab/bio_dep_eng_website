export function SiteFooter() {
  return (
    <footer className="bg-gray-800 text-white py-6 lg:py-8 mt-8 lg:mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300 text-sm sm:text-base">
          このサイトは英語課程を履修している学部生が作りました。公式情報は
          <a
            href="https://globalj.biol.se.tmu.ac.jp/"
            className="text-blue-400 underline hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            大学のサイト
          </a>
          をご覧ください。
        </p>
      </div>
    </footer>
  )
}
