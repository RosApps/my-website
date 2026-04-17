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
  },
];
