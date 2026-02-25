import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: 'SteadyStreamTV',
      subtitle: 'Built a distribution channel when the existing ones failed me.',
      description: "As an editor delivering high-volume content, I kept running into the same wall: third-party platforms that throttled quality, buried deliverables, and charged by the view. So I built my own. SteadyStreamTV is a multi-region IPTV platform I architected from the ground up to give my productions full distribution control—no middlemen, no compression surprises.",
      highlights: [
        'Full control over encoding & quality settings',
        'Multi-region HLS/DASH delivery',
        'Custom subscription & access management',
        'CI/CD pipeline for zero-downtime updates',
        'Real-time analytics per title',
      ],
      tech: ['Node.js', 'React', 'FFmpeg', 'AWS', 'Docker', 'PostgreSQL'],
      impact: '10K+ concurrent viewers · 99.9% uptime · 40% faster delivery than prior workflow'
    },
    {
      id: 2,
      title: 'Sky Sky Show',
      subtitle: "Ran a full children's series with no production team.",
      description: "I was the writer, director, editor, and distributor of a children's emotional-intelligence series—and I needed to produce at a pace no single person could sustain manually. I built an automated production pipeline that handles episode generation, AI voice-over, and multi-platform publishing. That gave me back my time to focus on what actually matters: the creative.",
      highlights: [
        'Automated episode assembly & sequencing',
        'AI voice-over synthesis integrated into edit',
        'One-click multi-platform publish',
        'Curriculum-to-script pipeline',
        'Engagement analytics per episode',
      ],
      tech: ['Python', 'FFmpeg', 'Suno AI', 'DALL-E', 'Supabase', 'Vercel'],
      impact: '100+ episodes produced · 50K+ views · Solo operation at series scale'
    },
    {
      id: 3,
      title: 'Content Delivery Pipeline',
      subtitle: 'Automated the repetitive so the creative could breathe.',
      description: "High-volume client work means a mountain of export, format, caption, and upload tasks that eat into the hours that should go to the edit. I built a 7-agent automation system to handle everything after picture lock—formatting for each platform, SEO metadata, scheduling, and delivery. My team cuts. The pipeline ships.",
      highlights: [
        '7-agent post-delivery orchestration',
        'Platform-specific format conversion',
        'Auto-generated captions & metadata',
        'Scheduled delivery across 8 platforms',
        'QC pass before every publish',
      ],
      tech: ['Python', 'LangChain', 'OpenAI', 'n8n', 'Supabase'],
      impact: '100+ pieces/month shipped · 8 platforms · 300% increase in output without adding headcount'
    },
    {
      id: 4,
      title: 'AI Visual Production Pipeline',
      subtitle: 'Built a bespoke visual library that generates to spec.',
      description: "Stock footage is a compromise. It's never exactly right, and the search eats hours. I built a custom pipeline that generates visuals from a text brief—pulling from DALL-E, Runway, and LumaAI, processing through FFmpeg, and outputting production-ready assets. Now when I need a specific shot, I describe it and it exists.",
      highlights: [
        'Text-to-visual brief workflow',
        'DALL-E, Runway & LumaAI integrated',
        'FFmpeg post-processing to delivery specs',
        'AI voice & audio sync',
        'QC and review pass built in',
      ],
      tech: ['Python', 'DALL-E', 'Runway API', 'LumaAI', 'FFmpeg', 'Replicate'],
      impact: '50+ custom assets/month · 10x faster than stock search · Exact-spec output every time'
    }
  ];

  const skills = {
    'Editing & Post-Production': ['Narrative editing', 'Color grading', 'Sound design', 'Motion graphics', 'VFX compositing', 'Multi-cam workflow'],
    'Production Tools': ['FFmpeg', 'Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Vite / React', 'Python scripting'],
    'AI-Assisted Workflows': ['Text-to-video generation', 'AI voice synthesis', 'Automated captioning', 'LLM script assistance', 'Image generation'],
    'Distribution & Streaming': ['IPTV platform architecture', 'HLS/DASH delivery', 'Multi-platform publishing', 'CDN configuration', 'Adaptive bitrate'],
    'Pipeline & Operations': ['Workflow automation', 'CI/CD for media', 'API integration', 'Task scheduling', 'Client delivery systems'],
  };

  const navLinks = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-sm text-slate-950">TS</div>
              <span className="font-bold text-lg hidden sm:inline tracking-tight">Travis Singletary</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`capitalize text-sm font-medium transition-colors ${activeSection === link ? 'text-amber-400' : 'text-slate-400 hover:text-white'}`}
                >
                  {link}
                </button>
              ))}
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4 flex flex-col space-y-3">
              {navLinks.map(link => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="capitalize text-left text-slate-300 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
            <span className="text-amber-400 text-sm font-medium tracking-wide">Senior Editor & Post-Production Specialist</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
            Travis Singletary
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
            I cut stories. I also build the tools that don't exist yet.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Two decades of post-production experience. When the workflow broke, I fixed it. When the tool didn't exist, I built it. Code is how I protect the edit—not replace it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <span>See the Work</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center space-x-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <span>Work Together</span>
            </button>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="mx-auto text-slate-600" size={24} />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-16 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Headshot */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-amber-400/10 translate-x-3 translate-y-3"></div>
                <img
                  src="/assets/images/profile.jpeg"
                  alt="Trav Singletary"
                  className="relative w-72 md:w-80 rounded-2xl object-cover shadow-2xl border border-slate-700/50"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                I'm a senior editor and post-production specialist who happens to write code.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                My background is in narrative editing, color, and sound—the craft of shaping raw footage into something that lands. Over the years I kept running into the same problem: the tools available weren't built for the scale or specificity of what I was producing. So I started building my own.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                That's not a pivot. It's an extension of the same instinct that makes a great editor—the refusal to accept that this is just how it works. My technical skills exist to protect the creative process, never to replace it.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Based in the US · Available for editorial, post-production, and production pipeline consulting.
              </p>
            </div>
          </div>
          {/* Stats row below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { value: '10K+', label: 'Viewers on platforms I built' },
              { value: '100+', label: 'Episodes cut & shipped' },
              { value: '8+', label: 'Delivery platforms automated' },
              { value: '0', label: 'Compromises on picture quality' },
            ].map(stat => (
              <div key={stat.label} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Projects</h2>
          <p className="text-slate-500 text-center mb-4">Production problems. Built solutions.</p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-16 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-slate-800/40 border border-slate-700/50 hover:border-amber-400/20 rounded-2xl p-8 transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/5">
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-amber-400/80 text-sm font-medium italic">{project.subtitle}</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {project.highlights.map(h => (
                    <li key={h} className="flex items-start space-x-2 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(t => (
                    <span key={t} className="bg-slate-700/60 text-slate-400 text-xs px-2 py-1 rounded font-mono">{t}</span>
                  ))}
                </div>
                <div className="text-xs text-amber-400/60 font-medium border-t border-slate-700/50 pt-4 leading-relaxed">{project.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-16 rounded-full"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6">
                <h3 className="font-semibold text-amber-400 mb-4 text-sm uppercase tracking-wider">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Together</h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-400 mb-4 leading-relaxed">
            Available for editorial projects, post-production work, and production pipeline consulting.
          </p>
          <p className="text-slate-500 text-sm mb-10">
            If you're a production company, studio, or independent creator who needs an editor who can also fix the pipeline—let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:travis@example.com"
              className="inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/50 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Travis Singletary · Senior Editor & Post-Production Specialist</p>
      </footer>

    </div>
  );
};

export default App;
