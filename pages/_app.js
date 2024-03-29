import { Provider } from 'react-redux';
// import {store } from '../store/store'
import {wrapper} from '../store/store'

import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
  //  <Provider store={store}>
     <Layout>
      <Component {...pageProps} />
    </Layout>
  //  {/* </Provider> */}
  )
}

export default wrapper.withRedux(MyApp);
