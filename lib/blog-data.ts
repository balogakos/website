export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  date: string
  readingTime: string
  tags: string[]
  excerpt: string
  doi: string
  journal: string
  paperUrl: string
  githubUrl?: string
  newsUrl?: string
  authors: string[]
  bibtex: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "open-geodemographic-classification-consumer-behaviour",
    title:
      "Developing an Open, National-Level Geodemographic Classification of Consumer Behaviour",
    subtitle:
      "Bridging the small-area consumer insight gap across England and Wales using spatial microsimulation, open census data, and behavioral surveys.",
    date: "September 2026",
    readingTime: "6 min read",
    tags: [
      "Geodemographics",
      "Spatial Data Science",
      "Retail Analytics",
      "Open Data",
      "Urban Analytics",
    ],
    excerpt:
      "Commercial geodemographics are often proprietary black boxes, while traditional census data misses actual consumer behaviour. Our paper in the International Journal of Retail & Distribution Management introduces an open, small-area classification covering England and Wales.",
    doi: "10.1108/IJRDM-06-2025-0436",
    journal: "International Journal of Retail & Distribution Management",
    paperUrl:
      "https://www.emerald.com/ijrdm/article/doi/10.1108/IJRDM-06-2025-0436/1392859/Developing-an-open-national-level-small-area",
    githubUrl:
      "https://github.com/balogakos/Geodemographic-Classification-of-Consumer-Behaviour",
    authors: [
      "Ákos Balog",
      "Les Dolega",
      "Ron Mahabir",
      "Patrick Ballantyne",
      "Paul Williamson",
    ],
    bibtex: `@article{balog2026geodemographic,
  author  = {Balog, {\\'{A}}kos and Dolega, Les and Mahabir, Ron and Ballantyne, Patrick and Williamson, Paul},
  title   = {Developing an open, national-level, small-area geodemographic classification of consumer behaviour},
  journal = {International Journal of Retail & Distribution Management},
  year    = {2026},
  pages   = {1--16},
  doi     = {10.1108/IJRDM-06-2025-0436},
  url     = {https://doi.org/10.1108/IJRDM-06-2025-0436}
}`,
  },
  {
    slug: "smart-transportation-planning-advanced-technologies",
    title:
      "Leveraging Advanced Technologies for (Smart) Transportation Planning: A Systematic Review",
    subtitle:
      "A Sentence-BERT-powered systematic review exploring how IoT, AI, Digital Twins, and optimization intersect to solve urban mobility challenges.",
    date: "March 2025",
    readingTime: "5 min read",
    tags: [
      "Digital Twins",
      "Smart Transportation",
      "NLP",
      "Urban Planning",
      "AI in Transport",
      "Sustainable Mobility",
    ],
    excerpt:
      "How do IoT sensor networks, digital twins, and AI decision systems tackle urban congestion and transport emissions? Our paper in MDPI Sustainability combines PRISMA guidelines with SBERT NLP to quantitatively connect transport challenges with technological solutions.",
    doi: "10.3390/su17052245",
    journal: "Sustainability (MDPI)",
    paperUrl: "https://www.mdpi.com/2071-1050/17/5/2245",
    newsUrl:
      "https://news.liverpool.ac.uk/2025/07/09/lcr-digital-transport-project-with-south-korea-to-be-expanded/",
    authors: [
      "Heejoo Son",
      "Jinhyeok Jang",
      "Jihan Park",
      "Ákos Balog",
      "Patrick Ballantyne",
      "Heeseo Rain Kwon",
      "Alex Singleton",
      "Jinuk Hwang",
    ],
    bibtex: `@article{son2025leveraging,
  author  = {Son, Heejoo and Jang, Jinhyeok and Park, Jihan and Balog, {\\'{A}}kos and Ballantyne, Patrick and Kwon, Heeseo Rain and Singleton, Alex and Hwang, Jinuk},
  title   = {Leveraging Advanced Technologies for (Smart) Transportation Planning: A Systematic Review},
  journal = {Sustainability},
  volume  = {17},
  number  = {5},
  pages   = {2245},
  year    = {2025},
  doi     = {10.3390/su17052245},
  url     = {https://doi.org/10.3390/su17052245}
}`,
  },
]