import React, { useState } from 'react';
import { Product } from '../../types';
import { PRODUCTS } from '../../data/products';
import { Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface FrequentlyBoughtTogetherProps {
  currentProduct: Product;
}

export const FrequentlyBoughtTogether: React.FC<FrequentlyBoughtTogetherProps> = ({ currentProduct }) => {
  const { addToCart } = useCart();
  
  // Find related products
  const relatedIds = currentProduct.frequentlyBoughtTogetherIds || ['prod-camphor-01', 'prod-dhoop-01'];
  const bundleItems = PRODUCTS.filter((p) => relatedIds.includes(p.id) && p.id !== currentProduct.id).slice(0, 2);

  const allItems = [currentProduct, ...bundleItems];

  const [selectedIds, setSelectedIds] = useState<string[]>(allItems.map((p) => p.id));

  const toggleItem = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // keep at least 1
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const selectedProducts = allItems.filter((p) => selectedIds.includes(p.id));
  const bundleTotal = selectedProducts.reduce((acc, p) => acc + p.price, 0);
  const bundleMrp = selectedProducts.reduce((acc, p) => acc + p.mrp, 0);
  const bundleSavings = bundleMrp - bundleTotal;

  const handleAddBundleToCart = () => {
    selectedProducts.forEach((p) => {
      addToCart(p, 1);
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-spiritual-earth-200/90 p-6 sm:p-8 shadow-spiritual space-y-6">
      
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-spiritual-gold-600" />
        <h3 className="font-serif text-lg sm:text-xl font-bold text-spiritual-earth-900">
          Frequently Bought Together (Sacred Ritual Bundle)
        </h3>
      </div>

      {/* Visual Product Thumbnails Row */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {allItems.map((item, idx) => {
          const isChecked = selectedIds.includes(item.id);
          const isMain = item.id === currentProduct.id;

          return (
            <React.Fragment key={`bundle-thumb-${item.id}`}>
              {idx > 0 && (
                <div className="w-7 h-7 rounded-full bg-spiritual-earth-100 flex items-center justify-center text-spiritual-earth-600 shrink-0">
                  <Plus className="w-4 h-4" />
                </div>
              )}

              <div className="relative group">
                <Link
                  to={`/products/${item.slug}`}
                  className={`block w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 bg-spiritual-bg transition-all ${
                    isChecked
                      ? 'border-spiritual-gold-500 shadow-md ring-2 ring-spiritual-gold-200'
                      : 'border-spiritual-earth-200 opacity-50'
                  }`}
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                {isMain && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-spiritual-earth-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                    This Item
                  </span>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Checkbox item selections */}
      <div className="space-y-2.5 pt-2 border-t border-spiritual-earth-100">
        {allItems.map((item) => {
          const isChecked = selectedIds.includes(item.id);
          const isMain = item.id === currentProduct.id;

          return (
            <label
              key={`check-${item.id}`}
              className="flex items-center gap-3 text-xs sm:text-sm text-spiritual-earth-800 cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleItem(item.id)}
                className="rounded text-spiritual-gold-600 focus:ring-spiritual-gold-400 w-4 h-4"
              />
              <span className="flex-1">
                {isMain && <strong>This Item: </strong>}
                <span className="font-serif font-semibold">{item.name}</span>
                <span className="text-spiritual-earth-500 font-sans ml-2">
                  — <strong className="text-spiritual-earth-900">{formatCurrency(item.price)}</strong>
                </span>
              </span>
            </label>
          );
        })}
      </div>

      {/* Bundle pricing summary & Add all button */}
      <div className="pt-4 border-t border-spiritual-earth-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-spiritual-bg/80 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
        <div>
          <div className="text-xs text-spiritual-earth-600">
            Total Price for <strong>{selectedProducts.length} Sacred Items</strong>:
          </div>
          <div className="flex items-baseline gap-2.5 mt-0.5">
            <span className="text-xl sm:text-2xl font-serif font-extrabold text-spiritual-earth-900">
              {formatCurrency(bundleTotal)}
            </span>
            {bundleSavings > 0 && (
              <>
                <span className="text-xs sm:text-sm text-spiritual-earth-400 line-through">
                  {formatCurrency(bundleMrp)}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  Save {formatCurrency(bundleSavings)}
                </span>
              </>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleAddBundleToCart}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-spiritual-gold-600 hover:bg-spiritual-gold-500 text-white text-sm font-semibold shadow-md hover:shadow-gold-glow transition-all active:scale-95 shrink-0"
        >
          <ShoppingBag className="w-4 h-4 text-white" />
          <span>Add Bundle to Cart ({selectedProducts.length})</span>
        </button>
      </div>

    </div>
  );
};
