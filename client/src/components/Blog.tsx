import React from 'react';
import { Link, useLocation } from 'wouter';
import { getAllBlogPosts, getBlogPostsByTag } from '../data/blogData';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

export function Blog() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const tagFilter = urlParams.get('tag');
  
  const blogPosts = tagFilter 
    ? getBlogPostsByTag(tagFilter)
    : getAllBlogPosts();

  const uniqueTags = Array.from(
    new Set(getAllBlogPosts().flatMap(post => post.tags))
  ).sort();

  return (
    <section id="blog" className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Blog
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts, insights, and tutorials on web development, AI, and technology.
          </p>
        </motion.div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">Browse by Tag</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/blog">
              <a className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer 
                ${!tagFilter 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                All
              </a>
            </Link>
            {uniqueTags.map(tag => (
              <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                <a className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer 
                  ${tagFilter === tag 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {tag}
                </a>
              </Link>
            ))}
          </div>
        </div>

        {tagFilter && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Posts tagged: "{tagFilter}"
            </h3>
            <Link href="/blog">
              <a className="text-primary dark:text-primary-400 hover:underline">
                ← Clear filter
              </a>
            </Link>
          </div>
        )}

        {blogPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300">
              No posts found
            </h3>
            {tagFilter && (
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Try another tag or view all posts
              </p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <a className="block">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {post.publishedDate}
                        </span>
                        <span className="text-primary dark:text-primary-400 text-sm font-medium">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}