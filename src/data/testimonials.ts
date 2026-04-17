export interface Testimonial {
  id: string;
  quote: string;
  attribution: {
    name: string;
    title: string;
    company: string;
  };
  sourceUrl: string;
  sourceImage: string;
  context: string;
  scope: "professional" | "coach";
  sourcePrefix: string;
  sourceLinkText: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "andrew-rayman-shipnoble",
    quote:
      "When Ronak Panchmatia, our MBA intern, joined us, I hinted to him about mapping out ShipNoble's operations from the ground up. I wanted to see if we could quantify the 'soul' of every division of our business. Without a second of hesitation, 'Ro' went all in. What was produced is nothing short of remarkable: the SNI. It's a comprehensive technical framework that moves us past 'guessing' at profitability and into a future where we can provide 'true' value and a clear roadmap for our clients.",
    attribution: {
      name: "Andrew Rayman",
      title: "Founder & CEO",
      company: "ShipNoble Inc.",
    },
    sourceUrl:
      "https://www.linkedin.com/posts/andrew-rayman-019565176_makeitcount-shipnoble-freedom-activity-7444791375977578496-6Rhl",
    sourceImage: "/images/arquote.jpg",
    context:
      "Posted on LinkedIn following the completion of Ronak's first MBA Co-op at ShipNoble Inc., January to April 2026.",
    scope: "professional",
    sourcePrefix: "See the original post on",
    sourceLinkText: "LinkedIn",
  },
  {
    id: "andrew-dale-cibc-wood-gundy",
    quote:
      "Although Ronak worked with my team in a temporary capacity he made a positive impact right away and that impact has been lasting. A self-starting problem solver. I have the utmost faith in his ability to collaborate successfully with others and also to work independently. He has a lot of energy and will make a positive impact anywhere he goes.",
    attribution: {
      name: "Andrew Dale, MBA, CFP, CFA",
      title: "Senior Portfolio Manager & Wealth Advisor",
      company: "CIBC Wood Gundy",
    },
    sourceUrl: "mailto:ronakpanch66@gmail.com",
    sourceImage: "",
    context:
      "Reference letter written February 23, 2025, in support of Ronak's MBA application. Full letter available on request.",
    scope: "professional",
    sourcePrefix: "",
    sourceLinkText: "Contact Ronak for the full reference letter",
  },
  {
    id: "bleska-kambamba-wwfb",
    quote:
      "Ronak is a driven, enthusiastic, and highly sociable individual who consistently goes above and beyond to support our team. His ability to connect with people, understand their needs, and uplift those around him makes him an essential part of our coaching staff and a big reason why we have been able to win three championships in a row.",
    attribution: {
      name: "Bleska Kambamba",
      title: "Head Coach",
      company: "Western Women's Football Club",
    },
    sourceUrl: "mailto:ronakpanch66@gmail.com",
    sourceImage: "",
    context:
      "Reference letter written in support of Ronak's MBA application. Full letter available on request.",
    scope: "coach",
    sourcePrefix: "",
    sourceLinkText: "Contact Ronak for the full reference letter",
  },
];
