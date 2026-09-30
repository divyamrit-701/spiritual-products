import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { formatCurrency } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { RatingStars } from '../ui/RatingStars';
import { Badge } from '../ui/Badge';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const isLiked = isInWishlist(product.id);
  const currentVariant = product.variants ? product.variants[selectedVariantIndex] : undefined;
  const currentPrice = currentVariant ? currentVariant.price : product.price;
  const currentMrp = currentVariant ? currentVariant.mrp : product.mrp;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, currentVariant);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  return (
    <div 
      className="group relative flex flex-col bg-white rounded-2xl border border-spiritual-earth-200/80 overflow-hidden shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-spiritual-bg">
        <Link to={`/products/${product.slug}`} className="block w-full h-full">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Badges on Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.bestseller && (
            <Badge variant="gold">
              ★ Bestseller
            </Badge>
          )}
          {(product.discountPercentage || 0) > 0 && (
            <Badge variant="sale">
              {product.discountPercentage}% OFF
            </Badge>
          )}
          {product.newArrival && (
            <Badge variant="maroon">
              New
            </Badge>
          )}
        </div>

        {/* Wishlist & Quick View Buttons on Top Right */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
          <button
            type="button"
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
              isLiked 
                ? 'bg-rose-50 text-rose-600 border border-rose-200' 
                : 'bg-white/90 text-spiritual-earth-600 hover:text-rose-600 hover:bg-white'
            }`}
            aria-label={isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-600' : ''}`} />
          </button>

          {onQuickView && (
            <button
              type="button"
              onClick={handleQuickView}
              className="p-2 rounded-full bg-white/90 text-spiritual-earth-600 hover:text-spiritual-gold-700 hover:bg-white backdrop-blur-md transition-all shadow-sm opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center"
              aria-label="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Charcoal Free / 100% Pure Ribbon Tag */}
        {product.charcoalFree && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[10px] font-medium text-spiritual-tulsi-800 px-2 py-0.5 rounded-md border border-spiritual-tulsi-200 flex items-center gap-1 shadow-xs">
            <Sparkles className="w-2.5 h-2.5 text-spiritual-tulsi-500" />
            <span>0% Charcoal • Pure White Smoke</span>
          </div>
        )}
      </div>

      {/* Product Details Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Category & Fragrance Tag */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-spiritual-earth-500 font-medium">
              {product.categoryName}
            </span>
            <span className="text-spiritual-gold-700 font-serif font-medium truncate max-w-[120px]">
              {product.fragrance}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-spiritual-earth-900 line-clamp-2 leading-snug group-hover:text-spiritual-gold-800 transition-colors">
            <Link to={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          {/* Hindi Name */}
          {product.hindiName && (
            <p className="text-xs text-spiritual-earth-500 font-serif italic line-clamp-1">
              {product.hindiName}
            </p>
          )}

          {/* Rating */}
          <div className="pt-0.5">
            <RatingStars rating={product.rating || 4.9} count={product.reviewCount || 120} size="sm" />
          </div>
        </div>

        {/* Variant selector pills if multiple exist */}
        {product.variants && product.variants.length > 1 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.variants.map((v, idx) => (
              <button
                key={v.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedVariantIndex(idx);
                }}
                className={`text-[11px] px-2 py-0.5 rounded-md border transition-all ${
                  selectedVariantIndex === idx
                    ? 'bg-spiritual-gold-100 border-spiritual-gold-400 text-spiritual-gold-900 font-semibold'
                    : 'bg-spiritual-earth-50 border-spiritual-earth-200 text-spiritual-earth-700 hover:border-spiritual-gold-300'
                }`}
              >
                {v.name.split(' ')[0]} {v.name.split(' ')[1] || ''}
              </button>
            ))}
          </div>
        )}

        {/* Pricing & Add to Cart Button */}
        <div className="pt-2 border-t border-spiritual-earth-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-bold text-spiritual-earth-900">
                {formatCurrency(currentPrice)}
              </span>
              {currentMrp > currentPrice && (
                <span className="text-xs text-spiritual-earth-400 line-through">
                  {formatCurrency(currentMrp)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-medium block">
              Inclusive of all taxes
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-spiritual-earth-900 hover:bg-spiritual-gold-600 text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-spiritual-gold-300" />
            <span>Add</span>
          </button>
        </div>

      </div>
    </div>
  );
};
