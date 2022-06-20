import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { QuizContextProvider } from '../store/quiz-context';
import { NavContextProvider } from '../store/nav-context';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from '../components/layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
        cookieFlags: 'SameSite=None; Secure'
      })
    }
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(`${process.env.NEXT_PUBLIC_FACEBOOK_ID}`) // facebookPixelId
        ReactPixel.pageView()
        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
          handleRouteChange
        })
      })
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <QuizContextProvider>
      <NavContextProvider>
        <Layout>
          <Head>
            <meta property="og:title" content="Ресурсы для обучения профессионалов в траковой индустрие." key="ogtitle" />
            <meta property="og:description" content="Ресурсы для обучения профессионалов в траковой индустрие. Обучающие видео курсы, Бесплатные CDL-A тесты для подготовки, с переводом на русский язык. Используйте бесплатные тесты для того чтобы проверить свои знания и подготовиться к экзаменам Class-A Commercial Driver’s License в США. " key="ogdesc" />
            <meta property="og:image" content="https://academy.truckdriver.help/images/truckdriverhelp-og.jpg" key="ogimage" />
          </Head>
          {/* Google analytics scripts */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayёer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                  });
                `,
            }}
          />
          <Component {...pageProps} />
        </Layout>
      </NavContextProvider>
    </QuizContextProvider>

  )
}

export default MyApp
