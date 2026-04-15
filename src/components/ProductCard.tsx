import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-3 flex flex-col relative group">
      {/* Badge */}
      {product.oldPrice && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] py-0.5 px-1.5 rounded font-bold z-10">
          -15%
        </div>
      )}

      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="w-full h-[120px] bg-slate-50 rounded mb-3 flex items-center justify-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Content */}
      <div className="text-[10px] uppercase text-orange-500 font-bold mb-0.5">
        {product.brand}
      </div>
      
      <Link to={`/product/${product.id}`}>
        <h3 className="text-[13px] font-semibold leading-tight h-[34px] overflow-hidden mb-2 text-slate-900 hover:text-orange-500 transition-colors">
          {product.title}
        </h3>
      </Link>

      <div className="text-[10px] text-slate-500 mb-2">
        SKU: {product.sku}
      </div>

      <div className="text-[10px] text-green-500 font-semibold flex items-center gap-1 mb-1">
        <Check size={12} /> Подходит для вашего авто
      </div>

      <div className="text-[10px] text-slate-500 mb-2">
        Доставка: <span className="font-semibold text-slate-700">{product.deliveryTime}</span>
      </div>

      <div className="flex items-baseline gap-2 mt-auto">
        <span className="text-[18px] font-bold text-slate-900">${product.price.toFixed(2)}</span>
        {product.oldPrice && (
          <span className="text-[12px] line-through text-slate-500">${product.oldPrice.toFixed(2)}</span>
        )}
      </div>

      <button 
        disabled={!product.inStock}
        className={`py-2 rounded text-[11px] font-semibold w-full mt-2.5 transition-colors ${
          product.inStock 
            ? 'bg-slate-900 hover:bg-slate-800 text-white' 
            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
        }`}
      >
        В КОРЗИНУ
      </button>
    </div>
  );
};
