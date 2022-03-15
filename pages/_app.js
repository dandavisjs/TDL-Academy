import '../styles/globals.css'
import { QuizContextProvider } from '../store/quiz-context';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <QuizContextProvider>
      <Layout>
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
