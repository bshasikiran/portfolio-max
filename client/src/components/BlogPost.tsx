import React from 'react';
import { Link, useLocation, useRoute } from 'wouter';
import { getBlogPostBySlug } from '../data/blogData';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { ChevronLeft } from 'lucide-react';
import { Separator } from './ui/separator';
import ReactMarkdown from 'react-markdown';

export function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;
  const [, setLocation] = useLocation();
  
  // Get blog post data
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  
  if (!post) {
    return (
      <div className="container mx-auto max-w-4xl py-16 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Blog Post Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Sorry, the blog post you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => setLocation('/blog')}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog">
            <div className="inline-flex items-center text-primary dark:text-primary-400 hover:underline mb-6 cursor-pointer">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to all posts
            </div>
          </Link>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                  <div className="cursor-pointer">
                    <Badge variant="secondary" className="hover:bg-secondary/80">
                      {tag}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-6">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.publishedDate}</span>
            </div>
          </div>
          
          <div className="mb-10">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          
          <article className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <Markdown content={post.content} />
          </article>
          
          <Separator className="my-8" />
          
          <div className="mt-8 mb-16">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Share this post
            </h3>
            <div className="flex gap-4">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${window.location.href}`)}`}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Markdown component to render the blog content
function Markdown({ content }: { content: string }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}