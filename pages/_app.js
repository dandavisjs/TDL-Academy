import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { QuizContextProvider } from '../store/quiz-context';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from '../components/layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(`${process.env.NEXT_PUBLIC_FACEBOOK_ID}`) // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  return (
    <QuizContextProvider>
      <Layout>
        <Head>
          <meta property="og:title" content="CDL тесты с переводом на русский язык - academy.truckdriver.help" key="ogtitle" />
          <meta property="og:description" content="Бесплатные CDL тесты для подготовки, с переводом на русский язык. Используйте бесплатные тесты для того чтобы проверить свои знания и подготовиться к экзаменам Class-A Commercial Driver’s License в США. Тесты имитируют типы вопросов, которые могут возникнуть при сдаче тестов в местном офисе DMV." key="ogdesc" />
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
                  window.dataLayer = window.dataLayer || [];
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
    </QuizContextProvider>
  )
}

export default MyApp
