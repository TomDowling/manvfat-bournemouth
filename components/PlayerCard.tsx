"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTeams } from "@/hooks";
import { playerStats, IPlayer } from "@/lib/data";
import { teamColorMap } from "@/lib/teamColorMap";
import { cn } from "@/lib/utils";

interface IPlayerCard {
    player: IPlayer;
}

export const PlayerCard: React.FC<IPlayerCard> = ({ player }) => {
    const { team } = useTeams(player.teamId);

    if (!player) {
        return <div>Player not found</div>;
    }

    const stats = playerStats(player.id);
    const teamColorClasses = team ? teamColorMap[team.color.toLowerCase()] || "" : "";

    return (
        <Card key={player.id} className="relative hover:shadow-lg transition-shadow overflow-hidden">
            <div
                className={cn(
                    teamColorClasses,
                    "absolute transform rotate-45 text-center text-white font-semibold py-1 h-8 right-[-35px] top-[32px] w-[170px]"
                )}>
                {player.isCaptain && <>Captain</>}
                {player.isViceCaptain && <>Vice</>}
            </div>

            <CardHeader className="pb-3">
                <CardTitle className="text-lg">{player.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2 text-sm">
                    <span className="font-medium">{team?.name}</span>
                    <span className="font-medium">Goals: {stats?.goals}</span>
                    <span className="font-medium">Assists: {stats?.assists}</span>
                </div>
            </CardContent>
        </Card>
    );
};
