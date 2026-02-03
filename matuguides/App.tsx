
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import GuideCard from './components/GuideCard';
import { ICONS, MOCK_GUIDES } from './constants';
import { findMatuguideMatch, generateWelcomeMessage } from './services/geminiService';
import { Guide, MatchingResult } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [userName, setUserName] = useState('');
  const [welcomeMsg, setWelcomeMsg] = useState('');
  const [situationText, setSituationText] = useState('');
  const [isMatching, setIsMatching] = useState(false);
  const [matchingResult, setMatchingResult] = useState<MatchingResult | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  // Home Screen Content
  const renderHome = () => (
    <div className="animate-in fade-in duration-700">
      <section className="relative overflow-hidden bg-matu-cream py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1 bg-matu-sage/10 text-matu-sage rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            A Safe Space for Healing
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-matu-deep leading-tight mb-8">
            Walk a Path Lighted by <span className="text-matu-terracotta italic underline decoration-matu-sand">Wisdom</span>.
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with mature guides who have survived similar storms. Because the best map for healing is drawn by someone who has been there.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setActiveTab('find')}
              className="bg-matu-sage text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all shadow-matu-sage/20"
            >
              Find My Guide
            </button>
            <button 
              onClick={() => setActiveTab('guides')}
              className="bg-white text-matu-deep border-2 border-matu-sand px-10 py-4 rounded-full text-lg font-bold hover:bg-matu-sand transition-all"
            >
              Browse Stories
            </button>
          </div>
        </div>
        {/* Background shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-matu-warm/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-matu-sage/20 rounded-full blur-3xl opacity-50"></div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-16">How Matuguides Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: <ICONS.Search className="w-8 h-8"/>, 
              title: "Share Your Story", 
              desc: "Tell us about the situation you are navigating in a private, safe space." 
            },
            { 
              icon: <ICONS.Heart className="w-8 h-8"/>, 
              title: "Meet Your Guide", 
              desc: "Our AI helps match you with a mature peer who has successfully healed from similar pain." 
            },
            { 
              icon: <ICONS.Compass className="w-8 h-8"/>, 
              title: "Walk Forward", 
              desc: "Schedule a video call or chat to receive direct wisdom and empathetic guidance." 
            },
          ].map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-white shadow-sm border border-matu-sand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-matu-sage group-hover:text-white transition-all transform group-hover:rotate-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  // Find My Guide Screen (AI Matching)
  const handleMatching = async () => {
    if (!situationText.trim()) return;
    setIsMatching(true);
    setMatchingResult(null);
    try {
      const result = await findMatuguideMatch(situationText, MOCK_GUIDES);
      setMatchingResult(result);
    } catch (error) {
      console.error("Matching failed", error);
    } finally {
      setIsMatching(false);
    }
  };

  const renderFind = () => (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {!matchingResult ? (
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-matu-sand">
          <h2 className="text-3xl font-serif font-bold text-matu-deep mb-4">Start your healing journey</h2>
          <p className="text-gray-600 mb-8">What are you navigating through right now? Be as open as you feel comfortable—everything here is private.</p>
          
          <textarea 
            className="w-full h-64 p-6 bg-matu-cream border-2 border-matu-sand rounded-3xl focus:border-matu-sage focus:ring-0 text-lg transition-all resize-none italic"
            placeholder="E.g., I'm feeling lost after retiring from a 40-year career. I don't know who I am without my work, and the loneliness is settling in..."
            value={situationText}
            onChange={(e) => setSituationText(e.target.value)}
          />

          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleMatching}
              disabled={isMatching || !situationText}
              className={`px-12 py-4 rounded-full font-bold text-lg flex items-center space-x-2 transition-all ${
                isMatching || !situationText ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-matu-sage text-white hover:bg-matu-deep shadow-lg shadow-matu-sage/20'
              }`}
            >
              {isMatching ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  <span>Seeking Your Match...</span>
                </>
              ) : (
                <>
                  <span>Find My Matuguide</span>
                  <ICONS.Compass className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-in zoom-in-95 duration-500">
          <div className="bg-matu-sage text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
             <div className="relative z-10">
                <ICONS.Quote className="w-10 h-10 mb-4 opacity-50" />
                <p className="text-xl italic font-serif leading-relaxed mb-6">
                  "{matchingResult.comfortingWords}"
                </p>
                <div className="text-sm opacity-90 border-l-2 border-matu-warm pl-4">
                  <strong>Why we chose these guides:</strong> {matchingResult.reasoning}
                </div>
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-matu-deep px-2">Your Recommended Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matchingResult.suggestedGuideIds.map(id => {
              const guide = MOCK_GUIDES.find(g => g.id === id);
              return guide ? (
                <GuideCard key={id} guide={guide} onSelect={(g) => {
                  setSelectedGuide(g);
                  setActiveTab('guides');
                }} />
              ) : null;
            })}
          </div>

          <div className="text-center pt-8">
            <button 
              onClick={() => setMatchingResult(null)}
              className="text-matu-sage font-bold hover:underline"
            >
              Wait, let me try rephrasing my situation.
            </button>
          </div>
        </div>
      )}
    </div>
  );

  // Browse Guides Screen
  const renderGuides = () => {
    if (selectedGuide) {
      return (
        <div className="max-w-4xl mx-auto py-12 px-4 animate-in fade-in duration-500">
          <button 
            onClick={() => setSelectedGuide(null)}
            className="flex items-center text-matu-sage font-bold mb-8 hover:translate-x-[-4px] transition-transform"
          >
            ← Back to all guides
          </button>
          
          <div className="bg-white rounded-[3rem] shadow-xl border border-matu-sand overflow-hidden">
            <div className="h-48 bg-matu-sage relative">
              <div className="absolute -bottom-16 left-12">
                <img 
                  src={selectedGuide.avatar} 
                  className="w-32 h-32 rounded-[2rem] border-4 border-white shadow-lg object-cover"
                />
              </div>
            </div>
            
            <div className="pt-20 px-12 pb-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-4xl font-serif font-bold text-matu-deep">{selectedGuide.name}</h2>
                  <p className="text-matu-sage font-medium">{selectedGuide.location} • {selectedGuide.age} years old</p>
                </div>
                <div className="flex items-center bg-matu-warm px-4 py-2 rounded-2xl text-matu-deep font-bold">
                  <span className="mr-1">★</span> {selectedGuide.rating}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">My Healing Story</h4>
                    <p className="text-lg leading-relaxed text-gray-700 font-serif whitespace-pre-wrap">
                      {selectedGuide.healingStory}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">My Philosophy</h4>
                    <p className="text-gray-600 leading-relaxed italic">
                      "{selectedGuide.bio}"
                    </p>
                  </section>
                </div>

                <div className="space-y-6">
                  <div className="bg-matu-cream p-6 rounded-3xl border border-matu-sand">
                    <h4 className="font-bold mb-4">Areas of Wisdom</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGuide.experienceTags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white text-[10px] font-bold text-matu-deep rounded-full border border-matu-sand">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-matu-terracotta text-white py-4 rounded-2xl font-bold shadow-lg shadow-matu-terracotta/20 hover:-translate-y-1 transition-all">
                    Request Guidance Call
                  </button>
                  <button className="w-full bg-matu-deep text-white py-4 rounded-2xl font-bold transition-all opacity-90 hover:opacity-100">
                    Send a Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto py-12 px-4 animate-in fade-in duration-500">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-matu-deep mb-4">Meet Our Matuguides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mature, compassionate peers who have turned their personal struggles into a source of strength and wisdom for others.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_GUIDES.map(guide => (
            <GuideCard 
              key={guide.id} 
              guide={guide} 
              onSelect={(g) => setSelectedGuide(g)} 
            />
          ))}
        </div>
      </div>
    );
  };

  const renderAbout = () => (
    <div className="max-w-4xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl font-serif font-bold mb-8">Why Matuguides?</h2>
      <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed space-y-6">
        <p>
          In a world obsessed with quick fixes and professional clinical distances, Matuguides offers something ancient and powerful: <strong>Shared Experience.</strong>
        </p>
        <p>
          We believe that pain is not a problem to be solved, but a journey to be navigated. And who better to navigate that journey than someone who has already walked the path, survived the weather, and found peace on the other side?
        </p>
        <p>
          Our platform is built on the foundation of <em>Matu-</em> (derived from Maturity and Mutual). It’s about people helping people, grounded in real-life survival and healing.
        </p>
        <div className="bg-matu-sand p-8 rounded-3xl mt-12 italic text-matu-deep font-serif text-xl">
          "The greatest healing often happens in the space between two hearts that understand the same language of loss and recovery."
        </div>
      </div>
    </div>
  );

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'home' && renderHome()}
      {activeTab === 'find' && renderFind()}
      {activeTab === 'guides' && renderGuides()}
      {activeTab === 'about' && renderAbout()}
    </Layout>
  );
};

export default App;
