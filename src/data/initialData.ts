import { Contact, RankMilestone, ScriptItem, BodyDoubler } from '../types';

export const INITIAL_CONTACTS: Contact[] = [
  {
    id: 'c1',
    name: 'Maya Lin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    relationship: 'College Bestie',
    orbitTier: 'inner_core',
    idealCadenceDays: 7,
    lastConnectedDaysAgo: 12,
    energyLevel: 'low_spoon',
    notes: ['Adopted a ginger tabby named Mango', 'Loves oat vanilla lattes', 'Starting a new ceramics workshop'],
    preferredMode: 'call_sprint',
    isOverdue: true,
    driftFactor: 0.65,
    favoriteThings: 'Ginger tea & Pottery',
  },
  {
    id: 'c2',
    name: 'Liam Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    relationship: 'Close Friend / Gym Buddy',
    orbitTier: 'close_circle',
    idealCadenceDays: 14,
    lastConnectedDaysAgo: 26,
    energyLevel: 'medium_energy',
    notes: ['Training for a half-marathon in Nov', 'Just moved to the North district', 'Ask about his sourdough bread starter'],
    preferredMode: 'call_sprint',
    isOverdue: true,
    driftFactor: 0.85,
    favoriteThings: 'Sourdough baking & Trail running',
  },
  {
    id: 'c3',
    name: 'Mom & Dad',
    avatar: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=150&auto=format&fit=crop&q=80',
    relationship: 'Family Core',
    orbitTier: 'inner_core',
    idealCadenceDays: 5,
    lastConnectedDaysAgo: 6,
    energyLevel: 'low_spoon',
    notes: ['Dad planting heirloom tomatoes', 'Mom got a new watercolor sketch pad', 'Always loves a 3-min speakerphone check-in'],
    preferredMode: 'call_sprint',
    isOverdue: true,
    driftFactor: 0.4,
    favoriteThings: 'Gardening updates & Sunday tea',
  },
  {
    id: 'c4',
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    relationship: 'Design Co-worker & Mentor',
    orbitTier: 'outer_orbit',
    idealCadenceDays: 30,
    lastConnectedDaysAgo: 45,
    energyLevel: 'quick_meme',
    notes: ['Obsessed with retro synthwave music', 'Recently spoke at a UX conference', 'Prefers audio notes or fast memes over 1hr calls'],
    preferredMode: 'voice_note',
    isOverdue: true,
    driftFactor: 0.72,
    favoriteThings: 'Lo-fi beats & Figma plugins',
  },
  {
    id: 'c5',
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    relationship: 'Childhood Friend',
    orbitTier: 'distant_constellation',
    idealCadenceDays: 60,
    lastConnectedDaysAgo: 110,
    energyLevel: 'low_spoon',
    notes: ['Living in Seattle now', 'Huge board game nerd (Wingspan, Catan)', 'No pressure catch-ups only'],
    preferredMode: 'call_sprint',
    isOverdue: true,
    driftFactor: 0.95,
    favoriteThings: 'Co-op board games & Coffee beans',
  },
  {
    id: 'c6',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    relationship: 'Creative Collaborator',
    orbitTier: 'close_circle',
    idealCadenceDays: 14,
    lastConnectedDaysAgo: 4,
    energyLevel: 'high_battery',
    notes: ['Writing a science fiction novella', 'Loves philosophical voice notes'],
    preferredMode: 'call_sprint',
    isOverdue: false,
    driftFactor: 0.15,
    favoriteThings: 'Sci-fi novels & Herbal chai',
  }
];

export const SCRIPTS_VAULT: ScriptItem[] = [
  {
    id: 's1',
    category: 'opening_sprint',
    title: 'The Electric Kettle Opener (2 Mins)',
    content: "“Hey! My kettle is on the stove and boiling in 2 minutes, but I was just thinking of you and wanted to hear your voice real quick!”",
    tag: 'Phone Anxiety Killer',
    energyRequired: '⚡ Low',
  },
  {
    id: 's2',
    category: 'opening_sprint',
    title: 'The Walking to the Car Sprint',
    content: "“Hey! I'm just walking to my car / grocery store for 3 minutes, wanted to send some quick love and see how your week kicked off!”",
    tag: 'Casual & Warm',
    energyRequired: '⚡ Low',
  },
  {
    id: 's3',
    category: 'exit_graceful',
    title: 'The Kettle Whistle Exit',
    content: "“Kettle just clicked off / I just arrived at my destination! So so good to hear your laugh. Let's do another micro check-in next week! Hugs!”",
    tag: 'Guaranteed Exit',
    energyRequired: '⚡ Low',
  },
  {
    id: 's4',
    category: 'exit_graceful',
    title: 'The Low Battery Truth',
    content: "“My social battery is flickering on 2% today so I'm gonna crawl into hermit mode, but I wanted to make sure you felt loved today!”",
    tag: 'Honest & Gentle',
    energyRequired: '⚡ Low',
  },
  {
    id: 's5',
    category: 'ghosting_recovery',
    title: 'The 6-Month Ghosting Revival',
    content: "“Hey friend! My ADHD brain completely lost object permanence for a bit, but I love you deeply and you crossed my mind today. Zero pressure to reply—just sending a giant hug!”",
    tag: 'Shame-Free Reset',
    energyRequired: '⚡ Low',
  },
  {
    id: 's6',
    category: 'voice_note_15s',
    title: 'The 15-Second Audio Hug',
    content: "“Hey! Quick 15-second voice memo: no need to type back a novel, just saw something that reminded me of you and wanted you to have an awesome day!”",
    tag: 'Voice Memo',
    energyRequired: '⚡ Low',
  },
  {
    id: 's7',
    category: 'low_spoon_meme',
    title: 'The Low-Energy Meme Ping',
    content: "*(Sends cozy animal / relatable meme)* “No text response required, just a ping to say you exist in my heart today.”",
    tag: 'Zero Friction',
    energyRequired: '⚡ Low',
  }
];

export const RANK_MILESTONES: RankMilestone[] = [
  {
    level: 1,
    title: 'Orbit Novice',
    requiredXp: 0,
    badge: '🌱',
    perk: 'Unlocks Daily Spotlight Shuffle & 2-Min Timer',
    description: 'Taking the first brave step toward shame-free reconnection.',
  },
  {
    level: 5,
    title: 'Constellation Keeper',
    requiredXp: 1500,
    badge: '✨',
    perk: 'Unlocks Cosmic Star Map & Ambient Audio Synth',
    description: 'Your loved ones are feeling your steady, gentle gravitational pull.',
  },
  {
    level: 10,
    title: 'Supernova Spark',
    requiredXp: 6500,
    badge: '💫',
    perk: 'Unlocks Shame-Free Confetti Streaks & Custom Notes',
    description: 'Ghosting guilt has dissolved into self-compassion and frequent warmth.',
  },
  {
    level: 25,
    title: 'Pulsar Harmonizer',
    requiredXp: 21500,
    badge: '🪐',
    perk: 'Unlocks Custom Orbital Cadences & Energy Filters',
    description: 'Friendship maintenance has become a rhythmic, joyful micro-ritual.',
  },
  {
    level: 50,
    title: 'Interstellar Luminary',
    requiredXp: 46500,
    badge: '🌟',
    perk: 'Unlocks Golden Solar Flare VIP Theme',
    description: 'Master of the 2-minute sprint call and guiltless check-ins.',
  },
  {
    level: 75,
    title: 'Cosmic Zenith',
    requiredXp: 71500,
    badge: '🔮',
    perk: 'Unlocks Deep Constellation Archiving',
    description: 'A beacon of thoughtful care for dozens of human orbits.',
  },
  {
    level: 100,
    title: 'Galactic Connector',
    requiredXp: 96500,
    badge: '🌌',
    perk: 'Grandmaster Celestial Ring & VIP Hall of Fame',
    description: 'Zero phone anxiety, infinite warmth, and lifelong human connection.',
  }
];

export const BODY_DOUBLERS_FEED: BodyDoubler[] = [
  { id: 'b1', name: 'Alex K.', city: 'Berlin', action: 'Just logged a 2-min call with Mom', avatarColor: 'bg-emerald-500', timeAgo: 'Just now' },
  { id: 'b2', name: 'Taylor M.', city: 'Austin', action: 'Triggered Shame-Free Reset (+20 XP)', avatarColor: 'bg-amber-500', timeAgo: '1m ago' },
  { id: 'b3', name: 'Chloe R.', city: 'Toronto', action: 'Sent 15-sec audio hug to college roommate', avatarColor: 'bg-indigo-500', timeAgo: '3m ago' },
  { id: 'b4', name: 'Jordan S.', city: 'London', action: 'Completed 5-min Sprint with best friend', avatarColor: 'bg-purple-500', timeAgo: '5m ago' },
  { id: 'b5', name: 'Kai N.', city: 'Tokyo', action: 'Added memory note: Favorite matcha brand', avatarColor: 'bg-rose-500', timeAgo: '8m ago' },
];

export const CALCULATE_XP_FOR_LEVEL = (level: number): number => {
  if (level <= 1) return 0;
  if (level === 2) return 100;
  if (level === 3) return 300;
  if (level === 4) return 700;
  if (level === 5) return 1500;
  return 1500 + (level - 5) * 1000;
};
