"use client";

import { PlayerStats } from "@/lib/data";
import { teamColorMap } from "@/lib/teamColorMap";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTeams } from "@/hooks";

// @ts-ignore
export const PlayerRow = ({ rank, name, team, value, isTop }) => {
    return (
        <div className={`flex gap-2 items-center py-2 ${isTop ? "bg-red-700 text-white p-4 rounded-lg mb-4" : "border-b border-gray-200"}`}>
            <div className={`w-8 text-center font-bold ${isTop ? "text-4xl" : "text-lg"}`}>{rank}</div>
            <div className="flex-1 flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-300" />
                <div>
                    <div className={`font-semibold ${isTop ? "text-3xl" : ""}`}>{name}</div>
                    <div className={`text-sm ${isTop ? "text-gray-200" : "text-gray-600"}`}>{team}</div>
                </div>
            </div>
            <div className={`font-bold ${isTop ? "text-5xl" : "text-2xl"}`}>{value}</div>
        </div>
    );
};

interface TopPlayersDisplayProps {
    title: string;
    players: PlayerStats[];
    statKey: "goals" | "assists" | "cleanSheets";
}

export const TopPlayersDisplay: React.FC<TopPlayersDisplayProps> = ({ title, players, statKey }) => {
    const { teams } = useTeams();
    const [showFullList, setShowFullList] = useState(false);

    const getTruncatedList = () => {
        let truncatedPlayers: PlayerStats[] = [];

        if (players.length > 0) {
            for (let i = 0; i < Math.min(9, players.length); i++) {
                truncatedPlayers.push(players[i]);
            }

            if (players.length > 9) {
                const tenthPlaceValue = players[9][statKey];

                for (let i = 9; i < players.length; i++) {
                    if (players[i][statKey] === tenthPlaceValue) {
                        truncatedPlayers.push(players[i]);
                    } else {
                        break;
                    }
                }
            } else {
                truncatedPlayers = [...players];
            }
        }
        return truncatedPlayers;
    };

    const playersToDisplay = showFullList ? players : getTruncatedList();

    return (
        <div className="flex flex-col gap-4">
            <div className="text-xl">{title}</div>
            <div className="p-4 bg-white shadow-lg rounded-lg font-sans">
                {playersToDisplay
                    .filter((player) => player[statKey] > 0)
                    .map((player, index) => {
                        let rankToDisplay: number | string = 0;

                        const firstPlayerWithSameValueIndex = players.findIndex((p) => p[statKey] === player[statKey]);
                        rankToDisplay = firstPlayerWithSameValueIndex + 1;

                        const team = teams?.find((t) => t.name === player.teamName);
                        const teamColorClasses = team ? teamColorMap[team.color.toLowerCase()] || "" : "";

                        const isTopSpot = rankToDisplay === 1;

                        return (
                            <div key={player.playerId}>
                                {isTopSpot ? (
                                    <div className={cn(teamColorClasses, "p-4 rounded-lg mb-4 flex items-center text-white")}>
                                        <div className="flex-1">
                                            <div className="text-3xl font-bold">{player.playerName}</div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 bg-gray-300" />
                                                <div className="opacity-75">{player.teamName}</div>
                                            </div>
                                            <div className="text-5xl font-bold mt-2">{player[statKey]}</div>
                                        </div>
                                    </div>
                                ) : (
                                    <PlayerRow
                                        rank={rankToDisplay}
                                        name={player.playerName}
                                        team={player.teamName}
                                        value={player[statKey]}
                                        isTop={false}
                                    />
                                )}
                            </div>
                        );
                    })}

                {players.length > getTruncatedList().length && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => setShowFullList(!showFullList)}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                            {showFullList ? (
                                <>
                                    Show Less
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                    </svg>
                                </>
                            ) : (
                                <>
                                    Show More
                                    <svg
                                        className="ml-2 w-4 h-4 rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
