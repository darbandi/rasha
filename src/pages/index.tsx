import dynamic from 'next/dynamic'
import { SEOGenerator_comp } from '@/components'
import { ssrConfig } from '@/lib'

const Home = dynamic(
  async () => (await import('@/containers/home/Home')).Home_page,
  {
    ssr: false,
  },
)

export default function Index(): JSX.Element {
  return (
    <>
      <SEOGenerator_comp title='mainPage' description='seoDescription' />
      <Home />
    </>
  )
}

export const getServerSideProps = ssrConfig
