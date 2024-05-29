import Navbar from './Navbar'
import style from '@/styles/Layout.module.css'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

 
export default function Layout({ children }) {
  return ( 
      <div id={style.container}>
          <div id={style.layout}>
            <Navbar />
            <main id={style.main}>{children}</main>
        </div>
      </div>
  )
}