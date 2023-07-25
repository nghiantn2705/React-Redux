import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/products.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductProvider>
    <App />
  </ProductProvider>,
)
