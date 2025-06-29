import { IFixture } from "@/lib/data";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export interface UseTeamsResult {
    fixture?: IFixture;
    fixtures?: IFixture[];
    loading: boolean;
    error: Error | null;
}

export const useFixtures = (id?: string): UseTeamsResult => {
    const [fixture, setFixture] = useState<IFixture | undefined>(undefined);
    const [fixtures, setFixtures] = useState<IFixture[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                if (id) {
                    const { data, error: supabaseError } = await supabase.from("fixtures").select("*").eq("id", id).single();

                    if (supabaseError) {
                        throw supabaseError;
                    }

                    console.log("data", data);

                    if (!data) {
                        setError(new Error("No fixture found with the given ID."));
                        setFixture(undefined);
                    } else {
                        setFixture(data as IFixture);
                    }
                    setFixtures(undefined);
                } else {
                    const { data, error: supabaseError } = await supabase.from("fixtures").select("*");

                    if (supabaseError) {
                        throw supabaseError;
                    }

                    setFixtures(data as IFixture[]);
                    setFixture(undefined);
                }
            } catch (err: any) {
                console.error("Error fetching fixtures:", err);
                setError(err);
                setFixture(undefined);
                setFixtures(undefined);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { fixture, fixtures: fixtures, loading, error };
};
