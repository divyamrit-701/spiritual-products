import React, { useState } from 'react';
import { Product } from '../../types';
import { Modal } from '../ui/Modal';
import { RatingStars } from '../ui/RatingStars';
import { formatCurrency } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Button } from '../ui/Button';
import { ShoppingBag, Heart, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose
}) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const currentVariant = product.variants ? product.variants[selectedVariantIndex] : undefined;
  const price = currentVariant ? currentVariant.price : product.price;
  const mrp = currentVariant ? currentVariant.mrp : product.mrp;
  const isLiked = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, currentVariant);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Product Image */}
        <div className="aspect-square rounded-2xl overflow-hidden bg-spiritual-bg border border-spiritual-earth-200">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Details & Action */}
        <div className="space-y-4">
          <div>
            <div className="text-xs font-semibold text-spiritual-gold-700 uppercase tracking-wider">
              {product.categoryName} • {product.fragrance}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-spiritual-earth-900 mt-1">
              {product.name}
            </h3>
            {product.hindiName && (
              <p className="text-xs text-spiritual-earth-500 font-serif italic mt-0.5">
                {product.hindiName}
              </p>
            )}
            <div className="mt-2">
              <RatingStars rating={product.rating || 4.9} count={product.reviewCount || 120} size="sm" />
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-serif font-extrabold text-spiritual-earth-900">
              {formatCurrency(price)}
            </span>
            {mrp > price && (
              <span className="text-sm text-spiritual-earth-400 line-through">
                {formatCurrency(mrp)}
              </span>
            )}
            {(product.discountPercentage || 0) > 0 && (
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>

          <p className="text-xs text-spiritual-earth-600 leading-relaxed line-clamp-3">
            {product.shortDescription}
          </p>

          {/* Variants */}
          {product.variants && product.variants.length > 1 && (
            <div>
              <span className="text-xs font-semibold text-spiritual-earth-800 block mb-1.5">
                Select Pack Size:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, idx) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                      selectedVariantIndex === idx
                        ? 'bg-spiritual-gold-100 border-spiritual-gold-500 text-spiritual-gold-900 font-bold'
                        : 'bg-spiritual-earth-50 border-spiritual-earth-200 text-spiritual-earth-800'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Key tags */}
          <div className="flex flex-wrap gap-2 text-[11px] text-spiritual-earth-600">
            <span className="flex items-center gap-1 bg-spiritual-earth-50 px-2 py-1 rounded-lg border border-spiritual-earth-200">
              <Sparkles className="w-3 h-3 text-spiritual-gold-600" />
              100% Natural
            </span>
            <span className="flex items-center gap-1 bg-spiritual-earth-50 px-2 py-1 rounded-lg border border-spiritual-earth-200">
              <Check className="w-3 h-3 text-spiritual-tulsi-600" />
              0% Charcoal
            </span>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex items-center gap-3">
            <Button
              onClick={handleAddToCart}
              variant="gold"
              size="md"
              fullWidth
              leftIcon={<ShoppingBag className="w-4 h-4" />}
            >
              Add to Sacred Cart
            </Button>

            <button
              onClick={() => toggleWishlist(product)}
              className={`p-3 rounded-full border transition-colors ${
                isLiked
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-spiritual-earth-50 border-spiritual-earth-200 text-spiritual-earth-700 hover:text-rose-600'
              }`}
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500' : ''}`} />
            </button>
          </div>

          <div className="text-center pt-1">
            <Link
              to={`/products/${product.slug}`}
              onClick={onClose}
              className="text-xs font-semibold text-spiritual-gold-700 hover:text-spiritual-gold-800 inline-flex items-center gap-1 underline underline-offset-2"
            >
              <span>View Complete Product Details & Sacred Ritual Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

        </div>

      </div>
    </Modal>
  );
};
