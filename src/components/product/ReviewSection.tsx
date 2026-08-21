import React, { useState } from 'react';
import { Product, ProductReview } from '../../types';
import { RatingStars } from '../ui/RatingStars';
import { CheckCircle2, ThumbsUp, MessageSquare, PenTool, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { useToast } from '../../context/ToastContext';
import { formatDate } from '../../utils/formatters';

interface ReviewSectionProps {
  product: Product;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ product }) => {
  const { showToast } = useToast();
  const [reviews, setReviews] = useState<ProductReview[]>(product.reviews || []);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState<Record<string, boolean>>({});

  // New review state
  const [newRating, setNewRating] = useState(5);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleHelpful = (reviewId: string) => {
    if (helpfulClicked[reviewId]) return;
    setHelpfulClicked((prev) => ({ ...prev, [reviewId]: true }));
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
    showToast('Thank you for your feedback!', undefined, 'info');
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim() || !newTitle.trim()) {
      showToast('Please fill out all fields', undefined, 'error');
      return;
    }

    const review: ProductReview = {
      id: `rev-${Date.now()}`,
      userName: newName.trim(),
      userCity: newCity.trim() || 'India',
      rating: newRating,
      date: new Date().toISOString().split('T')[0],
      title: newTitle.trim(),
      comment: newComment.trim(),
      verifiedPurchase: true,
      helpfulCount: 0
    };

    setReviews([review, ...reviews]);
    setIsWriteModalOpen(false);
    showToast('Review Submitted 🪔', 'Thank you for sharing your sacred experience!', 'success');
    
    // Reset
    setNewName('');
    setNewCity('');
    setNewTitle('');
    setNewComment('');
    setNewRating(5);
  };

  // Breakdown percentages
  const ratingDistribution = [
    { stars: 5, percentage: 86, count: Math.round(product.reviewCount * 0.86) },
    { stars: 4, percentage: 11, count: Math.round(product.reviewCount * 0.11) },
    { stars: 3, percentage: 2, count: Math.round(product.reviewCount * 0.02) },
    { stars: 2, percentage: 1, count: Math.round(product.reviewCount * 0.01) },
    { stars: 1, percentage: 0, count: 0 },
  ];

  return (
    <div className="space-y-8">
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-spiritual-earth-50/70 p-6 sm:p-8 rounded-3xl border border-spiritual-earth-200/80">
        
        {/* Rating Score */}
        <div className="flex flex-col items-center justify-center text-center p-4 md:border-r border-spiritual-earth-200">
          <div className="font-serif text-5xl font-extrabold text-spiritual-earth-900">
            {product.rating.toFixed(1)}
          </div>
          <div className="my-2">
            <RatingStars rating={product.rating} size="md" showCount={false} />
          </div>
          <span className="text-xs text-spiritual-earth-600 font-medium">
            Based on {product.reviewCount} verified devotee reviews
          </span>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>98% Recommended by Devotees</span>
          </div>
        </div>

        {/* Rating Bars */}
        <div className="space-y-2 flex flex-col justify-center">
          {ratingDistribution.map((item) => (
            <div key={`star-bar-${item.stars}`} className="flex items-center gap-3 text-xs">
              <span className="w-12 font-medium text-spiritual-earth-700 flex items-center gap-1">
                <span>{item.stars}</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
              </span>
              <div className="flex-1 bg-spiritual-earth-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-amber-400 h-full rounded-full" 
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="w-8 text-right text-spiritual-earth-500 font-mono">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="flex flex-col items-center justify-center text-center p-4 md:border-l border-spiritual-earth-200 space-y-3">
          <h4 className="font-serif text-base font-bold text-spiritual-earth-900">
            Used this sacred product?
          </h4>
          <p className="text-xs text-spiritual-earth-600">
            Share your authentic puja or fragrance experience with our devotee community.
          </p>
          <Button
            onClick={() => setIsWriteModalOpen(true)}
            variant="outline"
            size="sm"
            leftIcon={<PenTool className="w-3.5 h-3.5" />}
          >
            Write a Review
          </Button>
        </div>

      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        <h4 className="font-serif text-lg font-bold text-spiritual-earth-900 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-spiritual-gold-600" />
          <span>Devotee Experiences ({reviews.length})</span>
        </h4>

        <div className="divide-y divide-spiritual-earth-200/70 space-y-4">
          {reviews.map((rev) => (
            <div key={rev.id} className="pt-4 first:pt-0 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-spiritual-gold-100 text-spiritual-gold-800 font-serif font-bold text-xs flex items-center justify-center border border-spiritual-gold-300">
                    {rev.userName[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-spiritual-earth-900">
                        {rev.userName}
                      </span>
                      {rev.verifiedPurchase && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          Verified Buyer
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-spiritual-earth-500">
                      {rev.userCity} • {formatDate(rev.date)}
                    </div>
                  </div>
                </div>

                <RatingStars rating={rev.rating} size="sm" showCount={false} />
              </div>

              <h5 className="font-serif font-bold text-sm text-spiritual-earth-900 pt-1">
                {rev.title}
              </h5>

              <p className="text-xs sm:text-sm text-spiritual-earth-700 leading-relaxed">
                "{rev.comment}"
              </p>

              <div className="flex items-center gap-4 pt-1 text-xs text-spiritual-earth-500">
                <button
                  type="button"
                  onClick={() => handleHelpful(rev.id)}
                  disabled={helpfulClicked[rev.id]}
                  className={`inline-flex items-center gap-1.5 hover:text-spiritual-gold-700 transition-colors ${
                    helpfulClicked[rev.id] ? 'text-emerald-700 font-semibold' : ''
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      <Modal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        title="Share Your Sacred Review"
        maxWidth="md"
      >
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1.5">
              Your Overall Rating *
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={`star-select-${star}`}
                  type="button"
                  onClick={() => setNewRating(star)}
                  className="p-1 text-amber-400 hover:scale-110 transition-transform"
                >
                  <Star className={`w-6 h-6 ${star <= newRating ? 'fill-amber-400 text-amber-500' : 'text-spiritual-earth-300'}`} />
                </button>
              ))}
              <span className="text-xs font-semibold text-spiritual-earth-700 ml-2">
                {newRating} out of 5 Stars
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
                Your Name *
              </label>
              <input 
                type="text"
                required
                placeholder="e.g. Ramesh K."
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
                City / State
              </label>
              <input 
                type="text"
                placeholder="e.g. Bengaluru, KA"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
              Review Headline *
            </label>
            <input 
              type="text"
              required
              placeholder="e.g. Pure authentic aroma, perfect for daily Aarti"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-spiritual-earth-800 mb-1">
              Your Review *
            </label>
            <textarea 
              rows={4}
              required
              placeholder="Describe the fragrance notes, smoke clarity, burn duration, or how it enhanced your puja..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-spiritual-earth-300 bg-white focus:outline-none focus:ring-1 focus:ring-spiritual-gold-500 leading-relaxed font-sans"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setIsWriteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="gold"
              size="sm"
            >
              Submit Sacred Review
            </Button>
          </div>
        </form>
      </Modal>

    </div>
  );
};
