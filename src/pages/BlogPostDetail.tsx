import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogs';
import { PRODUCTS } from '../data/products';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ProductCard } from '../components/product/ProductCard';
import { Calendar, Clock, User, Share2, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { formatDate } from '../utils/formatters';
import { useToast } from '../context/ToastContext';

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { showToast } = useToast();

  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const relatedProducts = PRODUCTS.filter((p) => post.relatedProductIds?.includes(p.id)).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article Link Copied!', 'Share this Vedic wisdom with others.', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs
          items={[
            { label: 'Spiritual Knowledge', to: '/blog' },
            { label: post.title }
          ]}
        />

        {/* Title Header */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="text-xs font-bold text-spiritual-gold-700 bg-spiritual-gold-100 px-3 py-1 rounded-full border border-spiritual-gold-300 uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-xs text-spiritual-earth-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedDate)}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-spiritual-earth-900 leading-tight">
            {post.title}
          </h1>

          {/* Author info & share button */}
          <div className="pt-3 flex items-center justify-between border-y border-spiritual-earth-200 py-3">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-spiritual-earth-300"
              />
              <div>
                <span className="font-serif font-bold text-sm text-spiritual-earth-900 block">
                  {post.author.name}
                </span>
                <span className="text-xs text-spiritual-earth-500 font-sans">
                  {post.author.role}
                </span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-spiritual-earth-300 bg-white hover:bg-spiritual-gold-50 text-xs font-semibold text-spiritual-earth-800 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Cover Photo */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-spiritual-earth-100">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-stone max-w-none text-sm sm:text-base text-spiritual-earth-800 font-sans leading-relaxed space-y-6 pt-4">
          <div className="p-4 rounded-2xl bg-spiritual-gold-50/70 border border-spiritual-gold-200 text-spiritual-earth-900 font-serif italic text-base">
            "{post.excerpt}"
          </div>

          <div className="space-y-4 whitespace-pre-line">
            {post.content}
          </div>
        </article>

        {/* Article Tags */}
        <div className="pt-6 border-t border-spiritual-earth-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-spiritual-earth-500 uppercase tracking-wider">
            Topics:
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-white border border-spiritual-earth-200 px-3 py-1 rounded-full text-spiritual-earth-800 font-medium">
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Sacred Products Recommendation */}
        {relatedProducts.length > 0 && (
          <div className="pt-10 border-t border-spiritual-earth-200 space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-spiritual-gold-600" />
              <h3 className="font-serif text-2xl font-bold text-spiritual-earth-900">
                Recommended for This Sacred Ritual
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Back to Knowledge Hub */}
        <div className="text-center pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-spiritual-earth-800 hover:text-spiritual-gold-700 underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Spiritual Knowledge Guides</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
