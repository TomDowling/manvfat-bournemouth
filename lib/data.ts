export interface ITeam {
    id: string;
    name: string;
    color: string;
    isActive?: boolean;
}

export interface Goal {
    id: string;
    scorer: string;
    assister?: string;
    minute: number;
    team: "home" | "away";
}

export interface IPlayer {
    id: string;
    name: string;
    teamId: string;
    isKeeper?: boolean;
    isCaptain?: boolean;
    isViceCaptain?: boolean;
    isActive?: boolean;
}

// export interface Goal {
//     id: string;
//     player: string;
//     team: string;
// }

export interface IFixture {
    id: string;
    homeTeamId: string;
    awayTeamId: string;
    date: string;
    gameweek: number;
    season: number;
}

export interface IGameEvent {
    id: string;
    fixtureId: string;
    eventType: "goal" | "assist" | "cleanSheet";
    playerId?: string;
}

export const teams: ITeam[] = [
    { isActive: true, id: "t1", name: "Yellow Chubmarines", color: "yellow" },
    { isActive: true, id: "t5", name: "FC Purpleona", color: "purple" },
    { isActive: true, id: "t2", name: "Black Forest Fatsos", color: "black" },
    { isActive: true, id: "t3", name: "Ivory Toast", color: "orange" },
    { isActive: true, id: "t4", name: "The Incredible Bulk", color: "green" },
    { isActive: true, id: "t6", name: "Paris Sandwichman", color: "white" },
    { isActive: true, id: "t7", name: "Scoffenheim FC", color: "blue" },
    { isActive: true, id: "t8", name: "Kebaberdeen", color: "red" },
    { isActive: false, id: "t0", name: "Unknown Team", color: "grey" }
];

export const dummyPlayers: IPlayer[] = [
    { isActive: true, id: "p1", name: "Luke Cage", teamId: "t6", isCaptain: true },
    { isActive: true, id: "p2", name: "Charlie Rees", teamId: "t6" },
    { isActive: false, id: "p3", name: "Dawid Kiszka", teamId: "t6" },
    { isActive: true, id: "p4", name: "Karl Pidgley", teamId: "t6" },
    { isActive: true, id: "p5", name: "Martin Boon", teamId: "t6" },
    { isActive: false, id: "p6", name: "Micah Quailey", teamId: "t6" },
    { isActive: true, id: "p7", name: "Paul Briggs", teamId: "t6" },
    { isActive: true, id: "p8", name: "Paul Harding", teamId: "t6" },
    { isActive: true, id: "p9", name: "Paul Whittingham", teamId: "t6" },
    { isActive: true, id: "p10", name: "Rich Webb", teamId: "t6" },
    { isActive: true, id: "p11", name: "Rob Hodge", teamId: "t6", isViceCaptain: true },

    { isActive: true, id: "p12", name: "Alex Jones", teamId: "t3", isCaptain: true },
    { isActive: true, id: "p13", name: "Barnaby Riste-Smith", teamId: "t3" },
    { isActive: true, id: "p14", name: "Chris Malone", teamId: "t3" },
    { isActive: true, id: "p15", name: "Jack Hayter", teamId: "t3", isViceCaptain: true },
    { isActive: true, id: "p16", name: "Jordan Hayter", teamId: "t3" },
    { isActive: true, id: "p17", name: "Lloyd Croxford", teamId: "t3" },
    { isActive: true, id: "p18", name: "Luke Humphreys", teamId: "t3" },
    { isActive: true, id: "p19", name: "Michael Burt", teamId: "t3" },
    { isActive: true, id: "p20", name: "Phil Haley", teamId: "t3" },
    { isActive: true, id: "p21", name: "Sonny Ko", teamId: "t3" },
    { isActive: true, id: "p22", name: "Tim Greenwood", teamId: "t3" },

    { isActive: true, id: "p23", name: "Craig Drury", teamId: "t7", isCaptain: true },
    { isActive: true, id: "p24", name: "Chris Pearson", teamId: "t7" },
    { isActive: true, id: "p25", name: "Dimi Eleftheriou", teamId: "t7" },
    { isActive: true, id: "p26", name: "Gareth Hensby", teamId: "t7", isViceCaptain: true },
    { isActive: true, id: "p27", name: "Matt Clist", teamId: "t7" },
    { isActive: true, id: "p28", name: "Michael Pearson", teamId: "t7" },
    { isActive: true, id: "p29", name: "Oliver Shearing", teamId: "t7" },
    { isActive: true, id: "p30", name: "Ruben Fernandes", teamId: "t7" },
    { isActive: true, id: "p31", name: "Steven Nodwell", teamId: "t7" },
    { isActive: true, id: "p32", name: "Steve Carlton", teamId: "t7" },
    { isActive: true, id: "p33", name: "Tony Wright", teamId: "t7" },

    { isActive: true, id: "p34", name: "Lewis Vasellina-Turner", teamId: "t5", isCaptain: true },
    { isActive: true, id: "p35", name: "Ben Neilson", teamId: "t5" },
    { isActive: true, id: "p36", name: "Danny Pidgley", teamId: "t5" },
    { isActive: true, id: "p37", name: "Dave Dearnley", teamId: "t5" },
    { isActive: true, id: "p38", name: "George Howe", teamId: "t5" },
    { isActive: true, id: "p39", name: "Ian Downer", teamId: "t5" },
    { isActive: true, id: "p40", name: "Jordan Mohomed", teamId: "t5" },
    { isActive: true, id: "p41", name: "Kevin Hughes", teamId: "t5" },
    { isActive: true, id: "p42", name: "Marc Simpson", teamId: "t5" },
    { isActive: true, id: "p43", name: "Oscar Sellick-Pilley", teamId: "t5", isViceCaptain: true },
    { isActive: true, id: "p44", name: "Paul Gibson", teamId: "t5" },

    { isActive: true, id: "p45", name: "Connor Skerman", teamId: "t8", isCaptain: true },
    { isActive: true, id: "p46", name: "Ash Sinclair", teamId: "t8" },
    { isActive: true, id: "p47", name: "Harry Davis", teamId: "t8" },
    { isActive: true, id: "p48", name: "Jimi Murphy", teamId: "t8", isViceCaptain: true },
    { isActive: true, id: "p49", name: "Jordy Hough", teamId: "t8" },
    { isActive: true, id: "p50", name: "Liam Dancer", teamId: "t8" },
    { isActive: true, id: "p51", name: "Liam Goodall", teamId: "t8" },
    { isActive: true, id: "p52", name: "Neil Puttick", teamId: "t8" },
    { isActive: true, id: "p53", name: "Ryan Puttick", teamId: "t8" },
    { isActive: true, id: "p54", name: "Sean Madden", teamId: "t8" },

    { isActive: true, id: "p55", name: "Tom Dowling", teamId: "t1", isCaptain: true },
    { isActive: true, id: "p56", name: "Adam White", teamId: "t1" },
    { isActive: true, id: "p57", name: "Ben Goodridge", teamId: "t1" },
    { isActive: true, id: "p58", name: "Greg Coope", teamId: "t1" },
    { isActive: true, id: "p59", name: "Kevin Crago", teamId: "t1" },
    { isActive: true, id: "p60", name: "Oli Wentworth", teamId: "t1", isViceCaptain: true },
    { isActive: true, id: "p61", name: "Rob Bridges", teamId: "t1" },
    { isActive: true, id: "p62", name: "Russ Palmer", teamId: "t1" },
    { isActive: true, id: "p63", name: "Sam Denton", teamId: "t1" },
    { isActive: true, id: "p64", name: "Sid Woolford", teamId: "t1" },
    { isActive: true, id: "p65", name: "Tom Davey", teamId: "t1" },

    { isActive: true, id: "p66", name: "Matt Waterman", teamId: "t2", isCaptain: true },
    { isActive: true, id: "p67", name: "Ant Skerman", teamId: "t2" },
    { isActive: true, id: "p68", name: "Eddie White", teamId: "t2" },
    { isActive: true, id: "p69", name: "Josh Davis", teamId: "t2" },
    { isActive: true, id: "p70", name: "Liam Churchward", teamId: "t2" },
    { isActive: true, id: "p71", name: "Matt Young", teamId: "t2" },
    { isActive: true, id: "p72", name: "Mike Morris", teamId: "t2" },
    { isActive: true, id: "p73", name: "Paul Sahota", teamId: "t2", isViceCaptain: true },
    { isActive: true, id: "p74", name: "Ray Nath", teamId: "t2" },
    { isActive: true, id: "p75", name: "Ron Ingram", teamId: "t2" },
    { isActive: true, id: "p76", name: "Ryan Broadbank", teamId: "t2" },

    { isActive: true, id: "p77", name: "Josh Buxton", teamId: "t4", isCaptain: true },
    { isActive: true, id: "p78", name: "Dan Lloyd", teamId: "t4" },
    { isActive: true, id: "p79", name: "George Gyimah", teamId: "t4" },
    { isActive: true, id: "p80", name: "James Bieda", teamId: "t4" },
    { isActive: true, id: "p81", name: "James Scott", teamId: "t4" },
    { isActive: true, id: "p82", name: "Jason Court", teamId: "t4" },
    { isActive: true, id: "p83", name: "Jesus Ponce", teamId: "t4" },
    { isActive: true, id: "p84", name: "Jim Lovell", teamId: "t4" },
    { isActive: true, id: "p85", name: "Sam Bailey", teamId: "t4" },
    { isActive: true, id: "p86", name: "Scott Hardy", teamId: "t4", isViceCaptain: true },
    { isActive: true, id: "p87", name: "Tom Marks", teamId: "t4" },

    // New Players
    { isActive: true, id: "p88", name: "Brett TBC", teamId: "t8" },
    { isActive: true, id: "p89", name: "Dean TBC", teamId: "t4" },
    { isActive: true, id: "p99", name: "Unknown Player", teamId: "t0" }
];

export const fixtures: IFixture[] = [
    { id: "f1", homeTeamId: "t3", awayTeamId: "t5", date: "2025-04-25T21:00:00", gameweek: 1, season: 13 },
    { id: "f2", homeTeamId: "t4", awayTeamId: "t8", date: "2025-04-25T21:00:00", gameweek: 1, season: 13 },
    { id: "f3", homeTeamId: "t2", awayTeamId: "t7", date: "2025-04-25T21:00:00", gameweek: 1, season: 13 },
    { id: "f4", homeTeamId: "t1", awayTeamId: "t6", date: "2025-04-25T21:00:00", gameweek: 1, season: 13 },
    { id: "f5", homeTeamId: "t8", awayTeamId: "t3", date: "2025-05-02T21:00:00", gameweek: 2, season: 13 },
    { id: "f6", homeTeamId: "t6", awayTeamId: "t5", date: "2025-05-02T21:00:00", gameweek: 2, season: 13 },
    { id: "f7", homeTeamId: "t7", awayTeamId: "t4", date: "2025-05-02T21:00:00", gameweek: 2, season: 13 },
    { id: "f8", homeTeamId: "t1", awayTeamId: "t2", date: "2025-05-02T21:00:00", gameweek: 2, season: 13 },
    { id: "f9", homeTeamId: "t2", awayTeamId: "t6", date: "2025-05-09T21:00:00", gameweek: 3, season: 13 },
    { id: "f10", homeTeamId: "t4", awayTeamId: "t1", date: "2025-05-09T21:00:00", gameweek: 3, season: 13 },
    { id: "f11", homeTeamId: "t3", awayTeamId: "t7", date: "2025-05-09T21:00:00", gameweek: 3, season: 13 },
    { id: "f12", homeTeamId: "t5", awayTeamId: "t8", date: "2025-05-09T21:00:00", gameweek: 3, season: 13 },
    { id: "f13", homeTeamId: "t7", awayTeamId: "t5", date: "2025-05-16T21:00:00", gameweek: 4, season: 13 },
    { id: "f14", homeTeamId: "t6", awayTeamId: "t8", date: "2025-05-16T21:00:00", gameweek: 4, season: 13 },
    { id: "f15", homeTeamId: "t1", awayTeamId: "t3", date: "2025-05-16T21:00:00", gameweek: 4, season: 13 },
    { id: "f16", homeTeamId: "t2", awayTeamId: "t4", date: "2025-05-16T21:00:00", gameweek: 4, season: 13 },
    { id: "f17", homeTeamId: "t4", awayTeamId: "t6", date: "2025-05-23T21:00:00", gameweek: 5, season: 13 },
    { id: "f18", homeTeamId: "t3", awayTeamId: "t2", date: "2025-05-23T21:00:00", gameweek: 5, season: 13 },
    { id: "f19", homeTeamId: "t5", awayTeamId: "t1", date: "2025-05-23T21:00:00", gameweek: 5, season: 13 },
    { id: "f20", homeTeamId: "t8", awayTeamId: "t7", date: "2025-05-23T21:00:00", gameweek: 5, season: 13 },
    { id: "f21", homeTeamId: "t1", awayTeamId: "t8", date: "2025-05-30T21:00:00", gameweek: 6, season: 13 },
    { id: "f22", homeTeamId: "t6", awayTeamId: "t7", date: "2025-05-30T21:00:00", gameweek: 6, season: 13 },
    { id: "f23", homeTeamId: "t2", awayTeamId: "t5", date: "2025-05-30T21:00:00", gameweek: 6, season: 13 },
    { id: "f24", homeTeamId: "t4", awayTeamId: "t3", date: "2025-05-30T21:00:00", gameweek: 6, season: 13 },
    { id: "f25", homeTeamId: "t3", awayTeamId: "t6", date: "2025-06-06T21:00:00", gameweek: 7, season: 13 },
    { id: "f26", homeTeamId: "t5", awayTeamId: "t4", date: "2025-06-06T21:00:00", gameweek: 7, season: 13 },
    { id: "f27", homeTeamId: "t8", awayTeamId: "t2", date: "2025-06-06T21:00:00", gameweek: 7, season: 13 },
    { id: "f28", homeTeamId: "t7", awayTeamId: "t1", date: "2025-06-06T21:00:00", gameweek: 7, season: 13 },
    { id: "f29", homeTeamId: "t6", awayTeamId: "t1", date: "2025-06-13T21:00:00", gameweek: 8, season: 13 },
    { id: "f30", homeTeamId: "t7", awayTeamId: "t2", date: "2025-06-13T21:00:00", gameweek: 8, season: 13 },
    { id: "f31", homeTeamId: "t8", awayTeamId: "t4", date: "2025-06-13T21:00:00", gameweek: 8, season: 13 },
    { id: "f32", homeTeamId: "t5", awayTeamId: "t3", date: "2025-06-13T21:00:00", gameweek: 8, season: 13 },
    { id: "f33", homeTeamId: "t3", awayTeamId: "t8", date: "2025-06-20T21:00:00", gameweek: 9, season: 13 },
    { id: "f34", homeTeamId: "t5", awayTeamId: "t6", date: "2025-06-20T21:00:00", gameweek: 9, season: 13 },
    { id: "f35", homeTeamId: "t4", awayTeamId: "t7", date: "2025-06-20T21:00:00", gameweek: 9, season: 13 },
    { id: "f36", homeTeamId: "t2", awayTeamId: "t1", date: "2025-06-20T21:00:00", gameweek: 9, season: 13 },
    { id: "f37", homeTeamId: "t6", awayTeamId: "t2", date: "2025-06-27T21:00:00", gameweek: 10, season: 13 },
    { id: "f38", homeTeamId: "t1", awayTeamId: "t4", date: "2025-06-27T21:00:00", gameweek: 10, season: 13 },
    { id: "f39", homeTeamId: "t7", awayTeamId: "t3", date: "2025-06-27T21:00:00", gameweek: 10, season: 13 },
    { id: "f40", homeTeamId: "t8", awayTeamId: "t5", date: "2025-06-27T21:00:00", gameweek: 10, season: 13 },
    { id: "f41", homeTeamId: "t5", awayTeamId: "t7", date: "2025-07-04T21:00:00", gameweek: 11, season: 13 },
    { id: "f42", homeTeamId: "t8", awayTeamId: "t6", date: "2025-07-04T21:00:00", gameweek: 11, season: 13 },
    { id: "f43", homeTeamId: "t3", awayTeamId: "t1", date: "2025-07-04T21:00:00", gameweek: 11, season: 13 },
    { id: "f44", homeTeamId: "t4", awayTeamId: "t2", date: "2025-07-04T21:00:00", gameweek: 11, season: 13 },
    { id: "f45", homeTeamId: "t6", awayTeamId: "t4", date: "2025-07-11T21:00:00", gameweek: 12, season: 13 },
    { id: "f46", homeTeamId: "t2", awayTeamId: "t3", date: "2025-07-11T21:00:00", gameweek: 12, season: 13 },
    { id: "f47", homeTeamId: "t1", awayTeamId: "t5", date: "2025-07-11T21:00:00", gameweek: 12, season: 13 },
    { id: "f48", homeTeamId: "t7", awayTeamId: "t8", date: "2025-07-11T21:00:00", gameweek: 12, season: 13 },
    { id: "f49", homeTeamId: "t8", awayTeamId: "t1", date: "2025-07-18T21:00:00", gameweek: 13, season: 13 },
    { id: "f50", homeTeamId: "t7", awayTeamId: "t6", date: "2025-07-18T21:00:00", gameweek: 13, season: 13 },
    { id: "f51", homeTeamId: "t5", awayTeamId: "t2", date: "2025-07-18T21:00:00", gameweek: 13, season: 13 },
    { id: "f52", homeTeamId: "t3", awayTeamId: "t4", date: "2025-07-18T21:00:00", gameweek: 13, season: 13 },
    { id: "f53", homeTeamId: "t6", awayTeamId: "t3", date: "2025-07-25T21:00:00", gameweek: 14, season: 13 },
    { id: "f54", homeTeamId: "t4", awayTeamId: "t5", date: "2025-07-25T21:00:00", gameweek: 14, season: 13 },
    { id: "f55", homeTeamId: "t2", awayTeamId: "t8", date: "2025-07-25T21:00:00", gameweek: 14, season: 13 },
    { id: "f56", homeTeamId: "t1", awayTeamId: "t7", date: "2025-07-25T21:00:00", gameweek: 14, season: 13 }
];

export const gameEvents: IGameEvent[] = [];

export const fixtureGoals = (fixture: IFixture) => {
    const events = gameEvents.filter((event) => event.fixtureId === fixture.id);

    let homeGoals = 0,
        awayGoals = 0;
    let homeAssists = 0,
        awayAssists = 0;

    events.forEach((event) => {
        if (!event.playerId) return;
        const player = dummyPlayers.find((p) => p.id === event.playerId);
        if (!player) return;

        const isHomePlayer = player.teamId === fixture.homeTeamId;
        const isAwayPlayer = player.teamId === fixture.awayTeamId;

        if (event.eventType === "goal") {
            if (isHomePlayer) {
                homeGoals++;
            } else if (isAwayPlayer) {
                awayGoals++;
            }
        }
        if (event.eventType === "assist") {
            if (isHomePlayer) {
                homeAssists++;
            } else if (isAwayPlayer) {
                awayAssists++;
            }
        }
    });

    return {
        home: { goals: homeGoals, assists: homeAssists },
        away: { goals: awayGoals, assists: awayAssists }
    };
};

const playerGoals = (playerId: string) => {
    const events = gameEvents.filter((event) => event.playerId === playerId && event.eventType === "goal");
    return events.length;
};

const playerAssists = (playerId: string) => {
    const events = gameEvents.filter((event) => event.playerId === playerId && event.eventType === "assist");
    return events.length;
};

const playerCleanSheets = (playerId: string) => {
    const events = gameEvents.filter((event) => event.playerId === playerId && event.eventType === "cleanSheet");
    return events.length;
};

export const playerStats = (playerId: string) => {
    const player = dummyPlayers.find((p) => p.id === playerId);
    if (!player) return null;

    const goals = playerGoals(playerId);
    const assists = playerAssists(playerId);
    const cleanSheets = playerCleanSheets(playerId);

    return {
        goals,
        assists,
        cleanSheets
    };
};

export interface PlayerStats {
    playerId: string;
    playerName: string;
    teamName: string;
    goals: number;
    assists: number;
    cleanSheets: number;
}

/**
 * Calculates and returns player statistics (goals, assists, clean sheets)
 * sorted by the specified event type.
 *
 * @param sortByEventType The event type to sort by. Defaults to 'goal'.
 * Possible values: 'goal', 'assist', 'cleanSheet'.
 * @returns An array of PlayerStats objects, sorted as requested.
 */
export const getPlayerStats = (sortByEventType: "goal" | "assist" | "cleanSheet" = "goal"): PlayerStats[] => {
    const playerStatsMap: { [playerId: string]: { goals: number; assists: number; cleanSheets: number } } = {};

    gameEvents.forEach((event) => {
        if (!event.playerId && !(event.eventType === "cleanSheet")) {
            return;
        }

        const targetPlayerId = event.playerId;

        if (targetPlayerId) {
            if (!playerStatsMap[targetPlayerId]) {
                playerStatsMap[targetPlayerId] = { goals: 0, assists: 0, cleanSheets: 0 };
            }

            if (event.eventType === "goal") {
                playerStatsMap[targetPlayerId].goals++;
            } else if (event.eventType === "assist") {
                playerStatsMap[targetPlayerId].assists++;
            } else if (event.eventType === "cleanSheet") {
                playerStatsMap[targetPlayerId].cleanSheets++;
            }
        }
    });

    const topPlayers: PlayerStats[] = Object.keys(playerStatsMap).map((playerId) => {
        const player = dummyPlayers.find((p) => p.id === playerId);
        if (!player) {
            console.warn(`Player with ID ${playerId} not found in players array.`);
            return {
                playerId,
                playerName: "Unknown Player",
                teamName: "Unknown Team",
                goals: playerStatsMap[playerId].goals,
                assists: playerStatsMap[playerId].assists,
                cleanSheets: playerStatsMap[playerId].cleanSheets
            };
        }
        const team = teams.find((t) => t.id === player.teamId);

        return {
            playerId: player.id,
            playerName: player.name,
            teamName: team ? team.name : "Unknown Team",
            goals: playerStatsMap[playerId].goals,
            assists: playerStatsMap[playerId].assists,
            cleanSheets: playerStatsMap[playerId].cleanSheets
        };
    });

    topPlayers.sort((a, b) => {
        if (sortByEventType === "goal") {
            if (b.goals !== a.goals) return b.goals - a.goals;
            if (b.assists !== a.assists) return b.assists - a.assists;
            return b.cleanSheets - a.cleanSheets;
        } else if (sortByEventType === "assist") {
            if (b.assists !== a.assists) return b.assists - a.assists;
            if (b.goals !== a.goals) return b.goals - a.goals;
            return b.cleanSheets - a.cleanSheets;
        } else if (sortByEventType === "cleanSheet") {
            if (b.cleanSheets !== a.cleanSheets) return b.cleanSheets - a.cleanSheets;
            if (b.goals !== a.goals) return b.goals - a.goals;
            return b.assists - a.assists;
        }
        return 0;
    });

    return topPlayers;
};

export const topGoalScorers = getPlayerStats();
export const topAssists = getPlayerStats("assist");
export const topCleanSheets = getPlayerStats("cleanSheet");
