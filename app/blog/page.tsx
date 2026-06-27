"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react"

const categories = [
  "All",
  "Training",
  "Nutrition",
  "Recovery",
  "Mindset",
  "Success Stories",
  "Tips & Tricks",
]

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Building Muscle Mass",
    excerpt: "Discover the science-backed strategies for maximizing muscle growth through proper training, nutrition, and recovery protocols.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=500&fit=crop",
    category: "Training",
    author: "Marcus Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "March 10, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "5 Nutrition Myths Debunked by Science",
    excerpt: "Separating fact from fiction when it comes to popular nutrition advice. What the research really says about carbs, protein timing, and more.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    category: "Nutrition",
    author: "Dr. Sarah Williams",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    date: "March 8, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 3,
    title: "The Importance of Sleep for Athletic Performance",
    excerpt: "How quality sleep affects your gains, recovery, and overall athletic performance. Plus tips for optimizing your sleep routine.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=500&fit=crop",
    category: "Recovery",
    author: "James Thompson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "March 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Mental Toughness: Training Your Mind Like Your Body",
    excerpt: "Building mental resilience is just as important as physical strength. Learn techniques used by elite athletes to stay focused and motivated.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    category: "Mindset",
    author: "Emily Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "March 3, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "From Couch to Competition: John's Transformation",
    excerpt: "Read how John went from a sedentary lifestyle to competing in his first triathlon in just 18 months with the help of APEX trainers.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
    category: "Success Stories",
    author: "APEX Team",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    date: "February 28, 2026",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "10 Quick Workout Tips for Busy Professionals",
    excerpt: "Short on time? These efficient training strategies will help you maximize results even with a packed schedule.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
    category: "Tips & Tricks",
    author: "Marcus Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "February 25, 2026",
    readTime: "4 min read",
  },
  {
    id: 7,
    title: "Understanding Progressive Overload",
    excerpt: "The fundamental principle behind all strength gains. Learn how to properly implement progressive overload in your training.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&h=500&fit=crop",
    category: "Training",
    author: "Dr. Sarah Williams",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    date: "February 22, 2026",
    readTime: "6 min read",
  },
  {
    id: 8,
    title: "Pre and Post Workout Nutrition Guide",
    excerpt: "What to eat before and after your workouts to fuel performance and optimize recovery. A complete guide with meal ideas.",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&h=500&fit=crop",
    category: "Nutrition",
    author: "James Thompson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "February 20, 2026",
    readTime: "8 min read",
  },
  {
    id: 9,
    title: "The Power of Active Recovery",
    excerpt: "Why rest days don't mean sitting on the couch. Learn about active recovery techniques that accelerate your progress.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
    category: "Recovery",
    author: "Emily Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "February 18, 2026",
    readTime: "5 min read",
  },
]

function FeaturedPost({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/20 rounded-full">
            {post.category}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl text-foreground mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground mb-4 line-clamp-2 max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-foreground">{post.author}</span>
            </div>
            <span className="text-muted-foreground">|</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <ScrollReveal delay={index * 100}>
      <Link href={`/blog/${post.id}`} className="group block h-full">
        <article className="h-full rounded-2xl overflow-hidden glass border border-border hover:border-primary/50 transition-all duration-300">
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium text-primary bg-background/90 backdrop-blur rounded-full">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-foreground">{post.author}</span>
              </div>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  )
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const featuredPosts = blogPosts.filter(post => post.featured)
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch && !post.featured
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                APEX Blog
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl mb-6">
                <span className="text-foreground">FITNESS</span>
                <br />
                <span className="gradient-text">INSIGHTS & TIPS</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert advice, training tips, nutrition guides, and inspiring stories to fuel your fitness journey.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border sticky top-20 z-30 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl text-foreground mb-8">
              FEATURED <span className="gradient-text">ARTICLES</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <FeaturedPost post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-foreground">
                ALL <span className="gradient-text">ARTICLES</span>
              </h2>
              <p className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
              </p>
            </div>
          </ScrollReveal>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-foreground mb-4">
                STAY <span className="gradient-text">INFORMED</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for weekly fitness tips, nutrition advice, and exclusive content delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <p className="mt-4 text-sm text-muted-foreground">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="text-muted-foreground flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Popular Topics:
              </span>
              {["Muscle Building", "Weight Loss", "HIIT", "Strength Training", "Flexibility", "Nutrition Plans", "Mental Health", "Recovery"].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 text-sm glass rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 border border-transparent transition-all duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
