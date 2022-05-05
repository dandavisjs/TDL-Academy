import Head from 'next/head'
import styles from './index.module.css'
import Link from 'next/link'
import Support from '../components/layout/support'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ресурсы для обучения профессионалов в траковой индустрие.</title>
        <meta name="description" content="Обучающие видео курсы для диспетчеров и водиетелей траков, CDL тесты с переводом, и прочие ресурсы вы можете найти на." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1>Бесплатные ресурсы для логистической индустрии США</h1>
        <p>Обучающие ресурсы для дальнобойщиков, диспетчеров и компаний, оперирующих в логистической индустрии США. Платформа с видео курсами, CDL тестами с переводом на русский язык, а также прочей полезной информацией.</p>
        <div className={styles.list}>
          <Link href="/quiz/"><a><i className="bi bi-file-earmark-text-fill"></i>
            CDL Тесты</a></Link>
          <Link href="/course/dispatch/0"><a><i className="bi bi-play-circle-fill"></i>
            Видео Курсы</a></Link>
        </div>
        <div>
          <p style={{ color: "#D35058" }}>Платформа работает в бета-тестовом режиме. Если вы обнаружили неполадки, вы можете оповестить нас по электронной почте: <strong>contact{`<собака>`}truckdriver.help</strong> <br />Либо через Телеграм <strong><a href="https://t.me/tdhsupport" target="_blank" rel="noreferrer">@TDHSupport</a></strong></p>
        </div>
        <div className={styles.work}>
          <h3>Поддержите наш проект!</h3>
          <Support />
          <h3>Поиск работы в траковой компании?</h3>
          <Link href="https://www.truckdriver.help" passHref={true}><h4 style={{ cursor: 'pointer' }} >www.TruckDriver.help</h4></Link>
          <p>TruckDriver.help это новый, уникальный проект для размещения объявлений в траковых компаниях.</p>
        </div>
      </div>
    </div >
  )
}
