import Head from 'next/head'
import styles from './index.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Тесты CDL с переводом на русский - academy.truckdriver.help</title>
        <meta name="description" content="Тесты CDL с переводом на русский." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1>CDL тесты с переводом на русский язык</h1>
        <p>Бесплатные CDL тесты для подготовки, <em>с переводом на русский язык</em>. Используйте бесплатные тесты для того чтобы проверить свои знания и подготовиться к экзаменам Class-A Commercial Driver’s License в США. Тесты имитируют типы вопросов, которые могут возникнуть при сдаче тестов в местном офисе DMV.</p>
        <p>Выберите тест:</p>
        <div className={styles.list}>
          <Link href="/quiz/general"><a>General Knowledge</a></Link>
          <Link href="/quiz/combination"><a>Combination</a></Link>
          <Link href="/quiz/airbrakes"><a>Air Brakes</a></Link>
        </div>
        <p>Тесты основаны на федеральных правилах. В разных штатах правила могут слегка разлечаться, но общая информация для всех штатов одинакова.</p>
        <div className={styles.work}>
          <h3>Ищите работу в траковой компании?</h3>
          <Link href="https://www.truckdriver.help" passHref={true}><h4 style={{ cursor: 'pointer' }} >www.TruckDriver.help</h4></Link>
          <p>TruckDriver.help предоставляем эффективный сервис по поиску работы, а также размещению вакансий на работу.</p>
        </div>
        <p><strong>{`General Knowledge (Общие знания).`}</strong> Тест CDL на общие знания сдают все кандидаты. В тесте 50 вопросов с несколькими вариантами ответов. Основные темы проверки общих знаний включают: правила и требования CDL, безопасное вождение, безопасную перевозку грузов и предрейсовый осмотр транспортных средств.</p>
        <p><strong>{`Combination Vehicles (Комбинированные транспортные средства).`}</strong> Если вы хотите водить комбинированные транспортные средства, вы должны сдать этот раздел теста CDL. Тест комбинированных транспортных средств состоит из 20 вопросов с несколькими вариантами ответов. Темы теста комбинированных транспортных средств включают: безопасное вождение комбинированных транспортных средств, пневматические тормоза комбинированных транспортных средств, антиблокировочные тормозные системы, сцепку и расцепление, а также осмотр комбинированного транспортного средства.</p>
        <p><strong>{`Air Brakes (Пневматические тормоза).`}</strong> Если вы планируете управлять грузовиком или автобусом с пневматическими тормозами или тянуть прицеп с пневматическими тормозами, вам необходимо пройти тест CDL на пневматические тормоза. Тест пневматических тормозов будет состоять из 25 вопросов с несколькими вариантами ответов. Темы испытаний пневматических тормозов включают: части пневматической тормозной системы, двойные пневматические тормоза, проверку пневматических тормозных систем и использование пневматических тормозов.</p>
      </div>



    </div>
  )
}
