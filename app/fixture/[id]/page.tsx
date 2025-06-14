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
import { fixtures, teams, players } from "@/lib/data";

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
    const fixtureId = params.id as string;

    const fixture = fixtures.find((f) => f.id === fixtureId);

    const [homeScore, setHomeScore] = useState("0");
    const [awayScore, setAwayScore] = useState("0");
    const [goals, setGoals] = useState<Goal[]>([]);
    const [newGoal, setNewGoal] = useState({
        scorer: "",
        assister: "",
        minute: "",
        team: "home" as "home" | "away"
    });

    if (!fixture) {
        return <div>Fixture not found</div>;
    }

    const homeTeam = teams.find((t) => t.id === fixture.homeTeam)!;
    const awayTeam = teams.find((t) => t.id === fixture.awayTeam)!;
    const homePlayers = players.filter((p) => p.teamId === fixture.homeTeam);
    const awayPlayers = players.filter((p) => p.teamId === fixture.awayTeam);

    const addGoal = () => {
        if (!newGoal.scorer || !newGoal.minute) return;

        const goal: Goal = {
            id: Date.now().toString(),
            scorer: newGoal.scorer,
            assister: newGoal.assister || undefined,
            minute: Number.parseInt(newGoal.minute),
            team: newGoal.team
        };

        setGoals([...goals, goal]);
        setNewGoal({ scorer: "", assister: "", minute: "", team: "home" });

        // Update scores based on goals
        const homeGoals = [...goals, goal].filter((g) => g.team === "home").length;
        const awayGoals = [...goals, goal].filter((g) => g.team === "away").length;
        setHomeScore(homeGoals.toString());
        setAwayScore(awayGoals.toString());
    };

    const removeGoal = (goalId: string) => {
        const updatedGoals = goals.filter((g) => g.id !== goalId);
        setGoals(updatedGoals);

        // Update scores
        const homeGoals = updatedGoals.filter((g) => g.team === "home").length;
        const awayGoals = updatedGoals.filter((g) => g.team === "away").length;
        setHomeScore(homeGoals.toString());
        setAwayScore(awayGoals.toString());
    };

    const saveResult = () => {
        // In a real app, this would save to the database
        console.log("Saving result:", {
            fixtureId,
            homeScore: Number.parseInt(homeScore),
            awayScore: Number.parseInt(awayScore),
            goals
        });
        router.push("/");
    };

    const currentTeamPlayers = newGoal.team === "home" ? homePlayers : awayPlayers;
    const allPlayers = [...homePlayers, ...awayPlayers];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-3">
                            <Trophy className="h-8 w-8 text-green-600" />
                            <h1 className="text-2xl font-bold text-gray-900">Football League Manager</h1>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex items-center gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Match Details</h2>
                        <p className="text-gray-600">
                            {fixture.matchday} - {fixture.date}
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="h-5 w-5" />
                                Match Score
                            </CardTitle>
                            <CardDescription>Set the final score for this fixture</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="text-center space-y-2">
                                    <div className="font-semibold text-lg">{homeTeam.name}</div>
                                    <Input
                                        type="number"
                                        value={homeScore}
                                        onChange={(e) => setHomeScore(e.target.value)}
                                        className="w-20 text-center text-2xl font-bold"
                                        min="0"
                                    />
                                    <div className="text-sm text-gray-500">Home</div>
                                </div>
                                <div className="text-2xl font-bold text-gray-400">-</div>
                                <div className="text-center space-y-2">
                                    <div className="font-semibold text-lg">{awayTeam.name}</div>
                                    <Input
                                        type="number"
                                        value={awayScore}
                                        onChange={(e) => setAwayScore(e.target.value)}
                                        className="w-20 text-center text-2xl font-bold"
                                        min="0"
                                    />
                                    <div className="text-sm text-gray-500">Away</div>
                                </div>
                            </div>

                            <Button onClick={saveResult} className="w-full" size="lg">
                                Save Match Result
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Plus className="h-5 w-5" />
                                Add Goal
                            </CardTitle>
                            <CardDescription>Record goalscorers and assisters</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="team">Team</Label>
                                    <Select
                                        value={newGoal.team}
                                        onValueChange={(value: "home" | "away") => setNewGoal({ ...newGoal, team: value })}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="home">{homeTeam.name}</SelectItem>
                                            <SelectItem value="away">{awayTeam.name}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="minute">Minute</Label>
                                    <Input
                                        id="minute"
                                        type="number"
                                        placeholder="90"
                                        value={newGoal.minute}
                                        onChange={(e) => setNewGoal({ ...newGoal, minute: e.target.value })}
                                        min="1"
                                        max="120"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="scorer">Goalscorer</Label>
                                <Select value={newGoal.scorer} onValueChange={(value) => setNewGoal({ ...newGoal, scorer: value })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select goalscorer" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {currentTeamPlayers.map((player) => (
                                            <SelectItem key={player.id} value={player.id}>
                                                {player.name} (#{player.number})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="assister">Assister (Optional)</Label>
                                <Select value={newGoal.assister} onValueChange={(value) => setNewGoal({ ...newGoal, assister: value })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select assister" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="">No assist</SelectItem>
                                        {currentTeamPlayers.map((player) => (
                                            <SelectItem key={player.id} value={player.id}>
                                                {player.name} (#{player.number})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button onClick={addGoal} className="w-full">
                                <Plus className="h-4 w-4 mr-2" />
                                Add Goal
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {goals.length > 0 && (
                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="h-5 w-5" />
                                Goals Scored
                            </CardTitle>
                            <CardDescription>All goals recorded for this match</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {goals
                                    .sort((a, b) => a.minute - b.minute)
                                    .map((goal) => {
                                        const scorer = allPlayers.find((p) => p.id === goal.scorer);
                                        const assister = goal.assister ? allPlayers.find((p) => p.id === goal.assister) : null;
                                        const team = goal.team === "home" ? homeTeam : awayTeam;

                                        return (
                                            <div key={goal.id} className="flex items-center justify-between p-4 border rounded-lg">
                                                <div className="flex items-center gap-4">
                                                    <Badge variant="outline">{goal.minute}'</Badge>
                                                    <div>
                                                        <div className="font-medium">
                                                            {scorer?.name} ({team.name})
                                                        </div>
                                                        {assister && <div className="text-sm text-gray-600">Assist: {assister.name}</div>}
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm" onClick={() => removeGoal(goal.id)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        );
                                    })}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </main>
        </div>
    );
}
