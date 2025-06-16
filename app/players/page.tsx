"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { teams, players, playerStats } from "@/lib/data";
import { teamColorMap } from "@/lib/teamColorMap";
import { PlayerCard } from "@/components/PlayerCard";

export default function PlayersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTeam, setSelectedTeam] = useState("all");

    const filteredPlayers = players
        .filter((player) => player.isActive)
        .filter((player) => {
            const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTeam = selectedTeam === "all" || player.teamId === selectedTeam;
            return matchesSearch && matchesTeam;
        })
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">All Players</h2>
                        <p className="text-gray-600">Browse all players in the league</p>
                    </div>
                </div>

                <div className="mb-6 flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            placeholder="Search players..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                        <SelectTrigger className="w-full sm:w-48">
                            <SelectValue placeholder="Filter by team" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Teams</SelectItem>
                            {teams.map((team) => (
                                <SelectItem key={team.id} value={team.id}>
                                    {team.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredPlayers.map((player) => (
                        <PlayerCard key={player.id} id={player.id} />
                    ))}
                </div>

                {filteredPlayers.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No players found matching your criteria.</p>
                    </div>
                )}
            </main>
        </div>
    );
}
