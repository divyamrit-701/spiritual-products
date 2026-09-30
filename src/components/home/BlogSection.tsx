import React from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../../data/blogs';
import { formatDate } from '../../utils/formatters';

interface BlogSectionProps {
  onPostClick: (postSlug: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onPostClick }) => {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-white border-b border-spiritual-earth-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-spiritual-gold-700 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Vedic Knowledge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-spiritual-earth-900">
            Spiritual Knowledge & Ritual Guides
          </h2>
          <p className="text-sm sm:text-base text-spiritual-earth-600 font-sans">
            Deep dive into the sacred science of Bhimseni camphor, bambooless dhoop, and Vastu aromatic alignment.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => onPostClick(post.slug)}
              className="bg-spiritual-bg rounded-3xl border border-spiritual-earth-200/90 overflow-hidden shadow-spiritual hover:shadow-spiritual-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-spiritual-earth-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 bg-spiritual-earth-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-spiritual-earth-500 font-sans">
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

                  <h3 className="font-serif text-xl font-bold text-spiritual-earth-900 group-hover:text-spiritual-gold-800 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-spiritual-earth-600 font-sans leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="p-6 pt-0 border-t border-spiritual-earth-200/60 mt-2">
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-spiritual-gold-800 group-hover:text-spiritual-gold-900">
                  <span>Read Complete Sacred Guide</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
