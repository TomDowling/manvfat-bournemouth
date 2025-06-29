import { ITeam } from "@/lib/data";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export interface UseTeamsResult {
    team?: ITeam;
    teams?: ITeam[];
    loading: boolean;
    error: Error | null;
}

export const useTeams = (id?: string): UseTeamsResult => {
    const [team, setTeam] = useState<ITeam | undefined>(undefined);
    const [teams, setTeams] = useState<ITeam[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (id) {
                    const { data, error: supabaseError } = await supabase.from("teams").select("*").eq("id", id).single();

                    if (supabaseError) {
                        throw supabaseError;
                    }

                    if (!data) {
                        setError(new Error("No team found with the given ID."));
                        setTeam(undefined);
                    } else {
                        setTeam(data as ITeam);
                    }
                    setTeams(undefined);
                } else {
                    const { data, error: supabaseError } = await supabase.from("teams").select("*");

                    if (supabaseError) {
                        throw supabaseError;
                    }

                    setTeams(data as ITeam[]);
                    setTeam(undefined);
                }
            } catch (err: any) {
                console.error("Error fetching teams:", err);
                setError(err);
                setTeam(undefined);
                setTeams(undefined);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { team, teams: teams, loading, error };
};
