"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Trophy, Plus } from "lucide-react";
import Link from "next/link";
import { fixtureGoals } from "@/lib/data";
import { format } from "date-fns";
import { useTeams } from "@/hooks";
import { useFixtures } from "@/hooks/useFixtures";

export default function Page() {
    const now = new Date();
    const { fixtures } = useFixtures();
    const upcomingFixtures = fixtures?.filter((f) => new Date(f.date) > now);
    const completedFixtures = fixtures?.filter((f) => new Date(f.date) <= now);
    const { teams } = useTeams();

    console.log("fixtures", fixtures);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">League Fixtures</h2>
                    <p className="text-gray-600">Manage fixtures and track match results</p>
                </div>

                <Tabs defaultValue="upcoming" className="space-y-6">
                    <TabsList className="grid w-full max-w-md grid-cols-2">
                        <TabsTrigger value="upcoming" className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Upcoming ({upcomingFixtures?.length})
                        </TabsTrigger>
                        <TabsTrigger value="completed" className="flex items-center gap-2">
                            <Trophy className="h-4 w-4" />
                            Completed ({completedFixtures?.length})
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="upcoming" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {upcomingFixtures?.map((fixture) => (
                                <Card key={fixture.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader className="pb-3">
                                        <div className="flex justify-between items-start">
                                            <Badge variant="outline" className="text-xs">
                                                Gameweek {fixture.gameweek}
                                            </Badge>
                                            <Badge variant="secondary" className="text-xs">
                                                {format(fixture.date, "dd MMM yyyy @ HH:mm")}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-center">
                                                <div className="font-semibold text-lg">
                                                    {teams?.find((t) => t.id === fixture.homeTeamId)?.name}
                                                </div>
                                                <div className="text-sm text-gray-500">Home</div>
                                            </div>
                                            <div className="text-2xl font-bold text-gray-400">VS</div>
                                            <div className="text-center">
                                                <div className="font-semibold text-lg">
                                                    {teams?.find((t) => t.id === fixture.awayTeamId)?.name}
                                                </div>
                                                <div className="text-sm text-gray-500">Away</div>
                                            </div>
                                        </div>
                                        {/* <Link href={`/fixture/${fixture.id}`}> */}
                                        <Button
                                            className="w-full disabled:cursor-not-allowed disabled:opacity-50"
                                            variant="outline"
                                            disabled>
                                            <Plus className="h-4 w-4 mr-2" />
                                            Log Result
                                        </Button>
                                        {/* </Link> */}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="completed" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {completedFixtures
                                ?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                // .filter((fixture) => fixture.id === "f29")
                                .map((fixture) => {
                                    const fixtureEvents = fixtureGoals(fixture);

                                    return (
                                        <Card key={fixture.id} className="hover:shadow-lg transition-shadow">
                                            <CardHeader className="pb-3">
                                                <div className="flex justify-between items-start">
                                                    <Badge variant="outline" className="text-xs">
                                                        Gameweek {fixture.gameweek}
                                                    </Badge>
                                                    <Badge variant="secondary" className="text-xs">
                                                        {format(fixture.date, "dd MMM")} {/* Removed @ HH:mm as it's not in your data */}
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="text-center">
                                                        <div className="font-semibold text-lg">
                                                            {teams?.find((t) => t.id === fixture.homeTeamId)?.name}
                                                        </div>
                                                        <div className="text-3xl font-bold text-green-600">{fixtureEvents.home.goals}</div>
                                                    </div>
                                                    <div className="text-lg font-bold text-gray-400">-</div>
                                                    <div className="text-center">
                                                        <div className="font-semibold text-lg">
                                                            {teams?.find((t) => t.id === fixture.awayTeamId)?.name}
                                                        </div>
                                                        <div className="text-3xl font-bold text-green-600">{fixtureEvents.away.goals}</div>
                                                    </div>
                                                </div>
                                                <Link href={`/fixtures/${fixture.id}`}>
                                                    <Button className="w-full" variant="outline" size="sm">
                                                        View Details
                                                    </Button>
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
