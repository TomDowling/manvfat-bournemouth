"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabaseClient";

// UI Components (assuming shadcn/ui)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Added Select imports

// Manually define the type for form data
interface TeamFormValues {
    name: string;
    color: string;
    isActive: boolean;
}

interface ITeamForm {}

export const TeamForm: React.FC<ITeamForm> = () => {
    const form = useForm<TeamFormValues>({
        defaultValues: {
            name: "",
            color: "", // Default to empty for Select placeholder
            isActive: true
        }
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
        watch
    } = form;

    const onSubmit = async (data: TeamFormValues) => {
        try {
            const { error } = await supabase.from("teams").insert({
                name: data.name,
                color: data.color,
                isActive: data.isActive
            });

            if (error) {
                console.error("Error adding team:", error);
                alert(`Failed to add team: ${error.message}`);
            } else {
                console.log("Team added successfully!");
                alert(`Team "${data.name}" added successfully with color ${data.color}!`);
                reset();
            }
        } catch (error) {
            console.error("Unexpected error during team submission:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    };

    const predefinedColors = ["yellow", "purple", "black", "orange", "green", "white", "blue", "red"];

    return (
        <Card className="w-full max-w-lg mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Create New Team</CardTitle>
                <CardDescription className="text-gray-600">Enter the details for the new team.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Team Name Input */}
                    <div>
                        <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Team Name
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            {...register("name", { required: "Team name is required." })}
                            className="w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Color Select Input */}
                    <div>
                        <Label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
                            Team Color
                        </Label>
                        <Select onValueChange={(value) => setValue("color", value, { shouldValidate: true })} value={watch("color")}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a color" />
                            </SelectTrigger>
                            <SelectContent>
                                {predefinedColors.map((colorOption) => (
                                    <SelectItem key={colorOption} value={colorOption}>
                                        <div className="flex items-center">
                                            <div
                                                className="w-4 h-4 rounded-full mr-2 border"
                                                style={{
                                                    backgroundColor: colorOption,
                                                    borderColor: colorOption === "white" ? "#ccc" : "transparent"
                                                }}></div>
                                            {colorOption.charAt(0).toUpperCase() + colorOption.slice(1)}
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.color && <p className="text-red-500 text-xs mt-1">{errors.color.message}</p>}
                    </div>

                    {/* Is Active Checkbox */}
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

                    <Button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        disabled={isSubmitting}>
                        {isSubmitting ? "Creating Team..." : "Create Team"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
