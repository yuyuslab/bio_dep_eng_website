import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Quote, User, BookOpen, Globe, Lightbulb, Target, Heart } from "lucide-react"

export default function AdvicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <SiteHeader />

      <main className="container mx-auto px-4 py-6 lg:py-8">
        {/* Hero Section */}
        <section className="mb-8 lg:mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">先輩たちからのアドバイス</h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              英語課程を実際に経験した私たちからのアドバイスとメッセージをお届けします
            </p>
            <div className="flex justify-center">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500" />
            </div>
          </div>
        </section>

        {/* まずは挑戦してみよう！ */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
            <span>まずは挑戦してみよう！</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-orange-800 text-base sm:text-lg">S.さん</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base">
                  「自分を信じて決めてください！」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                    自信を持って
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-orange-800 text-base sm:text-lg">C.さん</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base">
                  「やってみてから決めよう！」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                    実体験重視
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-orange-800 text-base sm:text-lg">M.さん</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base">
                  「取るのは自由だしあまり深く考えずお試しでとってみたらいいと思う！」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                    気軽にお試し
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-orange-800 text-base sm:text-lg">H.さん</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base">
                  「試しに一つか二つだけ取ってみて数を増やしていけば余裕です。」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                    段階的に増加
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 柔軟な履修スタイル */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            <span>柔軟な履修スタイル</span>
          </h2>
          <div className="grid gap-4 lg:gap-6">
            <Card className="border-green-200">
              <CardHeader className="bg-green-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-green-800 text-base sm:text-lg">S.さん</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base leading-relaxed">
                  「英語課程では日本語の授業と組み合わせて生物の授業を履修することが可能です。わからないところは授業後に先生方に質問に行けば日本語で補足してくださいますし、学期に応じて日:英の授業の割合を変えることもできます。また、最初は辛くても後から必ず生かすことができる知識ばかりです。英語で履修できる貴重な機会なのでいい意味で軽い気持ちで履修しても良いかと思います。勉強は友人とも助け合うので交友関係も広がると思います。」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    日英組み合わせ可能
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    先生のサポート
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    友人との協力
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-green-800 text-base sm:text-lg">Y.さん</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base">
                  「いつでも日本語に変えれるからまずは英語にチャレンジしてみるといい」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    変更可能
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    チャレンジ精神
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 将来への投資 */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            <span>将来への投資</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-800 text-base sm:text-lg">A.さん</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base leading-relaxed">
                  「英語課程の授業を受けることで、英語で話す・聞くということに対する抵抗が薄れ、その後の研究生活でもその経験が役に立つ場面は多くあります。特別英語が得意でなくても単位修得できると思いますので、是非挑戦してみてください！」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                    英語への抵抗軽減
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                    研究生活に活用
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-blue-800 text-base sm:text-lg">Y.さん</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base leading-relaxed">
                  「将来研究をする上で英語は絶対に必須なので、早いうちから生物を英語で学ぶことは大切だと思います。特に、日常会話はできても専門用語は中々普段触れる機会がないので慣れておくとよいと思います。英語が苦手だとしても、勇気を出して履修すれば、否が応でも英語で学ぶしかないので、少なからず英語は上達すると思います。」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                    研究に必須
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                    専門用語習得
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                    英語上達
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 国際的な交流 */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
            <span>国際的な交流</span>
          </h2>
          <div className="grid gap-4 lg:gap-6">
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-purple-800 text-base sm:text-lg">M.さん</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <blockquote className="text-gray-700 italic mb-4 text-sm sm:text-base leading-relaxed">
                  「日本語の授業と英語の授業を半々にしたり、一つだけ英語で取ってみるだけでもいいので、挑戦する機会を失わずまずは挑戦してみてほしいです。その後に、合う合わないを考えてみてもいいんじゃないでしょうか。今後英語論文を読むときに報われます笑　さらに、他国出身のお友達もできる機会が増えますのでより幅広い価値観を知ることができると思います。私は英語課程と部活動で知り合った外国人のお友達とたくさん遊びに行ってお話をして、純粋にすごく楽しかったです。今は国を跨いでクリスマスプレゼント交換をする仲です。」
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                    英語論文読解
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                    国際的友人
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                    文化交流
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 先輩からの共通メッセージ */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
            <span>先輩からの共通メッセージ</span>
          </h2>
          <div className="space-y-4 lg:space-y-6">
            <Card className="border-pink-200">
              <CardHeader className="bg-pink-50 p-4">
                <CardTitle className="text-pink-800 flex items-center gap-2 text-base sm:text-lg">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
                  みんなが伝えたいこと
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 p-4">
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">💪 「とりあえず」の精神</h4>
                    <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                      「とりあえず受けてみて、英語でとるか考える」「まずは挑戦してみて、その後に合う合わないを考える」という声が多数。完璧を求めず、まずは一歩踏み出すことが大切です。
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">🤝 充実したサポート</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      日本語での補足説明、先生への質問、友人との協力など、サポート体制が整っているので安心して挑戦できます。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">🌱 必ず役立つ経験</h4>
                    <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                      「最初は辛くても後から必ず生かすことができる」「今後英語論文を読むときに報われる」など、将来への確実な投資になります。
                    </p>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">🌍 広がる世界</h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      国際的な友人関係、幅広い価値観との出会い、文化交流など、学習以外の豊かな経験も得られます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
