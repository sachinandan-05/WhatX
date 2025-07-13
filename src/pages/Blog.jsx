import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    {
      id: 1,
      title: "AI is eating the world",
      excerpt: "How artificial intelligence is transforming everything we know about technology and society.",
      author: "Alex Chen",
      date: "Dec 15",
      category: "AI",
      readTime: "3 min",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "The future of design",
      excerpt: "Minimalism meets functionality in the next generation of digital experiences.",
      author: "Maya Singh",
      date: "Dec 12",
      category: "Design",
      readTime: "2 min",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Building better products",
      excerpt: "What we learned shipping 50+ features this year and how it changed our approach.",
      author: "Jordan Kim",
      date: "Dec 10",
      category: "Product",
      readTime: "4 min",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Code that doesn't suck",
      excerpt: "Simple principles for writing maintainable, scalable, and actually readable code.",
      author: "Sam Rivera",
      date: "Dec 8",
      category: "Tech",
      readTime: "5 min",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Remote work reality",
      excerpt: "Two years in: what actually works and what definitely doesn't in distributed teams.",
      author: "Casey Park",
      date: "Dec 5",
      category: "Culture",
      readTime: "3 min",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Startup survival guide",
      excerpt: "Lessons from building a company from 0 to $1M ARR in 18 months.",
      author: "Taylor Wong",
      date: "Dec 1",
      category: "Business",
      readTime: "6 min",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const categories = ['All', 'AI', 'Design', 'Product', 'Tech', 'Culture', 'Business'];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-500">
            Thoughts, stories, and ideas
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8 h-full hover:scale-105 transition-transform duration-300 border border-gray-100">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.gradient} text-white`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white text-sm font-bold`}>
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🤷‍♂️</div>
            <p className="text-gray-500">No posts found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}