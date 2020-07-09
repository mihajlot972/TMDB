import '../styles/global.scss'
import Sidebar from '../components/Sidebar/Sidebar'
export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* demo */}
      <img style={{position: 'fixed', bottom: '0', top: '0', zIndex: '-5',width: '100%', height: '100%', backgroundPosition: 'center', backgroundSize: 'cover'}} src='/images/movietheater.jpg'></img>
      <div style={{top: '0', bottom: '0', left: '0', right: '0', zIndex: '-1', opacity: '0.9', backgroundColor: 'black', height: '100%', width: '100%', position: 'fixed'}}>
      </div>
      {/* demo */}
      <Sidebar />
      <Component {...pageProps} />
    </div>
  ) 
}
