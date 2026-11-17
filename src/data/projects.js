export const projectsData = [
  {
    id: "dynamic-train-eta",
    slug: "dynamic-train-eta",
    title: "Dynamic Train ETA – Delay Prediction & Tracking",
    shortTitle: "Dynamic Train ETA",
    tagline: "Data-driven transit delay estimation and arrival prediction",
    description:
      "A transit analytics project focused on estimating real-time train arrival times and understanding delay patterns using historical schedule data.",
    overview:
      "Dynamic Train ETA addresses transit schedule uncertainty caused by signal bottlenecks, track congestion, and route variations. By analyzing segment transit times and historical delays across checkpoints, the system computes updated estimated arrival times to give passengers more reliable scheduling visibility.",
    problemStatement:
      "Passenger rail timetables are static, but operations are dynamic. Weather, track maintenance, and station congestion cause cascading delays that static timetables cannot anticipate, leaving passengers without actionable arrival estimates.",
    mainFocus: [
      "Checkpoint-based transit time tracking",
      "Historical delay pattern analysis",
      "Dynamic arrival time calculation",
      "Route segment analytics",
    ],
    keyFeatures: [
      "Segment-by-segment progress tracking",
      "Delay estimation logic based on historical transit data",
      "Estimated arrival recalculation at key intermediate stops",
      "Structured schedule and delay logging",
    ],
    technologies: ["Python", "Data Analysis", "Transit Analytics", "Algorithms"],
    githubUrl: null, // Will be linked when repository is made public
    demoUrl: null,   // Will be linked when deployment is active
    status: "Research Prototype",
  },
  {
    id: "voltcharge",
    slug: "voltcharge",
    title: "VoltCharge – EV Charging Station Finder & Booking",
    shortTitle: "VoltCharge",
    tagline: "EV station discovery and charging slot reservation platform",
    description:
      "A platform to help electric vehicle drivers locate compatible charging stations, check port availability in real time, and reserve charging slots in advance.",
    overview:
      "VoltCharge tackles EV range anxiety and station queue times. Drivers can filter charging locations by connector standard (CCS2, Type 2, CHAdeMO) and power output (AC slow, DC fast), view live port availability, and book timed charging slots to ensure a charger is ready upon arrival.",
    problemStatement:
      "EV adoption is slowed by charging uncertainty: public stations are often fully occupied, broken, or equipped with incompatible plugs. Drivers frequently travel to stations only to find long queues or non-functional ports.",
    mainFocus: [
      "Geolocation and radius search for chargers",
      "Connector compatibility filtering",
      "Slot reservation and schedule management",
      "Port availability tracking",
    ],
    keyFeatures: [
      "Map and list views of nearby charging hubs",
      "Plug-type and charging-speed filtering",
      "Time-slot booking engine with conflict prevention",
      "User reservation dashboard",
    ],
    technologies: ["JavaScript", "Full-Stack Web", "REST APIs", "Database Architecture"],
    githubUrl: null,
    demoUrl: null,
    status: "In Development",
  },
  {
    id: "campusloop",
    slug: "campusloop",
    title: "CampusLoop – Campus Event & Activity Hub",
    shortTitle: "CampusLoop",
    tagline: "Centralized discovery and registration for collegiate events",
    description:
      "A student-centric web platform uniting fragmented college notices, technical workshops, hackathons, and club activities into one searchable feed.",
    overview:
      "CampusLoop consolidates campus notifications into an organized directory. Student organizers can publish upcoming technical competitions, workshops, and cultural events with registration guidelines, while students can track deadlines, filter by category, and discover campus initiatives.",
    problemStatement:
      "College announcements are traditionally scattered across departmental notice boards, disparate messaging channels, and posters. Students often miss registration deadlines, and organizers struggle to reach interested participants.",
    mainFocus: [
      "Centralized event directory",
      "Category and department filtering",
      "Participant registration tracking",
      "Club and organizer announcements",
    ],
    keyFeatures: [
      "Event discovery feed with date and category filters",
      "Structured event detail pages with schedule breakdown",
      "Student registration and bookmarking workflow",
      "Organizer dashboard for posting notices",
    ],
    technologies: ["Supabase", "Full-Stack Web", "PostgreSQL", "Database Design"],
    githubUrl: null,
    demoUrl: null,
    status: "In Development",
  },
];
