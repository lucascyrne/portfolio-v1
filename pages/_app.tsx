import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 my-14 px-5 lg:px-48 md:px-32 sm:px-20'>
        <div className='col-span-12 lg:col-span-3 p-4 text-center bg-white dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
          <Sidebar />
        </div>
        <div className='flex flex-col col-span-12 lg:col-span-9 bg-white dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark overflow-hidden'>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp