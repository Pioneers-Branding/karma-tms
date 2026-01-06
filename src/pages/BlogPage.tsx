import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Clock, User, ArrowRight, Star } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  rating?: number;
}

const blogCategories = [
{ id: 'all', label: 'All Posts' },
{ id: 'tms-therapy', label: 'TMS Therapy' },
{ id: 'mental-health', label: 'Mental Health' },
{ id: 'research', label: 'Research' },
{ id: 'patient-stories', label: 'Patient Stories' },
{ id: 'wellness', label: 'Wellness Tips' }];


// Single blog post - Veterans TMS Therapy
const generateUniqueBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [
  {
    id: 1,
    title: 'How TMS Therapy Helps Veterans Heal: A New Hope for PTSD, Depression & Anxiety',
    excerpt: 'Discover how TMS therapy offers new hope for veterans struggling with PTSD, depression, and anxiety. Learn about VA hospital availability and treatment success rates.',
    category: 'tms-therapy',
    author: 'Dr. Keerthy Sunder',
    date: new Date(2024, 0, 15).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: '8 min read',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/02c362bd-cde2-431d-8820-a07a14939638.webp',
    featured: true,
    rating: 5
  }];

  return posts;
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [allPosts] = useState<BlogPost[]>(generateUniqueBlogPosts());
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  const POSTS_PER_LOAD = 6;

  // Initialize with first batch of posts
  useEffect(() => {
    const initialPosts = allPosts.slice(0, POSTS_PER_LOAD);
    setDisplayedPosts(initialPosts);
    setHasMore(initialPosts.length < allPosts.length);
  }, []);

  // Reset displayed posts when category changes
  useEffect(() => {
    const filteredPosts = activeCategory === 'all' ?
    allPosts :
    allPosts.filter((post) => post.category === activeCategory);

    const initialPosts = filteredPosts.slice(0, POSTS_PER_LOAD);
    setDisplayedPosts(initialPosts);
    setHasMore(initialPosts.length < filteredPosts.length);
  }, [activeCategory]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading, displayedPosts.length, activeCategory]);

  const loadMorePosts = async () => {
    if (loading) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const filteredPosts = activeCategory === 'all' ?
      allPosts :
      allPosts.filter((post) => post.category === activeCategory);

      const currentCount = displayedPosts.length;
      const nextPosts = filteredPosts.slice(currentCount, currentCount + POSTS_PER_LOAD);

      if (nextPosts.length > 0) {
        setDisplayedPosts((prev) => [...prev, ...nextPosts]);
      }

      // Check if there are more posts to load
      const totalDisplayed = currentCount + nextPosts.length;
      setHasMore(totalDisplayed < filteredPosts.length);

      setLoading(false);
    }, 800);
  };

  const filteredPosts = displayedPosts.filter((post) =>
  activeCategory === 'all' || post.category === activeCategory
  );

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <Navigation />
      
      {/* Header Section */}
      <div className="pt-20 pb-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Mental Health <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed with the latest research, treatments, and expert insights in mental health care from our team of specialists.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {featuredPost &&
      <div className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Featured Article</span>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="bg-white/20 text-white border-white/30 mb-4 w-fit">
                    {blogCategories.find((cat) => cat.id === featuredPost.category)?.label}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-6 text-blue-100">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button asChild variant="secondary" className="w-fit bg-white text-blue-600 hover:bg-blue-50">
                    <a href="/blog/veterans-tms-therapy">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="relative h-64 lg:h-auto">
                  <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      }

      {/* Category Tabs and Posts */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-gray-50">
              {blogCategories.map((category) =>
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white">

                  {category.label}
                </TabsTrigger>
              )}
            </TabsList>

            {blogCategories.map((category) =>
            <TabsContent key={category.id} value={category.id} className="mt-0">
                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {regularPosts.map((post) =>
                <a key={post.id} href="/blog/veterans-tms-therapy">
                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />

                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-700">
                            {blogCategories.find((cat) => cat.id === post.category)?.label}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 line-clamp-2">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-2">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{post.date}</span>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )}
                </div>

                {/* Loading Skeletons */}
                {loading &&
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {Array.from({ length: 3 }).map((_, i) =>
                <Card key={i} className="overflow-hidden">
                        <Skeleton className="w-full h-48" />
                        <CardHeader>
                          <Skeleton className="h-6 w-3/4" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-2/3" />
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                        </CardContent>
                      </Card>
                )}
                  </div>
              }

                {/* Infinite Scroll Trigger */}
                {hasMore && !loading &&
              <div ref={observerRef} className="h-10 flex items-center justify-center">
                    <div className="text-gray-500 text-sm">Scroll for more...</div>
                  </div>
              }

                {!hasMore && regularPosts.length > 0 &&
              <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">You've reached the end of our blog posts!</p>
                    <Button variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      Back to Top
                    </Button>
                  </div>
              }

                {regularPosts.length === 0 && !loading &&
              <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No posts found in this category.</p>
                  </div>
              }
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest mental health insights, research updates, and expert advice delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />

            <Button className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>);

};

export default BlogPage;