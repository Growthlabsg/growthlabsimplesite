"use client";

import StructuredData from "./StructuredData";
import { getLeadershipTeamSchema } from "@/lib/seo/structuredData";

export default function LeadershipTeamSchema() {
  const leadershipTeamSchemas = getLeadershipTeamSchema();

  return (
    <>
      {leadershipTeamSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
    </>
  );
}
