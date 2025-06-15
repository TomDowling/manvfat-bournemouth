"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Trophy, Users, Plus } from "lucide-react";
import Link from "next/link";
import { fixtures, teams, gameEvents, topGoalScorers, topAssists, topCleanSheets } from "@/lib/data";
import { format } from "date-fns";

const PlayerRow = ({ rank, name, team, goals, isTopScorer }) => {
    return (
        <div className={`flex items-center py-2 ${isTopScorer ? "bg-red-700 text-white p-4 rounded-lg mb-4" : "border-b border-gray-200"}`}>
            <div className={`w-8 text-center font-bold ${isTopScorer ? "text-4xl" : "text-lg"}`}>{rank}</div>
            <div className="flex-1 ml-4">
                <div className={`font-semibold ${isTopScorer ? "text-3xl" : "text-lg"}`}>{name}</div>
                <div className={`text-sm ${isTopScorer ? "text-gray-200" : "text-gray-600"}`}>{team}</div>
            </div>
            <div className={`font-bold ${isTopScorer ? "text-5xl" : "text-2xl"} mr-4`}>{goals}</div>
        </div>
    );
};

export default function HomePage() {
    const now = new Date();
    const upcomingFixtures = fixtures.filter((f) => new Date(f.date) > now);
    const completedFixtures = fixtures.filter((f) => new Date(f.date) <= now);

    console.log("topGoalScorers", topGoalScorers);
    console.log("topAssists", topAssists);
    console.log("topCleanSheets", topCleanSheets);

    const scorersData = [
        { rank: 1, name: "Mohamed Salah", team: "Liverpool", goals: 29, imageUrl: "URL_TO_SALAH_IMAGE" }, // Replace with actual URL
        { rank: 2, name: "Alexander Isak", team: "Newcastle", goals: 23 },
        { rank: 3, name: "Erling Haaland", team: "Man City", goals: 22 },
        { rank: 4, name: "Bryan Mbeumo", team: "Brentford", goals: 20 },
        { rank: 4, name: "Chris Wood", team: "Nott'm Forest", goals: 20 },
        { rank: 6, name: "Yoane Wissa", team: "Brentford", goals: 19 },
        { rank: 7, name: "Ollie Watkins", team: "Aston Villa", goals: 16 },
        { rank: 8, name: "Cole Palmer", team: "Chelsea", goals: 15 },
        { rank: 8, name: "Matheus Cunha", team: "Wolves", goals: 15 },
        { rank: 10, name: "Jean-Philippe Mateta", team: "Crystal Palace", goals: 14 }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Home</h2>
                    <p className="text-gray-600">See all the leaderboards for the current Season</p>

                    <div className="mt-20">
                        <div className="text-xl">Top Goal Scorer</div>
                        <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg font-sans">
                            {topGoalScorers.slice(0, 10).map((player, index) => (
                                <div key={player.playerName}>
                                    {topGoalScorers.findIndex((p) => p.playerId === player.playerId) === 0 ? (
                                        <div className="bg-red-700 text-white p-4 rounded-lg mb-4 flex items-center">
                                            <div className="flex-1">
                                                {/* <div className="text-sm">1</div> */}
                                                <div className="text-3xl font-bold">{player.playerName}</div>
                                                <div className="text-lg text-gray-200">{player.teamName}</div>
                                                <div className="text-5xl font-bold mt-2">{player.goals}</div>
                                            </div>
                                        </div>
                                    ) : (
                                        <PlayerRow
                                            rank={topGoalScorers.findIndex((p) => p.playerId === player.playerId) + 1}
                                            name={player.playerName}
                                            team={player.teamName}
                                            goals={player.goals}
                                            isTopScorer={false}
                                        />
                                    )}
                                </div>
                            ))}
                            {/* <div className="mt-4 text-center">
                                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                                        View Full List
                                        <svg
                                            className="ml-2 w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </button>
                                </div> */}
                        </div>
                        <ul>
                            {topGoalScorers.map((player) => (
                                <li>
                                    <div>
                                        <div>{topGoalScorers.findIndex((p) => p.playerId === player.playerId) + 1}</div>
                                        <div className="font-bold">{player.playerName}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                            {topGoalScorers.map((player) => (
                                <Card key={player.playerId} className="mt-4">
                                    <CardHeader>
                                        <CardTitle>{player.playerName}</CardTitle>
                                        <CardDescription>Goals: {player.goals}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Badge className="bg-green-500 text-white"></Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
