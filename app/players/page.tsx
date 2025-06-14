"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { teams, players } from "@/lib/data";

export default function PlayersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTeam, setSelectedTeam] = useState("all");
    const [selectedPosition, setSelectedPosition] = useState("all");

    const filteredPlayers = players.filter((player) => {
        const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTeam = selectedTeam === "all" || player.teamId === selectedTeam;
        const matchesPosition = selectedPosition === "all" || player.position === selectedPosition;
        return matchesSearch && matchesTeam && matchesPosition;
    });

    const positions = [...new Set(players.map((p) => p.position))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-3">
                            <Trophy className="h-8 w-8 text-green-600" />
                            <h1 className="text-2xl font-bold text-gray-900">Football League Manager</h1>
                        </div>
                        <nav className="flex space-x-6">
                            <Link href="/" className="text-gray-600 hover:text-green-600">
                                Fixtures
                            </Link>
                            <Link href="/teams" className="text-gray-600 hover:text-green-600">
                                Teams
                            </Link>
                            <Link href="/players" className="text-green-600 font-medium">
                                Players
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

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
                    <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                        <SelectTrigger className="w-full sm:w-48">
                            <SelectValue placeholder="Filter by position" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Positions</SelectItem>
                            {positions.map((position) => (
                                <SelectItem key={position} value={position}>
                                    {position}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredPlayers.map((player) => {
                        const team = teams.find((t) => t.id === player.teamId);
                        return (
                            <Card key={player.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg">{player.name}</CardTitle>
                                    <CardDescription>#{player.number}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <Badge variant="outline">{player.position}</Badge>
                                            <span className="text-sm text-gray-600">Age {player.age}</span>
                                        </div>
                                        <div className="text-sm">
                                            <span className="font-medium">{team?.name}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
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
