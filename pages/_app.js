import '../styles/globals.css'
import { QuizContextProvider } from '../store/quiz-context';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <QuizContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QuizContextProvider>
  )
}

export default MyApp
