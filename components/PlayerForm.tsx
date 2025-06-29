"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabaseClient";
import { ITeam } from "@/lib/data"; // Assuming ITeam is defined here
import { useTeams } from "@/hooks/useTeams"; // Import useTeams hook to fetch teams

// UI Components (assuming shadcn/ui)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming Checkbox component exists

// Manually define the type for form data
interface PlayerFormValues {
    name: string;
    teamId: string;
    isKeeper: boolean;
    isCaptain: boolean;
    isViceCaptain: boolean;
    isActive: boolean;
}

interface IPlayerForm {}

export const PlayerForm: React.FC<IPlayerForm> = () => {
    // Fetch all teams to populate the teamId select input
    const { teams: allTeams, loading: loadingTeams, error: teamsError } = useTeams();

    const form = useForm<PlayerFormValues>({
        defaultValues: {
            name: "",
            teamId: "",
            isKeeper: false,
            isCaptain: false,
            isViceCaptain: false,
            isActive: true
        }
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue, // Needed for Select and Checkbox components
        watch // To watch values for conditional rendering/validation
    } = form;

    const onSubmit = async (data: PlayerFormValues) => {
        try {
            // Supabase will generate the ID automatically based on your DDL default
            const { error } = await supabase.from("players").insert({
                name: data.name,
                teamId: data.teamId, // Match the column name in DDL
                isKeeper: data.isKeeper,
                isCaptain: data.isCaptain,
                isViceCaptain: data.isViceCaptain,
                isActive: data.isActive
            });

            if (error) {
                console.error("Error adding player:", error);
                alert(`Failed to add player: ${error.message}`);
            } else {
                console.log("Player added successfully!");
                alert(
                    `Player "${data.name}" added successfully to team "${
                        allTeams?.find((t) => t.id === data.teamId)?.name || "Unknown Team"
                    }"!`
                );
                reset(); // Reset form after successful submission
            }
        } catch (error) {
            console.error("Unexpected error during player submission:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    };

    if (loadingTeams) {
        return (
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Create New Player</CardTitle>
                    <CardDescription>Loading teams...</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Fetching teams for player assignment. Please wait...</p>
                </CardContent>
            </Card>
        );
    }

    if (teamsError) {
        return (
            <Card className="w-full max-w-md mx-auto border-red-500">
                <CardHeader>
                    <CardTitle>Error Loading Teams</CardTitle>
                    <CardDescription>Could not load teams for player creation.</CardDescription>
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
                <CardTitle className="text-2xl font-bold text-gray-900">Create New Player</CardTitle>
                <CardDescription className="text-gray-600">Enter the details for the new player.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Player Name Input */}
                    <div>
                        <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Player Name
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            {...register("name", { required: "Player name is required." })}
                            className="w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Team Select */}
                    <div>
                        <Label htmlFor="teamId" className="block text-sm font-medium text-gray-700 mb-1">
                            Assign to Team
                        </Label>
                        <Select onValueChange={(value) => setValue("teamId", value, { shouldValidate: true })} value={watch("teamId")}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a team" />
                            </SelectTrigger>
                            <SelectContent>
                                {allTeams?.map((team) => (
                                    <SelectItem key={team.id} value={team.id}>
                                        {team.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.teamId && <p className="text-red-500 text-xs mt-1">{errors.teamId.message}</p>}
                    </div>

                    {/* Checkbox Group for Player Roles and Status */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isKeeper"
                                checked={watch("isKeeper")}
                                onCheckedChange={(checked) => setValue("isKeeper", checked as boolean)}
                            />
                            <Label htmlFor="isKeeper" className="text-sm font-medium text-gray-700">
                                Is Keeper
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isCaptain"
                                checked={watch("isCaptain")}
                                onCheckedChange={(checked) => setValue("isCaptain", checked as boolean)}
                            />
                            <Label htmlFor="isCaptain" className="text-sm font-medium text-gray-700">
                                Is Captain
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isViceCaptain"
                                checked={watch("isViceCaptain")}
                                onCheckedChange={(checked) => setValue("isViceCaptain", checked as boolean)}
                            />
                            <Label htmlFor="isViceCaptain" className="text-sm font-medium text-gray-700">
                                Is Vice Captain
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isActive"
                                checked={watch("isActive")}
                                onCheckedChange={(checked) => setValue("isActive", checked as boolean)}
                            />
                            <Label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                                Is Active
                            </Label>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        disabled={isSubmitting}>
                        {isSubmitting ? "Creating Player..." : "Create Player"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
