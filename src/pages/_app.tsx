import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
export default function App({ Component, pageProps:{ session ,...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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