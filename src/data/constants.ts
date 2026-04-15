// constants.ts - shared TypeScript types for timeline data.
// All site data has moved to dedicated files in /src/data/.
// Import data directly from those files; import types from here or from timelineData.ts.

// Re-exported from timelineData.ts for backwards compatibility
export type {
  TimelineIconName,
  ConcurrentRole,
  ConcurrentTrack,
} from "@/data/timelineData";
