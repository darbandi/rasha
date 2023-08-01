import { GetServerSideProps, GetStaticProps } from 'next'

// getServerSideProps
export const ssrConfig: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

// getStaticProps
export const ssgConfig: GetStaticProps = async () => {
  return {
    props: {},
  }
}
