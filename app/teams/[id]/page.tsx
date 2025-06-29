"use client";

import { useParams } from "next/navigation";
import { PlayerCard } from "@/components/PlayerCard";
import { usePlayers, useTeams } from "@/hooks";
import { Users } from "lucide-react";

export default function FixturePage() {
    const params = useParams();
    const id = params.id as string;
    const { team } = useTeams(id);
    const { players } = usePlayers(id);

    if (!team) {
        return <></>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">{team.name}</h2>
                        <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{players?.length} players</span>
                        </div>
                    </div>
                </div>

                {players && players.length > 0 ? ( // Corrected condition: render if players exist and length > 0
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <div className="text-xl">Players</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {players
                                    .sort((a, b) => {
                                        if (a.isCaptain) return -1;
                                        if (b.isCaptain) return 1;
                                        if (a.isViceCaptain) return -1;
                                        if (b.isViceCaptain) return 1;
                                        return a.name.localeCompare(b.name);
                                    })
                                    .map((player) => (
                                        <PlayerCard key={player.id} player={player} />
                                    ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-600">No players found for this team.</div>
                )}
            </main>
        </div>
    );
}
