export type OrbitTier = 'inner_core' | 'close_circle' | 'outer_orbit' | 'distant_constellation';

export type EnergyLevel = 'low_spoon' | 'medium_energy' | 'high_battery' | 'quick_meme';

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  relationship: string;
  orbitTier: OrbitTier;
  idealCadenceDays: number;
  lastConnectedDaysAgo: number;
  energyLevel: EnergyLevel;
  notes: string[];
  preferredMode: 'call_sprint' | 'voice_note' | 'quick_meme' | 'text';
  isOverdue: boolean;
  driftFactor: number; // 0.0 to 1.0 (how far drifted away from orbit)
  favoriteThings: string;
}

export interface RankMilestone {
  level: number;
  title: string;
  requiredXp: number;
  badge: string;
  perk: string;
  description: string;
}

export interface ScriptItem {
  id: string;
  category: 'opening_sprint' | 'exit_graceful' | 'voice_note_15s' | 'low_spoon_meme' | 'ghosting_recovery';
  title: string;
  content: string;
  tag: string;
  energyRequired: '⚡ Low' | '⚡⚡ Medium' | '⚡⚡⚡ High';
}

export interface BodyDoubler {
  id: string;
  name: string;
  city: string;
  action: string;
  avatarColor: string;
  timeAgo: string;
}
