import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FileText, Award, Users, BookOpen, Plane, CheckCircle, DollarSign, Clock, Globe } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <SiteHeader />

      <main className="container mx-auto px-4 py-6 lg:py-8">
        {/* Hero Section */}
        <section className="mb-8 lg:mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              英語課程で得られるサポート
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              英語課程には学習をサポートする充実した制度とサービスがあります！
            </p>
            <div className="flex justify-center">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
            </div>
          </div>
        </section>

        {/* Grammarly サポート */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
            <span className="leading-tight">Grammarly 有料プランを無料で使いたい放題</span>
          </h2>
          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50 p-4">
              <CardTitle className="text-blue-800 flex items-center gap-2 text-base sm:text-lg">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                英語ライティングの強力なサポートツール
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 lg:pt-6 lg:p-6">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">📝 Grammarlyとは？</h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                    文章の添削に特化したアプリで、文法や文章構造の明確さなどをアドバイスしてくれる便利な機能があります。
                  </p>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">💡 使用頻度</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">レポート提出前には必ずと言っていいほど使います！</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">📈 学習効果</h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                    添削していくたびに自分の英語も上達します。継続的に使うと、英語のライティングスキルも向上します！
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                      文法チェック
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                      文章構造改善
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                      無料利用
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* IELTS 受験料支援 */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            <span className="leading-tight">IELTS の受験料全額支援（毎年1回）</span>
          </h2>
          <Card className="border-green-200">
            <CardHeader className="bg-green-50 p-4">
              <CardTitle className="text-green-800 flex items-center gap-2 text-base sm:text-lg">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                3万円の受験料を全額サポート
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 lg:pt-6 lg:p-6">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">💰 費用について</h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                    IELTS は1回の受験で3万円ほどかかりますが、英語課程では毎年1回、この受験料を全額支援します。
                  </p>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">🎯 受験のメリット</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    留学前に受けるのはもちろん、年に1度の腕試しで受けることもオススメです。
                  </p>
                </div>
                <div className="bg-green-50 p-3 lg:p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3 text-sm sm:text-base">📊 IELTS の価値</h4>
                  <ul className="text-xs sm:text-sm text-green-700 space-y-2">
                    <li>• 国際的に認められた英語能力証明</li>
                    <li>• 留学準備ではほとんどの場合で必須</li>
                    <li>• 自分の英語レベルを客観的に把握</li>
                    <li>• 学習のモチベーション向上</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 専門講師サポート */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
            <span className="leading-tight">生物学に精通した英語の専門講師によるサポート</span>
          </h2>
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-50 p-4">
              <CardTitle className="text-purple-800 flex items-center gap-2 text-base sm:text-lg">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                いつでも相談できる専門講師
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 lg:pt-6 lg:p-6">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">🗣️ 相談内容</h4>
                  <ul className="text-gray-700 text-xs sm:text-sm space-y-2 mb-4">
                    <li>• 英語学習に関する質問</li>
                    <li>• 1人ではできない IELTS の面接対策</li>
                    <li>• 講師の方は元生物学の研究者なので進路相談も時々できます</li>
                    <li>• 学習方法のアドバイス</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">📚 提供資料</h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                    IELTS の過去問や普段の英語学習に役立つ資料も提供してもらえます。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                      個別指導
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                      面接対策
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                      進路相談
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 教科書貸出サービス */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
            <span className="leading-tight">生物学の教科書が無料で借り放題</span>
          </h2>
          <Card className="border-orange-200">
            <CardHeader className="bg-orange-50 p-4">
              <CardTitle className="text-orange-800 flex items-center gap-2 text-base sm:text-lg">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                高額な専門書を無料で利用
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 lg:pt-6 lg:p-6">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">💸 コスト削減</h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                    生物学の教科書は数万円するので借りるのが良いです。学生にとって大きな経済的メリットがあります。
                  </p>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">📖 豊富な蔵書</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">図書館にはない専門書も多数取り揃えています。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    柔軟な貸出システム
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                    大学の図書館とは違って返却期限は自分で決められます。研究やレポート作成に必要な期間、じっくりと利用できます。
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-orange-800 font-medium">
                      学習ペースに合わせた柔軟な利用が可能！
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* NY研修プログラム */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center gap-2">
            <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
            <span className="leading-tight">NY 研修で自分の研究を発表できるかも</span>
          </h2>
          <Card className="border-red-200">
            <CardHeader className="bg-red-50 p-4">
              <CardTitle className="text-red-800 flex items-center gap-2 text-base sm:text-lg">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                国際的な研究発表の機会
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 p-4 lg:pt-6 lg:p-6">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">🗽 研修内容</h4>
                  <ul className="text-gray-700 text-xs sm:text-sm space-y-2 mb-4">
                    <li>• 自分の研究を英語で発表する機会</li>
                    <li>• ワシントン D.C. や博物館への訪問</li>
                    <li>• アメリカの学術機関との交流</li>
                    <li>• 現地の研究施設見学</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">🎓 得られる経験</h4>
                  <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                    アメリカの学生生活も垣間見ることができ、国際的な視野を広げる貴重な体験になります。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                      研究発表
                    </Badge>
                    <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                      文化体験
                    </Badge>
                    <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                      国際交流
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
