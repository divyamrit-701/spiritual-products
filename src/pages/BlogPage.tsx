import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogs';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { BookOpen, Clock, Calendar, ArrowRight, User, Sparkles } from 'lucide-react';
import { formatDate } from '../utils/formatters';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Sacred Science', 'Rituals & Traditions', 'Vastu & Wellness'];

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-spiritual-bg py-8 sm:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Breadcrumbs items={[{ label: 'Spiritual Knowledge Hub' }]} />

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Vedic Wisdom & Puja Science</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-spiritual-earth-900">
            Spiritual Knowledge & Ritual Guides
          </h1>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Explore authentic articles on the science of Bhimseni camphor, Vastu fragrance alignment, and sacred Indian devotional practices.
          </p>
        </div>

        {/* Featured Blog Banner */}
        {featuredPost && (
          <div className="bg-white rounded-3xl border border-spiritual-earth-200 overflow-hidden shadow-spiritual grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
            <div className="lg:col-span-7 aspect-video lg:aspect-auto h-full overflow-hidden bg-spiritual-earth-100">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-spiritual-gold-700 bg-spiritual-gold-50 border border-spiritual-gold-200 px-3 py-1 rounded-full uppercase tracking-wider">
                Featured Insight • {featuredPost.category}
              </span>
              
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-earth-900 group-hover:text-spiritual-gold-800 transition-colors leading-snug">
                <Link to={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-spiritual-earth-600 leading-relaxed font-sans line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-3 pt-2 text-xs text-spiritual-earth-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(featuredPost.publishedDate)}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <div className="pt-2">
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-spiritual-gold-700 hover:text-spiritual-gold-800 transition-colors"
                >
                  <span>Read Complete Sacred Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${
                selectedCategory === cat
                  ? 'bg-spiritual-earth-900 text-white shadow-sm'
                  : 'bg-white text-spiritual-earth-700 hover:bg-spiritual-gold-50 border border-spiritual-earth-200'
              }`}
            >
              {cat === 'all' ? 'All Wisdom Articles' : cat}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl border border-spiritual-earth-200 overflow-hidden shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-spiritual-earth-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-spiritual-earth-900 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-spiritual-earth-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(post.publishedDate)}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-spiritual-earth-900 group-hover:text-spiritual-gold-800 transition-colors leading-snug line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-spiritual-earth-600 leading-relaxed font-sans line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-spiritual-earth-100 flex items-center justify-between mt-2">
                <span className="text-xs text-spiritual-earth-500 font-medium">
                  By {post.author.name.split(' ')[0]}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-spiritual-gold-700 hover:text-spiritual-gold-800"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
