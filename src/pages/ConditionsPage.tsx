import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Brain, Heart, Shield, Zap, Users, Moon, Activity, Target } from "lucide-react";

const ConditionsPage = () => {
  const conditions = [
    {
      title: "Depression",
      description: "Evidence-based TMS treatment for major depressive disorder, treatment-resistant depression, and seasonal affective disorder.",
      icon: Brain,
      link: "/depression/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Anxiety Disorders",
      description: "Effective treatment for generalized anxiety disorder, panic disorder, and social anxiety with non-invasive TMS therapy.",
      icon: Heart,
      link: "/anxiety/",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "OCD",
      description: "FDA-cleared TMS treatment for obsessive-compulsive disorder with proven clinical effectiveness.",
      icon: Shield,
      link: "/ocd/",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "PTSD",
      description: "Innovative TMS therapy for post-traumatic stress disorder, helping veterans and trauma survivors find relief.",
      icon: Zap,
      link: "/conditions/ptsd",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Bipolar Disorder",
      description: "Specialized TMS protocols for bipolar disorder treatment, supporting mood stabilization and reducing episodes.",
      icon: Activity,
      link: "/conditions/bipolar",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Addiction",
      description: "TMS therapy targeting brain circuits involved in addiction, supporting recovery and reducing cravings.",
      icon: Target,
      link: "/conditions/addiction",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Stress Management",
      description: "Advanced stress management techniques using TMS therapy and neurofeedback for lasting relief.",
      icon: Moon,
      link: "/stress-management/",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Women's Mood Disorders",
      description: "Specialized care for perinatal depression, PMDD, and other mood disorders unique to women's health.",
      icon: Users,
      link: "/conditions/womens-mood",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <>
      <SEO 
        title="Mental Health Conditions Treated at KarmaTMS | Depression, Anxiety, OCD & More"
        description="KarmaTMS treats depression, anxiety, OCD, PTSD, bipolar disorder, and addiction with advanced TMS therapy. Expert mental health care in Palm Springs."
        keywords="KarmaTMS conditions, depression treatment, anxiety disorders, OCD treatment, PTSD therapy, bipolar treatment, mental health conditions"
        canonical="/conditions"
      />
      <StructuredData 
        type="breadcrumb"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Conditions We Treat", url: "/conditions" }
        ]}
      />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Mental Health Conditions Treated with KarmaTMS Therapy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Advanced TMS therapy and comprehensive psychiatric care for a wide range of mental health conditions
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/quiz/">Take Self-Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white hover:text-blue-600" asChild>
                  <Link to="/contact/">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conditions.map((condition, index) => {
                const Icon = condition.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${condition.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{condition.title}</CardTitle>
                      <CardDescription className="text-base">
                        {condition.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link to={condition.link}>
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Not Sure Which Treatment Is Right for You?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Take our quick self-assessment quiz or schedule a free consultation with our team to discuss your specific needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/quiz/">Take Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact/">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
};

export default ConditionsPage;
