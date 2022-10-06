import '../styles/globals.css'
import { ILayoutProps, Layout } from '@/components/layout'
import type { AppProps } from 'next/app'

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data
  return (
    <Layout navbarData={navbarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
