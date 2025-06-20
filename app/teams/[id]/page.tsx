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
import { PlayerCard } from "@/components/PlayerCard";

interface Goal {
    id: string;
    scorer: string;
    assister?: string;
    minute: number;
    team: "home" | "away";
}

export default function FixturePage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const item = teams.find((f) => f.id === id);
    const teamPlayers = players.filter((player) => player.isActive).filter((p) => p.teamId === id);

    if (!item) {
        return <div>Team not found</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">{item.name}</h2>
                        <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{teamPlayers.length} players</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="text-xl">Players</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamPlayers
                                .slice()
                                .sort((a, b) => {
                                    if (a.isCaptain) return -1;
                                    if (b.isCaptain) return 1;
                                    if (a.isViceCaptain) return -1;
                                    if (b.isViceCaptain) return 1;
                                    return a.name.localeCompare(b.name);
                                })
                                .map((player) => (
                                    <PlayerCard id={player.id} />
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
