// lib/posts.ts

export type Post = {
    id: string
    slug: string
    title: string
    category: string
    date: string
    imagePath: string
    content: string
  }
  
  export const posts: Post[] = [
    {
      id: "1",
      slug: "housing-market-changes",
      title: "Housing Market: That Changed the Most This Week",
      category: "Apartment",
      date: "March 13, 2024",
      imagePath: "/images/receimage1.png",
      content: `
        <p>This is a blog post about recent housing market changes...</p>
        <h2>Highlights</h2>
        <ul>
          <li>High demand in suburban areas</li>
          <li>Interest rates impact affordability</li>
          <li>More virtual tours available</li>
        </ul>
      `,
    },
    {
      id: "2",
      slug: "best-canadian-cities-biking",
      title: "Read Unveils the Best Canadian Cities for Biking",
      category: "Apartment",
      date: "March 14, 2024",
      imagePath: "/images/receimage2.png",
      content: `
        <p>This article highlights the top cities for biking in Canada...</p>
        <p>Includes cities like Vancouver, Montreal, and Ottawa.</p>
      `,
    },
    {
      id: "3",
      slug: "walkable-cities-affordable-living",
      title: "10 Walkable Cities Where You Can Live Affordably",
      category: "Office",
      date: "March 15, 2024",
      imagePath: "/images/receimage3.png",
      content: `
        <p>Explore cities that are pedestrian-friendly and affordable...</p>
        <ul>
          <li>Buffalo, NY</li>
          <li>Milwaukee, WI</li>
          <li>Pittsburgh, PA</li>
        </ul>
      `,
    },
    {
      id: "4",
      slug: "new-apartments-canadian-cities",
      title: "New Apartment Now in the Best Canadian Cities",
      category: "Sale",
      date: "March 15, 2024",
      imagePath: "/images/receimage4.png",
      content: `
        <p>New developments in Toronto, Calgary, and Vancouver are making headlines.</p>
      `,
    },
  ]
  