"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Trophy, ArrowLeft, Plus, Trash2, Target, Users } from "lucide-react";
import Link from "next/link";
import { fixtures, teams, players, playerStats } from "@/lib/data";
import { teamColorMap } from "@/lib/teamColorMap";
import { cn } from "@/lib/utils";

interface IPlayerCard {
    id: string;
}

export const PlayerCard: React.FC<IPlayerCard> = ({ id }) => {
    const player = players.find((p) => p.id === id);

    if (!player) {
        return <div>Player not found</div>;
    }

    const stats = playerStats(player.id);
    const team = teams.find((t) => t.id === player.teamId);
    const teamColorClasses = team ? teamColorMap[team.color.toLowerCase()] || "" : "";

    return (
        <Card key={player.id} className="relative hover:shadow-lg transition-shadow overflow-hidden">
            <div
                className={cn(teamColorClasses, "absolute transform rotate-45 text-center text-white font-semibold py-1 h-8 right-[-35px] top-[32px] w-[170px]")}>
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
