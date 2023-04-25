import React from 'react';
import Head from 'next/head'
import '../styles/globals.scss'
import '../styles/pos.scss'
import { observer } from 'mobx-react-lite';
import '../public/bvi/css/bvi.css'
import Header from '../components/Header'
import Script from 'next/script';


const MyApp = observer(({ Component, pageProps }) => (<>
    <Head>
      <title>Главная</title>
      <meta name="description" content="Официальный веб-ресурс Государственного комитета по охране объектов животного мира Республики Тыва" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/tuvan_herb.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      
    </Head>
    <Script async src="https://lidrekon.ru/slep/js/jquery.js"></Script>
      <Script async src="https://lidrekon.ru/slep/js/uhpv-full.min.js"></Script>
      <Script async src="/js/pos.js"></Script>
      <Script async src='https://pos.gosuslugi.ru/bin/script.min.js'></Script>
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Component {...pageProps} />
    </div>
  </>
  )
)

export default MyApp