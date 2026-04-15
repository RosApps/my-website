// credentials.ts - professional designations displayed as pills in the Hero section.
// Codex task: "Add [ACRONYM] credential to credentials.ts"

type CredentialStatus = "In Progress" | "Earned";

export type Credential = {
  acronym: string;
  label: string;
  status: CredentialStatus;
};

export const credentials: Credential[] = [
  { acronym: "MBA", label: "DeGroote/McMaster", status: "In Progress" },
  { acronym: "BHSc", label: "Western University", status: "Earned" },
  { acronym: "FMVA", label: "Corporate Finance Institute · Earned during ShipNoble co-op", status: "Earned" },
  { acronym: "CAPM", label: "PMI · Earned during ShipNoble co-op", status: "Earned" },
  { acronym: "BIDA", label: "Corporate Finance Institute · Earned during ShipNoble co-op", status: "Earned" },
  { acronym: "FITP", label: "Corporate Finance Institute · Earned during ShipNoble co-op", status: "Earned" },
];
