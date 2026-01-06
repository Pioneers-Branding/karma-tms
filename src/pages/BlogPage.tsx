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


// Blog posts - Veterans TMS Therapy with fixed images
const allBlogPosts: BlogPost[] = [
{
  id: 33,
  title: 'Does TMS Therapy Work for Anxiety?',
  excerpt: 'Discover how TMS therapy effectively treats anxiety disorders. Learn about success rates, benefits, treatment process, and what to expect from TMS for anxiety relief.',
  category: 'tms-therapy',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 10, 28).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '14 min read',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9705b922-d0fc-4d29-be10-acd507ce308c.webp',
  featured: false,
  rating: 5
},
{
  id: 32,
  title: 'How to Avoid Stress During the Holidays?',
  excerpt: 'Discover practical strategies to manage holiday stress with 7 actionable tips. Learn how to maintain mental wellness during the holiday season.',
  category: 'wellness',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 10, 22).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '10 min read',
  image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&h=630&fit=crop',
  featured: false,
  rating: 5
},
{
  id: 31,
  title: 'How Does ADHD Treatment Work?',
  excerpt: 'Comprehensive guide to ADHD treatment including medication, behavioral therapy, CBT, and lifestyle modifications. Learn how effective ADHD management works.',
  category: 'mental-health',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 10, 15).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '12 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764569001/35_morbs0.png',
  featured: false,
  rating: 5
},
{
  id: 28,
  title: 'Exploring the Multifaceted Dynamics of Suicide in the Elderly Population',
  excerpt: 'A comprehensive analysis of suicide risk factors, prevention strategies, and mental health interventions for elderly populations.',
  category: 'tms-therapy',
  author: 'karmatmsdev',
  date: new Date(2024, 7, 2).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '15 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138579/30_lx4lub.png',
  featured: false,
  rating: 5
},
{
  id: 29,
  title: 'Psychiatrists Boost Well-Being Through Expert Care For Mental Health',
  excerpt: 'Discover how psychiatrists provide comprehensive mental health care through evidence-based treatments, personalized approaches, and innovative therapies like TMS.',
  category: 'tms-therapy',
  author: 'karmatmsdev',
  date: new Date(2024, 6, 2).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '12 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138578/31_n1knmb.png',
  featured: false,
  rating: 5
},
{
  id: 30,
  title: 'TMS Therapy for Treatment Resistant Depression',
  excerpt: 'Comprehensive guide to TMS therapy as an effective treatment for treatment-resistant depression, including success rates, benefits, and what to expect.',
  category: 'tms-therapy',
  author: 'karmatmsdev',
  date: new Date(2024, 4, 28).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '14 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138579/32_og3ayd.png',
  featured: false,
  rating: 5
},
{
  id: 25,
  title: 'Prioritizing Mental Healthcare in Rural Communities',
  excerpt: 'Addressing mental health access challenges in rural areas. Discover innovative solutions, telehealth options, and resources for improving mental healthcare.',
  category: 'tms-therapy',
  author: 'karmatms',
  date: new Date(2024, 9, 1).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '14 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138578/27_mpunrs.png',
  featured: false,
  rating: 5
},
{
  id: 26,
  title: 'Discover the Impact of Social Media on Your Mental Well-being',
  excerpt: 'Understanding how social media affects mental health. Learn about negative effects, warning signs, and strategies for healthier social media habits.',
  category: 'tms-therapy',
  author: 'karmatmsdev',
  date: new Date(2024, 7, 16).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '13 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138578/28_mmumyo.png',
  featured: false,
  rating: 5
},
{
  id: 27,
  title: 'Most Common Reasons People Seek Psychotherapy',
  excerpt: 'Comprehensive guide on the most common reasons people seek therapy, from depression and anxiety to personal growth. Learn when to seek help.',
  category: 'tms-therapy',
  author: 'karmatmsdev',
  date: new Date(2024, 7, 7).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '15 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138578/29_xocrto.png',
  featured: false,
  rating: 5
},
{
  id: 22,
  title: 'Understanding the Complex Connection between Depression and Erectile Dysfunction',
  excerpt: 'Explore the bidirectional relationship between depression and erectile dysfunction. Learn about biological factors, psychological impact, and comprehensive treatment options.',
  category: 'mental-health',
  author: 'karmatmsdev',
  date: new Date(2024, 9, 24).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '15 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138577/24_guuewg.png',
  featured: false,
  rating: 5
},
{
  id: 23,
  title: 'Connecting with Teens & Nurturing Open Communication on Mental Wellness',
  excerpt: 'Learn effective strategies for building trust and fostering open communication about mental health with teenagers. Recognize warning signs and create a supportive environment.',
  category: 'mental-health',
  author: 'karmatmsdev',
  date: new Date(2024, 9, 17).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '14 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138577/25_sumod0.png',
  featured: false,
  rating: 5
},
{
  id: 24,
  title: 'A Guide to Mental Health Resources for Coping with Community Violence',
  excerpt: 'Comprehensive guide on understanding trauma, accessing mental health resources, and building resilience after exposure to community violence.',
  category: 'mental-health',
  author: 'karmatmsdev',
  date: new Date(2024, 9, 10).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '16 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138577/26_yez4z4.png',
  featured: false,
  rating: 5
},
{
  id: 19,
  title: 'Empowering Youth: Strategies for Building Emotional Resilience',
  excerpt: 'Discover proven strategies for building emotional resilience in young people. Learn practical tools and techniques to help youth develop mental wellness.',
  category: 'mental-health',
  author: 'karmatms',
  date: new Date(2024, 11, 28).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '10 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/20_xdad6g.png',
  featured: false,
  rating: 5
},
{
  id: 20,
  title: 'The Role of Family Dynamics in Mental Health Recovery',
  excerpt: 'Discover how family relationships and dynamics influence mental health outcomes and recovery processes. Learn strategies for creating supportive family environments.',
  category: 'mental-health',
  author: 'karmatms',
  date: new Date(2024, 11, 19).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '12 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376735/21_tyzclt.png',
  featured: false,
  rating: 5
},
{
  id: 21,
  title: 'Managing Anxiety Triggers in Everyday Life',
  excerpt: 'Learn practical strategies to identify and manage anxiety triggers effectively in your daily routine. Master techniques for lasting anxiety relief.',
  category: 'mental-health',
  author: 'karmatms',
  date: new Date(2024, 11, 18).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '11 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376737/22_wiizht.png',
  featured: false,
  rating: 5
},
{
  id: 1,
  title: 'How TMS Therapy Helps Veterans Heal: A New Hope for PTSD, Depression & Anxiety',
  excerpt: 'Discover how TMS therapy offers new hope for veterans struggling with PTSD, depression, and anxiety. Learn about VA hospital availability and treatment success rates.',
  category: 'tms-therapy',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 8, 15).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '12 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763036078/0_zutd9g.png',
  featured: true,
  rating: 5
},
{
  id: 9,
  title: 'How TMS is helping Veterans Address Mental Health Challenges?',
  excerpt: 'Discover how TMS therapy offers new hope for veterans struggling with PTSD, depression, and anxiety. Learn about VA hospital availability and treatment success rates.',
  category: 'tms-therapy',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 7, 11).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '12 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/10_ha447l.png',
  featured: false,
  rating: 5
},
{
  id: 10,
  title: 'Why does TMS Require Multiple Sessions?',
  excerpt: 'Understand why TMS therapy requires multiple sessions for lasting results. Learn about neuroplasticity, treatment protocols, and what to expect during your TMS journey.',
  category: 'tms-therapy',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 6, 22).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '10 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/11_itsgyr.png',
  featured: false,
  rating: 5
},
{
  id: 11,
  title: 'What are the 4 A\'s of Stress Management?',
  excerpt: 'Discover the 4 A\'s of stress management: Avoid, Alter, Adapt, and Accept. Learn practical, evidence-based strategies to reduce stress and improve your mental health.',
  category: 'wellness',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 6, 11).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '12 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/12_t62v1m.png',
  featured: false,
  rating: 5
},
{
  id: 12,
  title: 'Is TMS Therapy Permanent?',
  excerpt: 'Explore the long-term effectiveness of TMS therapy and understand how this innovative treatment can provide lasting relief from depression and other mental health conditions.',
  category: 'tms-therapy',
  author: 'KarmatmsAdmin',
  date: new Date(2025, 5, 24).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '10 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/13_nl6y75.png',
  featured: false,
  rating: 5
},
{
  id: 13,
  title: 'Is TMS Therapy Legitimate?',
  excerpt: 'Learn about the scientific evidence and FDA approval behind TMS therapy, and discover why it has become a trusted treatment for depression and mental health conditions.',
  category: 'tms-therapy',
  author: 'KarmatmsAdmin',
  date: new Date(2025, 5, 5).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '8 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/14_dszfwi.png',
  featured: false,
  rating: 5
},
{
  id: 14,
  title: 'How Successful is TMS Treatment?',
  excerpt: 'Discover the success rates of TMS treatment based on clinical research and real patient outcomes. Learn what factors contribute to effective TMS therapy results.',
  category: 'tms-therapy',
  author: 'KarmatmsAdmin',
  date: new Date(2025, 4, 28).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '9 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/15_ym6n6b.png',
  featured: false,
  rating: 5
},
{
  id: 15,
  title: 'The Impact of Screen Time on Mental Health',
  excerpt: 'Understand how excessive screen time affects mental health and well-being. Learn practical strategies to balance digital life with mental wellness.',
  category: 'mental-health',
  author: 'karmatms',
  date: new Date(2025, 1, 4).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '11 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/16_ekice5.png',
  featured: false,
  rating: 5
},
{
  id: 16,
  title: 'Mindfulness Practices for Stress Management',
  excerpt: 'Discover evidence-based mindfulness practices for stress management. Learn meditation techniques, breathing exercises, and daily practices to reduce anxiety.',
  category: 'wellness',
  author: 'karmatms',
  date: new Date(2025, 0, 28).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '12 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/17_dnhevc.png',
  featured: false,
  rating: 5
},
{
  id: 17,
  title: 'Tech And Mental Health: The Impact Of Technology On Mental Health',
  excerpt: 'Explore how technology affects mental health—both positively and negatively. Learn about social media impacts and digital wellbeing strategies.',
  category: 'mental-health',
  author: 'karmatms',
  date: new Date(2025, 0, 22).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '13 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/18_jkbrlx.png',
  featured: false,
  rating: 5
},
{
  id: 18,
  title: 'Mental Health First Aid: How to Help Someone in Crisis',
  excerpt: 'Learn essential mental health first aid skills. Recognize crisis signs, provide immediate support, and connect people to professional help.',
  category: 'mental-health',
  author: 'karmatms',
  date: new Date(2025, 0, 19).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '15 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376735/19_luad51.png',
  featured: false,
  rating: 5
},
{
  id: 2,
  title: 'Inside the VA & Veterans\' Mental Health: How TMS Fits Into Modern PTSD Treatment',
  excerpt: 'Educational guide explaining the relationship between VA programs and TMS therapy, and how veterans can access care through VA-approved or private options.',
  category: 'mental-health',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 8, 22).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '15 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033664/1_w61pyl.png',
  featured: false,
  rating: 5
},
{
  id: 3,
  title: 'Understanding VA Disability Benefits for Depression, Anxiety & PTSD',
  excerpt: 'Complete guide to obtaining VA disability benefits for mental health conditions. Learn about eligibility, rating percentages, application process, and how much the VA pays.',
  category: 'mental-health',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 8, 29).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '18 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033665/2_tv5b86.png',
  featured: false,
  rating: 5
},
{
  id: 4,
  title: 'TMS vs Medication: Why Veterans Are Turning to Magnetic Stimulation for Depression Relief',
  excerpt: 'Comprehensive comparison of TMS therapy and medication for veterans with depression. Discover why veterans are choosing magnetic stimulation over traditional antidepressants.',
  category: 'tms-therapy',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 9, 6).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '16 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033665/3_zl830g.png',
  featured: false,
  rating: 5
},
{
  id: 5,
  title: 'How to Help Veterans with PTSD: Therapy, TMS, and Beyond',
  excerpt: 'Compassionate guide for helping veterans with PTSD, including therapy options, TMS treatment, local resources, and support strategies for families.',
  category: 'mental-health',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 9, 13).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '17 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/4_toy7pb.png',
  featured: false,
  rating: 5
},
{
  id: 6,
  title: 'Understanding PTSD in Veterans: Signs, Symptoms, and Treatment Paths',
  excerpt: 'A comprehensive guide to recognizing PTSD in war veterans and Vietnam vets, with modern treatment options including TMS therapy.',
  category: 'mental-health',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 9, 20).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '14 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/5_kvtlku.png',
  featured: false,
  rating: 5
},
{
  id: 7,
  title: 'TMS for Anxiety in Veterans: A Promising Path Beyond Medication',
  excerpt: 'Discover how TMS therapy helps veterans manage anxiety through brain regulation, offering hope beyond traditional medications.',
  category: 'tms-therapy',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 9, 27).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '13 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/6_rrkhgo.png',
  featured: false,
  rating: 5
},
{
  id: 8,
  title: 'TMS for Migraine Relief in Veterans: How Brain Stimulation Is Changing Lives',
  excerpt: 'Learn how TMS addresses chronic migraines in veterans, including comorbidity with PTSD and depression, plus VA disability information.',
  category: 'tms-therapy',
  author: 'Dr. Keerthy Sunder',
  date: new Date(2025, 10, 10).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  readTime: '15 min read',
  image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033673/7_lnxkrv.png',
  featured: false,
  rating: 5
}];


const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  const POSTS_PER_LOAD = 6;

  // Helper function to parse date string back to Date object for sorting
  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  // Helper function to get sorted posts
  const getSortedPosts = (posts: BlogPost[]): BlogPost[] => {
    return [...posts].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
    });
  };

  // Initialize with first batch of posts
  useEffect(() => {
    const sortedPosts = getSortedPosts(allBlogPosts);
    const initialPosts = sortedPosts.slice(0, POSTS_PER_LOAD);
    setDisplayedPosts(initialPosts);
    setHasMore(initialPosts.length < sortedPosts.length);
  }, []);

  // Reset displayed posts when category changes
  useEffect(() => {
    const filteredPosts = activeCategory === 'all' ?
    allBlogPosts :
    allBlogPosts.filter((post) => post.category === activeCategory);

    const sortedPosts = getSortedPosts(filteredPosts);
    const initialPosts = sortedPosts.slice(0, POSTS_PER_LOAD);
    setDisplayedPosts(initialPosts);
    setHasMore(initialPosts.length < sortedPosts.length);
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
      allBlogPosts :
      allBlogPosts.filter((post) => post.category === activeCategory);

      const sortedPosts = getSortedPosts(filteredPosts);
      const currentCount = displayedPosts.length;
      const nextPosts = sortedPosts.slice(currentCount, currentCount + POSTS_PER_LOAD);

      if (nextPosts.length > 0) {
        setDisplayedPosts((prev) => [...prev, ...nextPosts]);
      }

      // Check if there are more posts to load
      const totalDisplayed = currentCount + nextPosts.length;
      setHasMore(totalDisplayed < sortedPosts.length);

      setLoading(false);
    }, 800);
  };

  const filteredPosts = displayedPosts.filter((post) =>
  activeCategory === 'all' || post.category === activeCategory
  );

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts; // Show all posts including featured in tabs

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
      <div className="py-8 bg-white border-b border-gray-100 hidden">
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
                
                <div className="relative w-full overflow-hidden flex items-center justify-center bg-white">
                  <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-auto"
                  style={{ aspectRatio: '1.91' }} />
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
                  {regularPosts.map((post, index) => {
                  const postLinks: {[key: number]: string;} = {
                    1: '/blog/veterans-tms-therapy',
                    31: '/blogs/how-does-adhd-treatment-work',
                    32: '/blogs/how-to-avoid-stress-during-holidays',
                    33: '/blogs/DoesTMSTherapyWorkForAnxiety',
                    2: '/blog/va-veterans-ptsd-tms-treatment',
                    3: '/blog/va-disability-benefits-depression-anxiety-ptsd',
                    4: '/blog/tms-vs-medication-veterans-depression',
                    5: '/blog/how-to-help-veterans-ptsd',
                    6: '/blogs/understanding-ptsd-veterans',
                    7: '/blogs/tms-anxiety-veterans',
                    8: '/blogs/tms-migraine-veterans',
                    9: '/blog/veterans-tms-therapy',
                    10: '/blog/why-tms-requires-multiple-sessions',
                    11: '/blog/four-as-stress-management',
                    12: '/blog/is-tms-therapy-permanent',
                    13: '/blog/is-tms-therapy-legitimate',
                    14: '/blog/how-successful-tms-treatment',
                    15: '/blog/screen-time-mental-health',
                    16: '/blog/mindfulness-stress-management',
                    17: '/blog/tech-mental-health-impact',
                    18: '/blog/mental-health-first-aid',
                    19: '/blog/empowering-youth-emotional-resilience',
                    20: '/blog/family-dynamics-mental-health',
                    21: '/blog/managing-anxiety-triggers',
                    22: '/blogs/depression-erectile-dysfunction',
                    23: '/blogs/connecting-teens-mental-wellness',
                    24: '/blogs/mental-health-community-violence',
                    25: '/blog/rural-mental-healthcare',
                    26: '/blog/social-media-mental-wellbeing',
                    27: '/blog/common-reasons-psychotherapy',
                    28: '/blogs/ExploringTheMultifacetedDynamicsOfSuicideInTheElderlyPopulation',
                    29: '/blogs/PsychiatristsBoostWellBeingThroughExpertCareForMentalHealth',
                    30: '/blogs/TMSTherapyForTreatmentResistantDepression'
                  };
                  return (
                    <a
                      key={post.id}
                      href={postLinks[post.id] || '/blog'}>

                  <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-[#572670]/30 overflow-hidden">
                      <div className="relative overflow-hidden" style={{ aspectRatio: '1200/628' }}>
                        <img
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                        <div className="absolute top-4 left-4 z-10">
                          {index !== 3 && index !== 2 && index !== 1 && index !== 4 && index !== 0 ? <Badge variant="secondary" className="bg-white/90 text-gray-700 backdrop-blur-sm">
                            {blogCategories.find((cat) => cat.id === post.category)?.label}
                          </Badge> : null}
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