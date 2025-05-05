export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedDate: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    slug: "getting-started-with-react-typescript",
    excerpt: "Learn the fundamentals of using TypeScript with React to build robust and type-safe applications.",
    content: `
# Getting Started with React and TypeScript

React and TypeScript are a powerful combination for building robust web applications. In this guide, I'll walk you through setting up a new project and explain the benefits of using TypeScript with React.

## Why TypeScript?

TypeScript adds static typing to JavaScript, which helps catch errors earlier in the development process. This is especially valuable in larger applications or when working in teams.

Benefits include:
- Improved code quality and readability
- Better IDE support with autocompletion
- Catching errors during development instead of runtime
- Easier refactoring

## Setting Up a New Project

The fastest way to get started is using Create React App with the TypeScript template:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

## Creating Your First Component

Here's a simple TypeScript React component:

\`\`\`tsx
import React from 'react';

interface GreetingProps {
  name: string;
  age?: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greeting;
\`\`\`

## Type-Safe Props

One of the biggest advantages is type safety for your props. TypeScript will warn you if:
- Required props are missing
- Props have the wrong type
- You're trying to access props that don't exist

## Conclusion

TypeScript and React make for a powerful development experience. While there is a small learning curve, the benefits in code quality and developer experience are well worth it.

In future posts, we'll explore more advanced TypeScript patterns for React applications!
    `,
    coverImage: "https://placehold.co/1200x630/1e293b/ffffff?text=React+TypeScript",
    author: "Betala Shasi Kiran",
    publishedDate: "May 1, 2025",
    tags: ["React", "TypeScript", "Web Development"]
  },
  {
    id: "2",
    title: "Understanding the Power of AI in Modern Applications",
    slug: "understanding-power-of-ai-modern-applications",
    excerpt: "Discover how artificial intelligence is transforming software development and creating new possibilities.",
    content: `
# Understanding the Power of AI in Modern Applications

Artificial Intelligence (AI) has transformed from a sci-fi concept to a practical tool that developers can leverage in their applications. In this post, I'll explore how AI is being integrated into modern software.

## What is AI in the Context of Applications?

When we talk about AI in applications, we're typically referring to:

- **Machine Learning Models**: Algorithms that learn patterns from data
- **Natural Language Processing**: Understanding and generating human language
- **Computer Vision**: Interpreting and working with visual information
- **Recommendation Systems**: Suggesting relevant content or products

## Popular AI Services for Developers

Several cloud services make it easy to add AI to your applications:

1. **OpenAI API**: For text generation, completion, and more
2. **Google Cloud Vision**: For image analysis and recognition
3. **AWS Rekognition**: For image and video analysis
4. **Azure Cognitive Services**: A suite of AI services for various needs

## A Simple Example: Sentiment Analysis

Here's how you might implement sentiment analysis in a React application using a third-party API:

\`\`\`tsx
import React, { useState } from 'react';

function SentimentAnalyzer() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState<null | { score: number }>(null);
  const [loading, setLoading] = useState(false);

  const analyzeSentiment = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/sentiment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      
      const data = await response.json();
      setSentiment(data);
    } catch (err) {
      console.error('Error analyzing sentiment:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Sentiment Analyzer</h2>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to analyze sentiment"
        rows={4}
        cols={50}
      />
      <button onClick={analyzeSentiment} disabled={loading || !text}>
        {loading ? 'Analyzing...' : 'Analyze Sentiment'}
      </button>
      
      {sentiment && (
        <div>
          <h3>Result:</h3>
          <p>Sentiment score: {sentiment.score} 
            ({sentiment.score > 0 ? 'Positive' : sentiment.score < 0 ? 'Negative' : 'Neutral'})
          </p>
        </div>
      )}
    </div>
  );
}

export default SentimentAnalyzer;
\`\`\`

## Ethical Considerations

When implementing AI in your applications, consider:

- Data privacy and security
- Bias in training data
- Transparency about AI usage
- Providing human fallback options

## Conclusion

AI opens up exciting possibilities for developers to create more intelligent, responsive applications. Whether you're building a content recommendation system or adding natural language capabilities, the tools available today make AI more accessible than ever.

In future posts, I'll dive deeper into specific AI implementations and how to integrate them effectively into your applications.
    `,
    coverImage: "https://placehold.co/1200x630/0f172a/ffffff?text=AI+in+Modern+Applications",
    author: "Betala Shasi Kiran",
    publishedDate: "May 3, 2025",
    tags: ["AI", "Machine Learning", "Software Development"]
  },
  {
    id: "3",
    title: "Building Responsive UIs with Tailwind CSS",
    slug: "building-responsive-uis-with-tailwind-css",
    excerpt: "Learn how to create beautiful, responsive user interfaces with the utility-first CSS framework.",
    content: `
# Building Responsive UIs with Tailwind CSS

Tailwind CSS has revolutionized the way many developers approach styling web applications. As a utility-first CSS framework, it provides low-level utility classes that let you build completely custom designs without leaving your HTML.

## Why Tailwind CSS?

Traditional CSS frameworks like Bootstrap provide pre-designed components that can speed up development but often lead to similar-looking websites. Tailwind takes a different approach by providing utility classes that you combine to create your own unique designs.

Benefits include:
- No more naming CSS classes
- Faster development with predefined utilities
- Consistent spacing, colors, and other design tokens
- Easy responsive design
- Smaller file sizes in production with PurgeCSS

## Getting Started

To add Tailwind to a React project:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Configure your template paths in \`tailwind.config.js\`:

\`\`\`js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

Add Tailwind directives to your CSS:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## Building a Responsive Card Component

Here's a simple example of building a responsive card component with Tailwind:

\`\`\`tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  tags 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
\`\`\`

## Responsive Design with Tailwind

Tailwind makes responsive design intuitive with breakpoint prefixes:

\`\`\`html
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards will be 1 column on mobile, 2 on tablets, 3 on desktops */}
  <ProjectCard ... />
  <ProjectCard ... />
  <ProjectCard ... />
</div>
\`\`\`

## Dark Mode

Tailwind also makes implementing dark mode simple:

\`\`\`jsx
// In tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  // ...
}

// In your component
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  Dark mode compatible content
</div>
\`\`\`

## Conclusion

Tailwind CSS provides a powerful approach to styling that can significantly speed up your development workflow. While there is a learning curve to memorize the utility classes, the productivity gains make it well worth the investment.

In future posts, I'll explore more advanced Tailwind techniques and how to customize it for your design system!
    `,
    coverImage: "https://placehold.co/1200x630/1e3a8a/ffffff?text=Tailwind+CSS",
    author: "Betala Shasi Kiran",
    publishedDate: "May 5, 2025",
    tags: ["CSS", "Tailwind", "UI Design", "Web Development"]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts];
}

export function getRecentBlogPosts(count: number = 3): BlogPost[] {
  return [...blogPosts].slice(0, count);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}