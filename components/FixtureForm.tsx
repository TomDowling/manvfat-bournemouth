"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabaseClient";
import { useTeams } from "@/hooks/useTeams";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FixtureFormValues {
    homeTeamId: string;
    awayTeamId: string;
    date: string;
    gameweek: number;
    season: number;
}

interface IFixtureForm {}

export const FixtureForm: React.FC<IFixtureForm> = () => {
    const { teams: allTeams, loading: loadingTeams, error: teamsError } = useTeams();

    const form = useForm<FixtureFormValues>({
        defaultValues: {
            homeTeamId: "",
            awayTeamId: "",
            date: "",
            gameweek: 1,
            season: 13
        }
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
        watch,
        setError
    } = form;

    const selectedHomeTeamId = watch("homeTeamId");

    const onSubmit = async (data: FixtureFormValues) => {
        if (data.homeTeamId === data.awayTeamId) {
            setError("awayTeamId", {
                type: "manual",
                message: "Home team and Away team cannot be the same."
            });
            return;
        }
        const fixtureDate = new Date(data.date).toISOString();

        try {
            const { error } = await supabase.from("fixtures").insert({
                homeTeamId: data.homeTeamId,
                awayTeamId: data.awayTeamId,
                date: fixtureDate,
                gameweek: data.gameweek,
                season: data.season
            });

            if (error) {
                console.error("Error adding fixture:", error);
                alert(`Failed to add fixture: ${error.message}`);
            } else {
                console.log("Fixture added successfully!");
                alert(
                    `Fixture added successfully! Between ${allTeams?.find((t) => t.id === data.homeTeamId)?.name || "Home Team"} and ${
                        allTeams?.find((t) => t.id === data.awayTeamId)?.name || "Away Team"
                    } on ${new Date(data.date).toLocaleDateString()}.`
                );
                reset();
            }
        } catch (error) {
            console.error("Unexpected error during fixture submission:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    };

    if (loadingTeams) {
        return (
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Add New Fixture</CardTitle>
                    <CardDescription>Loading teams...</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Fetching teams for selection. Please wait...</p>
                </CardContent>
            </Card>
        );
    }

    if (teamsError) {
        return (
            <Card className="w-full max-w-md mx-auto border-red-500">
                <CardHeader>
                    <CardTitle>Error Loading Teams</CardTitle>
                    <CardDescription>Could not load teams for fixture creation.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-red-600">{teamsError.message}</p>
                    <p>Please check your Supabase connection and try again.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-lg mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Add New Fixture</CardTitle>
                <CardDescription className="text-gray-600">Fill in the details to schedule a new match.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <Label htmlFor="homeTeamId" className="block text-sm font-medium text-gray-700 mb-1">
                            Home Team
                        </Label>
                        <Select
                            onValueChange={(value) => setValue("homeTeamId", value, { shouldValidate: true })}
                            value={watch("homeTeamId")}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select home team" />
                            </SelectTrigger>
                            <SelectContent>
                                {allTeams?.map((team) => (
                                    <SelectItem key={team.id} value={team.id}>
                                        {team.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.homeTeamId && <p className="text-red-500 text-xs mt-1">{errors.homeTeamId.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="awayTeamId" className="block text-sm font-medium text-gray-700 mb-1">
                            Away Team
                        </Label>
                        <Select
                            onValueChange={(value) => setValue("awayTeamId", value, { shouldValidate: true })}
                            value={watch("awayTeamId")}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select away team" />
                            </SelectTrigger>
                            <SelectContent>
                                {allTeams
                                    ?.filter((team) => team.id !== selectedHomeTeamId)
                                    .map((team) => (
                                        <SelectItem key={team.id} value={team.id}>
                                            {team.name}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                        {errors.awayTeamId && <p className="text-red-500 text-xs mt-1">{errors.awayTeamId.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            Date and Time
                        </Label>
                        <Input
                            id="date"
                            type="datetime-local"
                            {...register("date", { required: "Date and time is required." })}
                            className="w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="gameweek" className="block text-sm font-medium text-gray-700 mb-1">
                            Gameweek
                        </Label>
                        <Input
                            id="gameweek"
                            type="number"
                            {...register("gameweek", {
                                required: "Gameweek is required.",
                                valueAsNumber: true,
                                min: { value: 1, message: "Gameweek must be at least 1." }
                            })}
                            className="w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.gameweek && <p className="text-red-500 text-xs mt-1">{errors.gameweek.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="season" className="block text-sm font-medium text-gray-700 mb-1">
                            Season
                        </Label>
                        <Input
                            id="season"
                            type="number"
                            {...register("season", {
                                required: "Season is required.",
                                valueAsNumber: true
                            })}
                            className="w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.season && <p className="text-red-500 text-xs mt-1">{errors.season.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        disabled={isSubmitting}>
                        {isSubmitting ? "Adding Fixture..." : "Add Fixture"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
