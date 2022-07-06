import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next'

import { useRouter } from 'next/router'
import Head from 'next/head'

// ページコンポーネントの引数の型定義
type StatusPageProps = { id: string, lang: string }


// サーバーサイドでの前処理を行う関数
export const GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<StatusPageProps>> => {
  // context経由でブラウザから送信されたパラメータを受け取る
  const { id, lang } = context.query
}


const StatusPage: NextPage = () => {
  const router = useRouter()
  const { id, lang } = router.query

  return (
    <p>
      このページのIDは{id}で言語は{lang}です
    </p>
  )
}

export default StatusPage
