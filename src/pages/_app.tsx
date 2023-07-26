import '@/styles/globals.css'
import {Poppins} from 'next/font/google'
const poppins = Poppins({
  weight: ['400', '700','800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-poppins'
})
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
export default function App({ Component, pageProps:{ session ,...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
     </LocalizationProvider>
      
    </SessionProvider>
  )
}

// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// function App({ children }) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       {children}
//     </LocalizationProvider>
//   );
// }