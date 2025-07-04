// "use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { IPlayer, ITeam } from "@/lib/data";
import { createClient } from "@/lib/supabase";

const getTeams = async (): Promise<ITeam[]> => {
    const supabase = await createClient();
    const { data: teams, error } = await supabase.from("teams").select("*").eq("isActive", true);

    return teams || [];
};

const getPlayers = async (): Promise<IPlayer[]> => {
    const supabase = await createClient();
    const { data: players, error } = await supabase.from("players").select("*").eq("isActive", true);

    return players || [];
};

export default async function TeamsPage() {
    const teams = await getTeams();
    const players = await getPlayers();

    if (!teams) {
        return <></>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">League Teams</h2>
                        <p className="text-gray-600">All teams participating in the league</p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {teams.map((team) => {
                        const teamPlayers = players.filter((player) => player.isActive).filter((p) => p.teamId === team.id);
                        return (
                            <Card key={team.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-xl">{team.name}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">{teamPlayers.length} players</span>
                                        </div>

                                        <Link href={`/teams/${team.id}`}>
                                            <Button className="w-full mt-5" variant="outline">
                                                View Team
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
