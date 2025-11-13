export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  timeline: string;
  images: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "instagram-growth-campaign",
    title: "Instagram Growth Campaign",
    client: "Fashion Retailer",
    image: "https://images.unsplash.com/photo-1644771571024-fa2bb17bdd43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBjb250ZW50JTIwcGhvbmV8ZW58MXx8fHwxNzYxNzQzMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Instagram", "Content Strategy", "Growth"],
    metrics: [
      { label: "Followers", value: "+45%" },
      { label: "Engagement", value: "+120%" },
      { label: "Reach", value: "850K+" },
      { label: "Story Views", value: "+200%" }
    ],
    description: "Developed and executed a comprehensive Instagram strategy that tripled engagement rates and grew followers by 45% in 3 months.",
    challenge: "A mid-sized fashion retailer was struggling to gain traction on Instagram despite posting regularly. Their engagement rates were below industry average at 0.8%, and follower growth had plateaued. They needed a complete overhaul of their content strategy to connect with their target audience of fashion-forward millennials and Gen Z consumers.",
    solution: "We implemented a comprehensive 3-month Instagram transformation strategy that included: 1) A complete content audit and competitor analysis to identify gaps and opportunities. 2) Development of a cohesive visual identity using a curated color palette and consistent editing style. 3) Strategic content mix: 40% product showcases, 30% lifestyle content, 20% user-generated content, and 10% behind-the-scenes. 4) Implementation of Instagram Reels with trending audio to maximize reach. 5) Engagement pods and community management to foster authentic connections. 6) Influencer partnerships with micro-influencers (10K-50K followers) for authentic brand advocacy.",
    results: [
      "Increased follower count from 12,500 to 18,125 (+45%) in 90 days",
      "Boosted engagement rate from 0.8% to 2.6% (+220%)",
      "Generated 850,000+ impressions through Reels strategy",
      "Achieved 200% increase in Story views with interactive stickers",
      "Secured 15 user-generated content posts organically",
      "Increased website traffic from Instagram by 85%"
    ],
    testimonial: {
      quote: "The Verana Collective transformed our Instagram presence beyond our expectations. Not only did we see massive growth in followers and engagement, but the quality of our audience improved dramatically. We're now connecting with customers who genuinely love our brand.",
      author: "Sarah Mitchell",
      role: "Marketing Director, Fashion Retailer"
    },
    timeline: "3 Months",
    images: [
      "https://images.unsplash.com/photo-1643239120053-f2560e990141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYxOTMxNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjE5ODE5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "brand-launch-campaign",
    title: "Brand Launch Campaign",
    client: "Tech Startup",
    image: "https://images.unsplash.com/photo-1590102426319-c7526718cd70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMG1hcmtldGluZyUyMGNyZWF0aXZlfGVufDF8fHx8MTc2MTc0MzA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Multi-Platform", "Launch", "Paid Ads"],
    metrics: [
      { label: "Reach", value: "2.5M+" },
      { label: "Conversions", value: "8.2%" },
      { label: "Sign-ups", value: "12,500+" },
      { label: "ROI", value: "380%" }
    ],
    description: "Orchestrated a successful product launch across multiple platforms, reaching 2.5M+ users with an 8.2% conversion rate.",
    challenge: "A tech startup was preparing to launch their innovative productivity app in a highly competitive market. With zero brand awareness and a limited budget of $25,000, they needed to make a significant impact quickly and generate 10,000+ sign-ups for their beta launch within 4 weeks.",
    solution: "We developed a multi-channel launch strategy that maximized impact across platforms: 1) Created a pre-launch teaser campaign on TikTok and Instagram Reels featuring productivity pain points to build anticipation. 2) Partnered with 12 productivity and tech micro-influencers for authentic reviews and tutorials. 3) Launched targeted Facebook and Instagram ads focused on lookalike audiences of productivity tool users. 4) Implemented a referral program that incentivized beta users to invite friends. 5) Created LinkedIn thought leadership content positioning the founder as a productivity expert. 6) Developed viral-worthy shareable content highlighting unique features.",
    results: [
      "Reached 2.5 million users across all platforms in 4 weeks",
      "Generated 12,500 beta sign-ups (25% above target)",
      "Achieved 8.2% conversion rate on paid ads (industry average: 2-3%)",
      "Secured 380% ROI on $25K ad spend",
      "Gained 8,200 organic followers across social platforms",
      "Generated 450+ pieces of user-generated content",
      "Featured in 3 major tech publications organically"
    ],
    testimonial: {
      quote: "The Verana Collective didn't just help us launch our product—they helped us build a community. The strategic approach to our launch exceeded every metric we hoped for, and the momentum continues months later.",
      author: "David Chen",
      role: "CEO & Founder, Tech Startup"
    },
    timeline: "4 Weeks",
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbGF1bmNoJTIwZXZlbnR8ZW58MXx8fHwxNzYxOTY2NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1601509875838-d73d9d41e5ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE4OTQ2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "linkedin-b2b-strategy",
    title: "LinkedIn B2B Strategy",
    client: "SaaS Company",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjE3MDgxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["LinkedIn", "B2B", "Lead Gen"],
    metrics: [
      { label: "Leads", value: "+300%" },
      { label: "ROI", value: "450%" },
      { label: "Engagement", value: "+180%" },
      { label: "Followers", value: "+5,200" }
    ],
    description: "Built a LinkedIn presence from scratch, generating 300% more qualified leads with a 450% ROI on ad spend.",
    challenge: "A B2B SaaS company offering project management solutions had virtually no presence on LinkedIn despite their ideal customers—project managers and team leads at mid-to-large companies—being highly active on the platform. They were generating only 15-20 qualified leads per month and needed to scale their lead generation efforts.",
    solution: "We implemented a comprehensive 6-month LinkedIn growth strategy: 1) Optimized company page with SEO-rich descriptions and compelling visuals. 2) Created a thought leadership program for the CEO and key executives, posting 3x weekly with insights on project management trends. 3) Developed a content mix: industry insights (40%), company culture (20%), customer success stories (20%), and product education (20%). 4) Launched targeted LinkedIn ad campaigns using lead gen forms with compelling content offers (whitepapers, case studies, webinars). 5) Engaged actively in relevant LinkedIn groups and industry conversations. 6) Implemented employee advocacy program to amplify reach.",
    results: [
      "Increased qualified leads from 18/month to 72/month (+300%)",
      "Generated 450% ROI on LinkedIn ad spend",
      "Boosted page engagement rate to 6.8% (industry avg: 2%)",
      "Grew company followers from 800 to 6,000 (+650%)",
      "CEO's posts averaged 12,000+ impressions each",
      "Secured 8 enterprise deals directly attributed to LinkedIn",
      "Built email list of 3,500+ qualified prospects"
    ],
    testimonial: {
      quote: "Before working with The Verana Collective, LinkedIn was an afterthought. Now it's our #1 lead generation channel. The quality of leads we're getting is exceptional, and the ROI speaks for itself.",
      author: "Amanda Rodriguez",
      role: "VP of Marketing, SaaS Company"
    },
    timeline: "6 Months",
    images: [
      "https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxOTE1MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NjE5Nzc0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard & Optimization",
    client: "E-commerce Brand",
    image: "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjE2MzMwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Analytics", "Strategy", "Optimization"],
    metrics: [
      { label: "Revenue", value: "+85%" },
      { label: "ROAS", value: "6.2x" },
      { label: "AOV", value: "+32%" },
      { label: "Customer LTV", value: "+95%" }
    ],
    description: "Implemented data-driven optimization strategies that increased social-driven revenue by 85% with a 6.2x ROAS.",
    challenge: "An established e-commerce beauty brand was spending $50K monthly on social media advertising but couldn't accurately track which platforms, campaigns, or content types were driving revenue. Their attribution was broken, and they were making decisions based on vanity metrics rather than actual business impact. They needed a complete analytics overhaul.",
    solution: "We implemented a comprehensive analytics and optimization framework: 1) Set up proper UTM tracking and multi-touch attribution modeling across all social platforms. 2) Created custom dashboards connecting social metrics to actual revenue, not just clicks. 3) Implemented A/B testing protocols for all ad creative, copy, and audiences. 4) Developed customer journey mapping to understand the path from discovery to purchase. 5) Optimized ad spend allocation based on true ROAS data, not platform-reported conversions. 6) Created automated reporting showing real-time performance against KPIs. 7) Implemented retargeting strategies based on customer behavior data.",
    results: [
      "Increased social-driven revenue by 85% ($127K to $235K monthly)",
      "Improved Return on Ad Spend from 2.8x to 6.2x",
      "Boosted Average Order Value by 32% through better targeting",
      "Increased Customer Lifetime Value by 95% via retention campaigns",
      "Reduced wasted ad spend by $18K monthly through optimization",
      "Cut Cost Per Acquisition by 54%",
      "Improved conversion rate from 1.8% to 4.2%"
    ],
    testimonial: {
      quote: "The analytics transformation completely changed how we approach social media marketing. We went from guessing to knowing exactly what works. The ROI improvement has been game-changing for our business.",
      author: "Jessica Park",
      role: "E-commerce Director, Beauty Brand"
    },
    timeline: "5 Months",
    images: [
      "https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NjE5Nzc0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1643239120053-f2560e990141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYxOTMxNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  }
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(study => study.id === id);
}
