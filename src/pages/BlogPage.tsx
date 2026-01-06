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


// Blog posts - Veterans TMS Therapy
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
    readTime: '12 min read',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f00dd3f4-cea1-4918-8fec-5976198e195f.webp',
    featured: true,
    rating: 5
  },
  {
    id: 2,
    title: 'Inside the VA & Veterans\' Mental Health: How TMS Fits Into Modern PTSD Treatment',
    excerpt: 'Educational guide explaining the relationship between VA programs and TMS therapy, and how veterans can access care through VA-approved or private options.',
    category: 'mental-health',
    author: 'Dr. Apollo Thomas',
    date: new Date(2024, 0, 20).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: '15 min read',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/dd7dd986-540f-4359-99af-39f398491cf0.webp',
    featured: false,
    rating: 5
  },
  {
    id: 3,
    title: 'Understanding VA Disability Benefits for Depression, Anxiety & PTSD',
    excerpt: 'Complete guide to obtaining VA disability benefits for mental health conditions. Learn about eligibility, rating percentages, application process, and how much the VA pays.',
    category: 'mental-health',
    author: 'Dr. Apollo Thomas',
    date: new Date(2024, 0, 25).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: '18 min read',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp',
    featured: false,
    rating: 5
  },
  {
    id: 4,
    title: 'TMS vs Medication: Why Veterans Are Turning to Magnetic Stimulation for Depression Relief',
    excerpt: 'Comprehensive comparison of TMS therapy and medication for veterans with depression. Discover why veterans are choosing magnetic stimulation over traditional antidepressants.',
    category: 'tms-therapy',
    author: 'Dr. Apollo Thomas',
    date: new Date(2024, 0, 28).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1532679793267-861196432d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2NlbmljJTIwaW1hZ2UlMjBzaG93Y2FzaW5nJTIwYSUyMHNlcmVuZSUyMGxhbmRzY2FwZSUyMHdpdGglMjB2aWJyYW50JTIwY29sb3JzJTIwYW5kJTIwbmF0dXJhbCUyMGJlYXV0eS58ZW58MHx8fHwxNzYyNzc4Mzc1fDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    featured: false,
    rating: 5
  },
  {
    id: 5,
    title: 'How to Help Veterans with PTSD: Therapy, TMS, and Beyond',
    excerpt: 'Compassionate guide for helping veterans with PTSD, including therapy options, TMS treatment, local resources, and support strategies for families.',
    category: 'mental-health',
    author: 'Dr. Apollo Thomas',
    date: new Date(2024, 1, 1).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: '17 min read',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/02c362bd-cde2-431d-8820-a07a14939638.webp',
    featured: false,
    rating: 5
  },
  {
    id: 6,
    title: 'Understanding PTSD in Veterans: Signs, Symptoms, and Treatment Paths',
    excerpt: 'A comprehensive guide to recognizing PTSD in war veterans and Vietnam vets, with modern treatment options including TMS therapy.',
    category: 'mental-health',
    author: 'Dr. Keerthy Sunder',
    date: new Date(2024, 1, 5).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: '14 min read',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/02c362bd-cde2-431d-8820-a07a14939638.webp',
    featured: false,
    rating: 5
  },
  {
    id: 7,
    title: 'TMS for Anxiety in Veterans: A Promising Path Beyond Medication',
    excerpt: 'Discover how TMS therapy helps veterans manage anxiety through brain regulation, offering hope beyond traditional medications.',
    category: 'tms-therapy',
    author: 'Dr. Keerthy Sunder',
    date: new Date(2024, 1, 8).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: '13 min read',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9705b922-d0fc-4d29-be10-acd507ce308c.webp',
    featured: false,
    rating: 5
  },
  {
    id: 8,
    title: 'TMS for Migraine Relief in Veterans: How Brain Stimulation Is Changing Lives',
    excerpt: 'Learn how TMS addresses chronic migraines in veterans, including comorbidity with PTSD and depression, plus VA disability information.',
    category: 'tms-therapy',
    author: 'Dr. Keerthy Sunder',
    date: new Date(2024, 1, 12).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: '15 min read',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp',
    featured: false,
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
      <div className="pt-20 pb-8 bg-gradient-to-br from-purple-50 via-violet-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Mental Health <span className="bg-gradient-to-r from-[#572670] via-[#7B4D9E] to-[#572670] bg-clip-text text-transparent">Insights</span>
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
            
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-[#572670] to-[#7B4D9E] text-white">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="bg-white/20 text-white border-white/30 mb-4 w-fit">
                    {blogCategories.find((cat) => cat.id === featuredPost.category)?.label}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-6 text-purple-100">
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
                  
                  <Button asChild variant="secondary" className="w-fit bg-white text-[#572670] hover:bg-gray-50">
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
                className="text-sm data-[state=active]:bg-[#572670] data-[state=active]:text-white">

                  {category.label}
                </TabsTrigger>
              )}
            </TabsList>

            {blogCategories.map((category) =>
            <TabsContent key={category.id} value={category.id} className="mt-0">
                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {regularPosts.map((post) => {
                  const postLinks: {[key: number]: string;} = {
                    1: '/blog/veterans-tms-therapy',
                    2: '/blog/va-veterans-ptsd-tms-treatment',
                    3: '/blog/va-disability-benefits-depression-anxiety-ptsd',
                    4: '/blog/tms-vs-medication-veterans-depression',
                    5: '/blog/how-to-help-veterans-ptsd',
                    6: '/blogs/understanding-ptsd-veterans',
                    7: '/blogs/tms-anxiety-veterans',
                    8: '/blogs/tms-migraine-veterans'
                  };
                  return (
                    <a
                      key={post.id}
                      href={postLinks[post.id] || '/blog'}>

                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-[#572670]/30">
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
                        <CardTitle className="text-xl group-hover:text-[#572670] transition-colors line-clamp-2">
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
                          <Button variant="ghost" size="sm" className="text-[#572670] hover:text-[#572670]/80 p-0">
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    </a>);

                })}
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
      <div className="py-12 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest mental health insights, research updates, and expert advice delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#572670] focus:border-transparent" />

            <Button className="bg-[#572670] hover:bg-[#572670]/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>);

};

export default BlogPage;