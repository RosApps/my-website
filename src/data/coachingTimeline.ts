// coachingTimeline.ts - full coaching career timeline with all accolades.
// Consumes: this file only. Codex task: "Update coachingTimeline.ts with new season stats"

export type CoachingSeasonGroup = {
  id: string;
  role: string;
  seasons: number;
  highlights: string[];
};

export type CoachingProgram = {
  id: string;
  name: string;
  shortName: string;
  years: string;
  totalSeasons: number;
  level: string;
  surfaceStat: string;
  backgroundNote?: string;
  seasonGroups: CoachingSeasonGroup[];
};

export const coachingTimeline: CoachingProgram[] = [
  {
    id: "rotherglen",
    name: "Rotherglen Ravens",
    shortName: "Ravens",
    years: "2015 - 2018",
    totalSeasons: 4,
    level: "Youth Competitive",
    surfaceStat: "4 Seasons · DC → Head Coach · 3 Championships · 4 Championship Berths",
    backgroundNote:
      "Ronak was asked to join the coaching staff as Defensive Coordinator after serving as team captain for two seasons and winning two championships as a player.",
    seasonGroups: [
      {
        id: "ravens-dc",
        role: "Defensive Coordinator",
        seasons: 2,
        highlights: [
          "2 Championships",
          "2 League MVPs",
          "Built and ran the defensive game plan from first season",
          "Led defence to championship victories in both seasons",
        ],
      },
      {
        id: "ravens-hc",
        role: "Head Coach",
        seasons: 2,
        highlights: [
          "2 Championship Berths",
          "1 Championship Win",
          "1 Championship Loss",
          "Promoted from DC after proven results as defensive coordinator",
        ],
      },
    ],
  },
  {
    id: "western-women",
    name: "Western Women's Football Club",
    shortName: "Western Women's",
    years: "2021 - 2025",
    totalSeasons: 4,
    level: "OWFIA D1",
    surfaceStat:
      "4 Seasons · DLine Coach → Line Coordinator · 3 Championships · 14 All-Pro Selections · Coach of the Year · Led League in Every DLine Category",
    seasonGroups: [
      {
        id: "western-dline",
        role: "Defensive Line Coach",
        seasons: 2,
        highlights: [
          "2 Championships",
          "7 All-Pro Selections (4 First Team, 3 Second Team)",
          "3 League Season Awards from players",
          "2 Team Season Awards from players",
          "Coach of the Year in rookie season with the programme",
          "Defensive Coach of the Year 2022",
          "Defensive line led the league in every statistical defensive line category",
          "Practices ran at 6:00 AM, concurrently with CIBC Wood Gundy and bar management shifts",
        ],
      },
      {
        id: "western-lc",
        role: "Line Coordinator",
        seasons: 2,
        highlights: [
          "Won programme's 3rd consecutive championship",
          "Oversaw development of 2 rookie coaches (DLine and OLine) and all 15 offensive and defensive lineswomen",
          "7 additional All-Pro Selections",
          "3 additional League Season Award winners from players",
          "3 Team Season Award winners",
          "Runner-up for Best Offensive Line in the league (1 season)",
        ],
      },
    ],
  },
  {
    id: "london-jm",
    name: "London Jr. Mustangs AAA U16",
    shortName: "London Jr. Mustangs",
    years: "2023 - 2025",
    totalSeasons: 2,
    level: "OSFL AAA",
    surfaceStat: "2 Seasons · RB Coach → DLine Coach · 3 All-Pros · Championship Berth · Beat Both 1-Seeds",
    seasonGroups: [
      {
        id: "london-rb",
        role: "Running Backs Coach",
        seasons: 1,
        highlights: [
          "2 All-Pro Selections",
          "Championship Berth",
          "Defeated both #1 seeds in each conference en route to the championship",
          "Produced the league leader in Kickoff/Punt Return Touchdowns",
        ],
      },
      {
        id: "london-dl",
        role: "Defensive Line Coach",
        seasons: 1,
        highlights: [
          "1 All-Pro Selection",
          "Playoff Berth",
        ],
      },
    ],
  },
  {
    id: "burlington",
    name: "Burlington Stampeders AAA U18",
    shortName: "Burlington Stampeders",
    years: "2025 - Present",
    totalSeasons: 1,
    level: "OSFL AAA",
    surfaceStat: "Current · DLine Coach · Season in Progress",
    seasonGroups: [
      {
        id: "burlington-dl",
        role: "Defensive Line Coach",
        seasons: 1,
        highlights: [
          "Current role: active coaching while completing MBA Co-op #1 at ShipNoble",
          "Player development, scheme installation, game film, and play design",
          "Running concurrently with a full-time consulting engagement",
        ],
      },
    ],
  },
];

export const coachingCareerTotals = {
  seasons: "11",
  record: "94-14-1",
  championships: "6",
  allProSelections: "17+",
  coachOfTheYear: 2,
  programs: 4,
  threePeats: "2",
  leagueMVPs: "2",
};

// The 85-hour period: August 2023 to February 2024
export const eightyFiveHourPeriod = {
  label: "The 85-Hour Period",
  dateRange: "August 2023 - February 2024",
  note:
    "Three concurrent commitments ran simultaneously for nearly a full year.",
  schedule: [
    {
      time: "6:00 AM - 9:00 AM",
      color: "emerald",
      commitment: "Western Women's Football, on the field before sunrise",
    },
    {
      time: "9:00 AM - 5:00 PM",
      color: "blue",
      commitment: "CIBC Wood Gundy, Client & Portfolio Associate",
    },
    {
      time: "5:00 PM - 2:00 AM",
      color: "amber",
      commitment: "The Banquet Bar, Bar Manager & Head of Security",
    },
  ],
};
