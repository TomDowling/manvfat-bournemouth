export interface Team {
    id: string;
    name: string;
    color: string;
}

export interface Player {
    id: string;
    name: string;
    teamId: string;
    isKeeper?: boolean;
    isCaptain?: boolean;
    isViceCaptain?: boolean;
}

export interface Goal {
    id: string;
    player: string;
    team: string;
}

export interface Fixture {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: string;
    gameweek: number;
    season: number;
}

export interface GameEvent {
    id: string;
    gameId: string;
    eventType: "goal" | "assist" | "cleanSheet";
    playerId?: string;
}

export const teams: Team[] = [
    { id: "t1", name: "Yellow Chubmarines", color: "yellow" },
    { id: "t5", name: "FC Purpleona", color: "purple" },
    { id: "t2", name: "Black Forest Fatsos", color: "black" },
    { id: "t3", name: "Ivory Toast", color: "orange" },
    { id: "t4", name: "The Incredible Bulk", color: "green" },
    { id: "t6", name: "Paris Sandwichman", color: "white" },
    { id: "t7", name: "Scoffenheim FC", color: "blue" },
    { id: "t8", name: "Kebaberdeen", color: "red" }
];

export const players: Player[] = [
    { id: "p1", name: "Tom Dowling", teamId: "t1" },
    { id: "p2", name: "Kevin Crago", teamId: "t1" },
    { id: "p3", name: "Paul Harding", teamId: "t6" },
    { id: "p4", name: "Oliver Shearing", teamId: "t7" },
    { id: "p5", name: "Robert Hodge", teamId: "t6" },
    { id: "p6", name: "Liam Dancer", teamId: "t8" },
    { id: "p7", name: "Luke Humphreys", teamId: "t3" },
    { id: "p8", name: "Kevin Hughes", teamId: "t5" },
    { id: "p9", name: "Ben Neilson", teamId: "t5" },
    { id: "p10", name: "Mike Morris", teamId: "t2" },
    { id: "p11", name: "Matt Waterman", teamId: "t2" },
    { id: "p12", name: "Jim Lovell", teamId: "t4" },
    { id: "p13", name: "Oscar Sellick-Pilley", teamId: "t5" },
    { id: "p14", name: "Alex Jones", teamId: "t3" },
    { id: "p15", name: "David Dearnley", teamId: "t5" },
    { id: "p16", name: "Jesus Ponce", teamId: "t4" },
    { id: "p17", name: "Neil Puttick", teamId: "t8" },
    { id: "p18", name: "Martin Boon", teamId: "t6" },
    { id: "p19", name: "Chris Malone", teamId: "t3" },
    { id: "p20", name: "Ben Goodridge", teamId: "t1" },
    { id: "p21", name: "Lloyd Croxford", teamId: "t3" },
    { id: "p22", name: "Joshua Buxton", teamId: "t4" },
    { id: "p23", name: "Sid Woolford", teamId: "t1" },
    { id: "p24", name: "George Howe", teamId: "t5" },
    { id: "p25", name: "Sam Denton", teamId: "t1" },
    { id: "p26", name: "Lewis Vasellina-Turner", teamId: "t5" },
    { id: "p27", name: "Eddie White", teamId: "t2" },
    { id: "p28", name: "Josh Davis", teamId: "t2" },
    { id: "p29", name: "Paul Gibson", teamId: "t5" },
    { id: "p30", name: "Paul Sahota", teamId: "t2" },
    { id: "p31", name: "Jimi Murphy", teamId: "t8" },
    { id: "p32", name: "Rav Nath", teamId: "t2" },
    { id: "p33", name: "Jason Court", teamId: "t4" },
    { id: "p34", name: "Dean Iles", teamId: "t4" },
    { id: "p35", name: "Luke Cage", teamId: "t6" },
    { id: "p36", name: "Jordan Mohomed", teamId: "t5" },
    { id: "p37", name: "Brett Barrass", teamId: "t8" },
    { id: "p38", name: "Tim Greenwood", teamId: "t3" },
    { id: "p39", name: "Rich Webb", teamId: "t6" },
    { id: "p40", name: "Greg Coope", teamId: "t1" },
    { id: "p41", name: "Jordan Hough", teamId: "t8" },
    { id: "p42", name: "Russ Palmer", teamId: "t1" },
    { id: "p43", name: "Michael Burt", teamId: "t3" },
    { id: "p44", name: "Harry Davis", teamId: "t8" },
    { id: "p45", name: "Liam Churchward", teamId: "t2" },
    { id: "p46", name: "Gareth Hensby", teamId: "t7" },
    { id: "p47", name: "Tom Davey", teamId: "t1" },
    { id: "p48", name: "Charles Rees", teamId: "t6" },
    { id: "p49", name: "Sonny Ko", teamId: "t3" },
    { id: "p50", name: "steve carlton", teamId: "t7" },
    { id: "p51", name: "Scott Hardy", teamId: "t4" },
    { id: "p52", name: "Ron Ingram", teamId: "t2" },
    { id: "p53", name: "Philip Haley", teamId: "t3" },
    { id: "p54", name: "Connor Skerman", teamId: "t8" },
    { id: "p55", name: "Karl Pidgley", teamId: "t6" },
    { id: "p56", name: "Chris Spencer", teamId: "t7" },
    { id: "p57", name: "Liam Goodall", teamId: "t8" },
    { id: "p58", name: "Tomas Marks", teamId: "t4" },
    { id: "p59", name: "Matt Clist", teamId: "t7" },
    { id: "p60", name: "James Scott", teamId: "t4" },
    { id: "p61", name: "Robert Bridges", teamId: "t1" },
    { id: "p62", name: "Oli Wentworth", teamId: "t1" },
    { id: "p63", name: "Michael Pearson", teamId: "t7" },
    { id: "p64", name: "Dimi Eleftheriou", teamId: "t7" },
    { id: "p65", name: "Craig Drury", teamId: "t7" },
    { id: "p66", name: "Jack Dunne", teamId: "t4" },
    { id: "p67", name: "Paul Moore", teamId: "t7" },
    { id: "p68", name: "Hugh Wrench", teamId: "t5" },
    { id: "p69", name: "Steven Nodwell", teamId: "t7" }
];

export const fixtures: Fixture[] = [
    {
        id: "f1",
        homeTeam: "t1",
        awayTeam: "t6",
        date: "2025-04-25T20:30:00",
        season: 13,
        gameweek: 1
    },
    {
        id: "f2",
        homeTeam: "t1",
        awayTeam: "t6",
        date: "2025-07-01T20:30:00",
        season: 13,
        gameweek: 2
    }
];

export const gameEvents: GameEvent[] = [
    {
        id: "e1",
        gameId: "f1",
        eventType: "goal",
        playerId: "p7"
    },
    {
        id: "e2",
        gameId: "f1",
        eventType: "goal",
        playerId: "p17"
    },
    {
        id: "e3",
        gameId: "f1",
        eventType: "goal",
        playerId: "p9"
    },
    {
        id: "e4",
        gameId: "f1",
        eventType: "assist",
        playerId: "p7"
    }
];

export function getPlayerById(id: string): Player | undefined {
    return players.find((p) => p.id === id);
}

export function getTeamById(id: string): Team | undefined {
    return teams.find((t) => t.id === id);
}

export function getPlayerTotalGoals(playerId: string): number {
    return gameEvents.filter((event) => event.eventType === "goal" && event.playerId === playerId).length;
}

export function getTeamTotalGoals(teamId: string): number {
    return gameEvents.filter((event) => event.eventType === "goal" && event.teamId === teamId).length;
}

export function getGameGoals(gameId: string): GameEvent[] {
    return gameEvents.filter((event) => event.eventType === "goal" && event.gameId === gameId);
}

export function getPlayerTotalAssists(playerId: string): number {
    return gameEvents.filter((event) => event.eventType === "assist" && event.playerId === playerId).length;
}
