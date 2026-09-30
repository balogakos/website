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
  githubUrl: string
  authors: string[]
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
      "Commercial geodemographics are often proprietary black boxes, while traditional census data misses actual consumer behaviour. Our new paper in the International Journal of Retail & Distribution Management introduces an open, small-area classification covering England and Wales.",
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
  },
]
