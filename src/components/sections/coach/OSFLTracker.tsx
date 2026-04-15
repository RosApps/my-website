// OSFLTracker.tsx - Burlington Stampeders live season record tracker.
// Consumes /data/stampeders2026.json. Codex task: "Update stampeders2026.json with latest result"

import stampedersData from "@/data/stampeders2026.json";

export function OSFLTracker() {
  const { record, nextGame, lastResult, isGameDay, season } = stampedersData;
  const hasNextGame = nextGame.opponent !== "TBD";

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6">
      <div className="flex items-center gap-3 mb-5">
        <span
          className={`size-2.5 shrink-0 rounded-full ${
            isGameDay ? "bg-emerald-400 animate-pulse" : "bg-slate-600"
          }`}
        />
        <p className="font-mono text-[0.63rem] uppercase tracking-[0.24em] text-emerald-400">
          {isGameDay
            ? "Game Day · Burlington Stampeders U18"
            : `Burlington Stampeders U18 · ${season} Season`}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
        <div>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-slate-500">
            Record
          </p>
          <a
            href="https://osfl.club/standings/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <span className="font-mono text-lg font-bold text-white">
              W: {record.wins}
            </span>
            <span className="font-mono text-slate-600">|</span>
            <span className="font-mono text-lg font-bold text-white">
              L: {record.losses}
            </span>
            <span className="font-mono text-slate-600">|</span>
            <span className="font-mono text-lg font-bold text-white">
              T: {record.ties}
            </span>
          </a>
          <p className="font-mono text-[0.56rem] text-slate-600">OSFL Standings</p>
        </div>

        {hasNextGame && (
          <div className="col-span-2">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-slate-500">
              Next Game
            </p>
            <p className="mt-1 text-base font-medium text-slate-200">
              vs {nextGame.opponent}
            </p>
            <p className="font-mono text-[0.63rem] text-slate-400">
              {nextGame.date}
              {nextGame.time !== "TBD" ? ` · ${nextGame.time}` : ""}
            </p>
          </div>
        )}

        {lastResult && (
          <div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-slate-500">
              Last Result
            </p>
            <p className="mt-1 text-base font-medium text-slate-200">{lastResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}
