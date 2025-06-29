import { IPlayer } from "@/lib/data";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export interface UsePlayersResult {
    player?: IPlayer;
    players?: IPlayer[];
    loading: boolean;
    error: Error | null;
}

export const usePlayers = (id?: string): UsePlayersResult => {
    const [player, setPlayer] = useState<IPlayer | undefined>(undefined);
    const [players, setPlayers] = useState<IPlayer[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (id) {
                    const { data, error: supabaseError } = await supabase.from("players").select("*").eq("id", id).single();

                    if (supabaseError) {
                        throw supabaseError;
                    }

                    if (!data) {
                        setError(new Error("No player found with the given ID."));
                        setPlayer(undefined);
                    } else {
                        setPlayer(data as IPlayer);
                    }
                    setPlayers(undefined);
                } else {
                    const { data, error: supabaseError } = await supabase.from("players").select("*");

                    if (supabaseError) {
                        throw supabaseError;
                    }

                    setPlayers(data as IPlayer[]);
                    setPlayer(undefined);
                }
            } catch (err: any) {
                console.error("Error fetching players:", err);
                setError(err);
                setPlayer(undefined);
                setPlayers(undefined);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { player, players: players, loading, error };
};
