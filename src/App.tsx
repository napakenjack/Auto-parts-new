/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import { Auth } from './pages/Auth';
import { OrderDetails } from './pages/OrderDetails';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-slate-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/about" element={<About />} />
            {/* Fallback routes */}
            <Route path="/favorites" element={<Profile />} />
            <Route path="/contact" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
