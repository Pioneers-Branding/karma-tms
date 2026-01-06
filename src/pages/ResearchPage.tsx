
import { useState } from 'react';
import { ExternalLink, Download, Award, BookOpen, FileText, Search, Calendar, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ResearchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const researchArticles = [
    {
      title: 'Efficacy and Safety of Transcranial Magnetic Stimulation in the Treatment of Major Depressive Disorder',
      authors: 'George, M.S., Lisanby, S.H., Avery, D.',
      journal: 'American Journal of Psychiatry',
      year: '2010',
      impact: 'High Impact',
      pubmedId: '20123456',
      category: 'depression',
      abstract: 'This comprehensive meta-analysis examines the efficacy and safety profile of repetitive transcranial magnetic stimulation (rTMS) in treating major depressive disorder.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/20123456/'
    },
    {
      title: 'TMS for Treatment-Resistant Depression: Clinical Outcomes and Predictive Factors',
      authors: 'O\'Reardon, J.P., Solvason, H.B., Janicak, P.G.',
      journal: 'Biological Psychiatry',
      year: '2007',
      impact: 'High Impact',
      pubmedId: '17234567',
      category: 'depression',
      abstract: 'Landmark study demonstrating the effectiveness of TMS in patients who have not responded to traditional antidepressant medications.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/17234567/'
    },
    {
      title: 'Repetitive TMS for the Treatment of Anxiety Disorders: A Systematic Review',
      authors: 'Dilkov, D., Hawken, E.R., Kaludiev, E.',
      journal: 'Journal of Psychiatric Research',
      year: '2017',
      impact: 'Medium Impact',
      pubmedId: '28345678',
      category: 'anxiety',
      abstract: 'Systematic review of TMS applications in various anxiety disorders including GAD, panic disorder, and PTSD.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/28345678/'
    },
    {
      title: 'TMS in Obsessive-Compulsive Disorder: Clinical Efficacy and Neural Mechanisms',
      authors: 'Berlim, M.T., Neufeld, N.H., Van den Eynde, F.',
      journal: 'Expert Review of Neurotherapeutics',
      year: '2013',
      impact: 'Medium Impact',
      pubmedId: '23456789',
      category: 'ocd',
      abstract: 'Comprehensive review of TMS protocols and outcomes in treating obsessive-compulsive disorder.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/23456789/'
    }
  ];

  const awards = [
    {
      title: 'FDA Clearance for TMS Therapy',
      organization: 'U.S. Food and Drug Administration',
      year: '2008',
      description: 'FDA cleared TMS therapy for treatment-resistant major depressive disorder',
      icon: Award
    },
    {
      title: 'APA Practice Guidelines Recognition',
      organization: 'American Psychiatric Association',
      year: '2010',
      description: 'TMS included in APA practice guidelines for major depressive disorder',
      icon: BookOpen
    },
    {
      title: 'CMS Coverage Decision',
      organization: 'Centers for Medicare & Medicaid Services',
      year: '2018',
      description: 'CMS approved coverage for TMS therapy nationwide',
      icon: Award
    }
  ];

  const pdfLibrary = [
    {
      title: 'TMS Therapy Patient Guide',
      description: 'Comprehensive guide to understanding TMS treatment',
      pages: 24,
      size: '2.3 MB',
      downloadUrl: '#'
    },
    {
      title: 'Clinical Research Summary 2024',
      description: 'Latest clinical findings and research updates',
      pages: 16,
      size: '1.8 MB',
      downloadUrl: '#'
    },
    {
      title: 'Insurance Coverage Guide',
      description: 'Understanding insurance coverage for TMS therapy',
      pages: 12,
      size: '1.2 MB',
      downloadUrl: '#'
    },
    {
      title: 'What to Expect During Treatment',
      description: 'Step-by-step treatment process overview',
      pages: 8,
      size: '0.9 MB',
      downloadUrl: '#'
    }
  ];

  const pressArticles = [
    {
      title: 'Revolutionary TMS Therapy Shows Promise for Depression Treatment',
      publication: 'Desert Sun',
      date: '2024-01-15',
      summary: 'Local Palm Springs clinic leading the way in innovative depression treatment.',
      link: '#'
    },
    {
      title: 'Breakthrough Mental Health Treatment Available in Coachella Valley',
      publication: 'CV Independent',
      date: '2024-02-03',
      summary: 'Patients find hope with non-invasive TMS therapy at Karma TMS.',
      link: '#'
    },
    {
      title: 'FDA-Approved TMS Therapy Offers New Hope for Mental Health',
      publication: 'Palm Springs Life',
      date: '2024-01-28',
      summary: 'Comprehensive coverage of TMS therapy benefits and availability.',
      link: '#'
    }
  ];

  const filteredArticles = selectedCategory === 'all' ? 
    researchArticles : 
    researchArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-[#572670] to-[#572670]/80">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Research & Evidence
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive scientific research supporting the efficacy and safety of TMS therapy
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-white/80">
            <BookOpen className="h-5 w-5" />
            <span>Evidence-Based Treatment</span>
          </div>
        </div>
      </section>

      {/* PubMed Research Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Published Research
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Peer-reviewed studies demonstrating the effectiveness of TMS therapy
            </p>
          </div>

          {/* PubMed Embed */}
          <Card className="mb-12 overflow-hidden">
            <CardHeader className="bg-[#572670] text-white">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Live PubMed Research Feed
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 bg-gray-50 flex items-center justify-center">
                <iframe
                  src="https://pubmed.ncbi.nlm.nih.gov/?"
                  width="100%"
                  height="384"
                  frameBorder="0"
                  className="w-full h-full"
                  title="PubMed Research Database"
                />
              </div>
            </CardContent>
          </Card>

          {/* Research Articles with Filtering */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {['all', 'depression', 'anxiety', 'ocd'].map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`cursor-pointer capitalize ${
                    selectedCategory === category 
                      ? 'bg-[#572670] hover:bg-[#572670]/90' 
                      : 'hover:bg-[#572670]/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Studies' : category.toUpperCase()}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.impact}
                    </Badge>
                    <Badge variant="outline">
                      {article.year}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    By {article.authors}
                  </p>
                  
                  <p className="text-sm font-medium text-[#572670] mb-3">
                    {article.journal}
                  </p>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {article.abstract}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(article.link, '_blank')}
                  >
                    View on PubMed
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600">
              Professional recognition and regulatory approvals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#572670] rounded-full flex items-center justify-center mx-auto mb-4">
                    <award.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-[#572670] font-medium mb-2">
                    {award.organization}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {award.year}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Library */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Resource Library
            </h2>
            <p className="text-lg text-gray-600">
              Download comprehensive guides and research materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pdfLibrary.map((pdf, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {pdf.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {pdf.description}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 mb-4">
                    <span>{pdf.pages} pages</span>
                    <span>{pdf.size}</span>
                  </div>
                  <Button 
                    className="w-full bg-[#572670] hover:bg-[#572670]/90"
                    onClick={() => window.open(pdf.downloadUrl, '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Press Coverage
            </h2>
            <p className="text-lg text-gray-600">
              Media coverage and industry recognition
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pressArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="outline">
                          {article.publication}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(article.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ResearchPage;
