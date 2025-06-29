import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { IPlayer } from "@/lib/data";

interface UsePlayersResult {
    players: IPlayer[] | undefined;
    loading: boolean;
    error: Error | null;
}

export const usePlayers = (teamId?: string): UsePlayersResult => {
    const [players, setPlayers] = useState<IPlayer[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            if (!teamId) {
                setLoading(false);
                setError(new Error("Team ID is undefined."));
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const { data, error: supabaseError } = await supabase.from("players").select("*").eq("teamId", teamId);

                if (supabaseError) {
                    throw supabaseError;
                }

                setPlayers(data as IPlayer[]);
            } catch (err: any) {
                console.error("Error fetching players:", err);
                setError(err);
                setPlayers(undefined);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, [teamId]);

    return { players, loading, error };
};
