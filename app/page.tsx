import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Trophy, Users, Plus } from "lucide-react";
import Link from "next/link";
import { fixtures, teams, gameEvents, topGoalScorers, topAssists, topCleanSheets, PlayerStats } from "@/lib/data";
import { format } from "date-fns";
import { teamColorMap } from "@/lib/teamColorMap";
import { TopPlayersDisplay } from "@/components/TopPlayersDisplay";

export default function HomePage() {
    const now = new Date();
    const upcomingFixtures = fixtures.filter((f) => new Date(f.date) > now);
    const completedFixtures = fixtures.filter((f) => new Date(f.date) <= now);

    console.log("topGoalScorers", topGoalScorers);
    console.log("topAssists", topAssists);
    console.log("topCleanSheets", topCleanSheets);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Home</h2>
                    <p className="text-gray-600">See all the leaderboards for the current Season</p>

                    <div className="mt-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <TopPlayersDisplay title="Top Goal Scorer" players={topGoalScorers} statKey="goals" />
                            <TopPlayersDisplay title="Top Playmaker" players={topAssists} statKey="assists" />
                            <TopPlayersDisplay title="Most Cleansheets" players={topCleanSheets} statKey="cleanSheets" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
