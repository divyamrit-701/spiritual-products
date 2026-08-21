import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  count,
  size = 'sm',
  showCount = true
}) => {
  const starSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="flex items-center text-amber-500">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={`${starSizes[size]} fill-amber-400 text-amber-500`} />
        ))}
        {hasHalfStar && (
          <StarHalf className={`${starSizes[size]} fill-amber-400 text-amber-500`} />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={`${starSizes[size]} text-spiritual-earth-200 fill-spiritual-earth-100`} />
        ))}
      </div>
      
      {showCount && (
        <span className="text-xs font-semibold text-spiritual-earth-700">
          {rating.toFixed(1)}
          {count !== undefined && (
            <span className="text-spiritual-earth-500 font-normal ml-1">
              ({count})
            </span>
          )}
        </span>
      )}
    </div>
  );
};
