import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <SiteHeader />

      <main className="container mx-auto px-4 py-6 lg:py-8">
        {/* Hero Section with Poster */}
        <section className="mb-8 lg:mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  生命科学科の英語課程ってどんなとこ？
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  英語課程って、生物の授業を英語で受けるのは分かるけど、実際どんな風に学んでいるんだろう？先輩たちに聞いてみたいなという皆さん...ということで英語課程の授業を履修している学部生がみんなで意見を出し合いました！
                </p>
                <div className="flex flex-wrap gap-2"></div>
              </div>
              <div className="flex justify-center order-1 lg:order-2">
                <Image
                  src="/seimei-eng.png"
                  alt="生命科学科英語課程ポスター"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-md max-w-full h-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Course Overview */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <span className="bg-green-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-lg font-bold">
              1
            </span>
            <span className="leading-tight">英語課程の授業をとろうと思った理由は？</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <Card className="border-green-200">
              <CardHeader className="bg-green-50 p-4">
                <CardTitle className="text-green-800 text-base sm:text-lg">言語</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 英語力を伸ばしたいと思ったから！英語で学ぶのがかっこいいと思ったから。</li>
                  <li>• 英語に日常的に触れたかったから。</li>
                  <li>• 中高に帰国生の子が沢山いて英語を流暢に使えるのがかっこいいなと思っていたから。</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50 p-4">
                <CardTitle className="text-green-800 text-base sm:text-lg">留学・将来</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 留学に興味があり困らないように。</li>
                  <li>• 留学を考えていて英語の授業に慣れておきたかったから。</li>
                  <li>• 留学に役立ちそうだと思ったから。</li>
                  <li>• 理系で英語に強くなると将来有利になると思った。</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 sm:col-span-2 lg:col-span-1">
              <CardHeader className="bg-green-50 p-4">
                <CardTitle className="text-green-800 text-base sm:text-lg">研究</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>
                    •
                    生物を研究するなら最終的には論文を英語で読んだり発表を英語でする必要があると知り、生物の専門的な用語を早い段階から学びたいと考えたから。
                  </li>
                  <li>• 研究室で英語論文をたくさん読むと聞いて、今のうちに力をつけたいと思いました。</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Benefits */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <span className="bg-emerald-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            <span className="leading-tight">英語課程の授業をとってみて分かったメリットは？</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50 p-4">
                <CardTitle className="text-emerald-800 flex items-center gap-2 text-base sm:text-lg">言語</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 英語に慣れる。英語で理解するのが普通になる。</li>
                  <li>• 単純に英語力の向上にもなるし、すべてが英語の授業は新鮮で楽しかった。</li>
                  <li>• 実験レポートも英語で書いたが、先生方がお忙しい中添削してくださいます。</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50 p-4">
                <CardTitle className="text-emerald-800 text-base sm:text-lg">学習方法</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 少人数だから質問しやすい。先生との距離が近い。</li>
                  <li>• 日本語ではない分、授業の予習を沢山したり友達と議論しながら課題を進めた。</li>
                  <li>
                    •
                    英語課程の授業は人数が少なく、発言したりディスカッションしたり、能動的に学べる授業が多かったように感じる。
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 sm:col-span-2 lg:col-span-1">
              <CardHeader className="bg-emerald-50 p-4">
                <CardTitle className="text-emerald-800 text-base sm:text-lg">専門性</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 専門用語を最初から英語で覚えることができるので、その後の授業でも役に立つ。</li>
                  <li>• 日本語課程では英訳まで扱わないことが多いため、周りと差がつく。</li>
                  <li>• 英語にしかない表現や聞き慣れない英語の専門用語に早いうちから触れることができること。</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Challenges */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <span className="bg-orange-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-lg font-bold">
              3
            </span>
            <span className="leading-tight">英語課程の授業をとってみて分かったデメリットは？</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50 p-4">
                <CardTitle className="text-orange-800 flex items-center gap-2 text-base sm:text-lg">言語</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>
                    • 授業、課題、試験の全てが英語なので、自分の英語力によっては内容をいくらか取りこぼすことがある。
                  </li>
                  <li>• 資料が英語で勉強が大変だった。</li>
                  <li>• [逆に]日本語でなんて言うのかわからない単語がある。</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50 p-4">
                <CardTitle className="text-orange-800 text-base sm:text-lg">学習方法</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 英語が苦手だったため、予習や課題にかける時間が人一倍長かった気がします。</li>
                  <li>
                    •
                    実験の班分けで人数が少数になりやすく（英語課程が3人だけなどの場合）データ分析の一人当たりの役割負担が日本語課程より大きくなります。
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 sm:col-span-2 lg:col-span-1">
              <CardHeader className="bg-orange-50 p-4">
                <CardTitle className="text-orange-800 text-base sm:text-lg">その他</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 日本語課程の授業に比べて先生が教える生物の情報量は少ないと思います。</li>
                  <li>• 自力で確認し直したり先生に質問したりする勇気が必要。</li>
                  <li>• 先生が一緒でも日本語課程と内容が違うこともあるから日本語課程とテスト対策ができない。</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Balance with Other Studies */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <span className="bg-purple-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-base sm:text-lg font-bold">
              4
            </span>
            <span className="leading-tight">副専攻や資格取得との両立は？</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50 p-4">
                <CardTitle className="text-purple-800 text-base sm:text-lg">教職</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>
                    •
                    1〜2年時に履修する教職の授業は主に5〜6限なので生物の授業を1〜4限に受けて5〜6限に教職、つまり2年生までは１日に3〜5コマ受けるという形になると思います。
                  </li>
                  <li>• 教職との両立は特に問題なく可能です。</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50 p-4">
                <CardTitle className="text-purple-800 text-base sm:text-lg">人間健康科学</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 副専攻の専門授業は夏季集中が多いから、夏休みにたくさん受けて単位を取る。</li>
                  <li>
                    •
                    特別研究は3年で、それ以外の履修しなければならない授業は1、2年にとりましたが、特に大変ということは感じなかったです。
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50 p-4">
                <CardTitle className="text-purple-800 text-base sm:text-lg">学芸員</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 日本語課程で両立するのと同じウェイトだと感じてます。</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50 p-4">
                <CardTitle className="text-purple-800 text-base sm:text-lg">文理融合プログラム</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li>• 体育会部活と文理教養プログラムを修了して可能だったのでいけるかなと思います。</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
