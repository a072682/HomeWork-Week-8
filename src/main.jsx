import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';//css檔案
import 'bootstrap/dist/js/bootstrap.js';//js檔案
import { RouterProvider } from 'react-router-dom';//使用ReactRouter時引入
import router from './router'//使用ReactRouter時引入
import { Provider } from 'react-redux'//使用ReduxToolkit時引入
import { store } from './store.js'//使用ReduxToolkit時引入
import '@fortawesome/fontawesome-free/css/all.min.css';//icon引入
import './assets/styles/all.scss'
import 'swiper/css';//swiper

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
 