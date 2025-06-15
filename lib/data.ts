export interface Team {
    id: string;
    name: string;
    color: string;
    isActive?: boolean;
}

export interface Player {
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

export interface Fixture {
    id: string;
    homeTeamId: string;
    awayTeamId: string;
    date: string;
    gameweek: number;
    season: number;
}

export interface GameEvent {
    id: string;
    fixtureId: string;
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
    { isActive: true, id: "p87", name: "Tom Marks", teamId: "t4" }
];

// export const fixtures: Fixture[] = [
//     {
//         id: "f1",
//         homeTeam: "t1",
//         awayTeam: "t6",
//         date: "2025-04-25T20:30:00",
//         season: 13,
//         gameweek: 1
//     },
//     {
//         id: "f2",
//         homeTeam: "t1",
//         awayTeam: "t6",
//         date: "2025-07-01T20:30:00",
//         season: 13,
//         gameweek: 2
//     }
// ];

// export const gameEvents: GameEvent[] = [
//     {
//         id: "e1",
//         gameId: "f1",
//         eventType: "goal",
//         isActive: true,
//         playerId: "p7"
//     },
//     {
//         id: "e2",
//         gameId: "f1",
//         eventType: "goal",
//         isActive: true,
//         playerId: "p17"
//     },
//     {
//         id: "e3",
//         gameId: "f1",
//         eventType: "goal",
//         isActive: true,
//         playerId: "p9"
//     },
//     {
//         id: "e4",
//         gameId: "f1",
//         eventType: "assist",
//         isActive: true,
//         playerId: "p7"
//     }
// ];

// export function getPlayerById(id: string): Player | undefined {
//     return players.find((p) => p.id === id);
// }

// export function getTeamById(id: string): Team | undefined {
//     return teams.find((t) => t.id === id);
// }

// export function getPlayerTotalGoals(playerId: string): number {
//     return gameEvents.filter((event) => event.eventType === "goal" && event.playerId === playerId).length;
// }

// export function getTeamTotalGoals(teamId: string): number {
//     return gameEvents.filter((event) => event.eventType === "goal" && event.teamId === teamId).length;
// }

// export function getGameGoals(gameId: string): GameEvent[] {
//     return gameEvents.filter((event) => event.eventType === "goal" && event.gameId === gameId);
// }

// export function getPlayerTotalAssists(playerId: string): number {
//     return gameEvents.filter((event) => event.eventType === "assist" && event.playerId === playerId).length;
// }

export const fixtures: Fixture[] = [
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

export const gameEvents: GameEvent[] = [
    { id: "ge1", fixtureId: "f1", eventType: "goal", playerId: "p16" },
    { id: "ge2", fixtureId: "f1", eventType: "goal", playerId: "p16" },
    { id: "ge3", fixtureId: "f1", eventType: "assist", playerId: "p12" },
    { id: "ge4", fixtureId: "f1", eventType: "assist", playerId: "p18" },
    { id: "ge5", fixtureId: "f1", eventType: "goal", playerId: "p34" },
    { id: "ge6", fixtureId: "f1", eventType: "goal", playerId: "p34" },
    { id: "ge7", fixtureId: "f1", eventType: "assist", playerId: "p37" },
    { id: "ge8", fixtureId: "f1", eventType: "assist", playerId: "p35" },
    { id: "ge9", fixtureId: "f2", eventType: "goal", playerId: "p84" },
    { id: "ge10", fixtureId: "f2", eventType: "goal", playerId: "p86" },
    { id: "ge11", fixtureId: "f2", eventType: "goal", playerId: "p86" },
    { id: "ge12", fixtureId: "f2", eventType: "goal", playerId: "p85" },
    { id: "ge13", fixtureId: "f2", eventType: "goal", playerId: "p79" },
    { id: "ge14", fixtureId: "f2", eventType: "assist", playerId: "p86" },
    { id: "ge15", fixtureId: "f2", eventType: "assist", playerId: "p86" },
    { id: "ge16", fixtureId: "f2", eventType: "assist", playerId: "p81" },
    { id: "ge17", fixtureId: "f2", eventType: "assist", playerId: "p77" },
    { id: "ge18", fixtureId: "f2", eventType: "goal", playerId: "p51" },
    { id: "ge19", fixtureId: "f3", eventType: "goal", playerId: "p69" },
    { id: "ge20", fixtureId: "f3", eventType: "assist", playerId: "p71" },
    { id: "ge21", fixtureId: "f3", eventType: "goal", playerId: "p30" },
    { id: "ge22", fixtureId: "f3", eventType: "goal", playerId: "p28" },
    { id: "ge23", fixtureId: "f3", eventType: "assist", playerId: "p30" },
    { id: "ge24", fixtureId: "f3", eventType: "assist", playerId: "p26" },
    { id: "ge25", fixtureId: "f4", eventType: "goal", playerId: "p59" },
    { id: "ge26", fixtureId: "f4", eventType: "goal", playerId: "p62" },
    { id: "ge27", fixtureId: "f4", eventType: "goal", playerId: "p64" },
    { id: "ge28", fixtureId: "f4", eventType: "assist", playerId: "p57" },
    { id: "ge29", fixtureId: "f4", eventType: "assist", playerId: "p58" },
    { id: "ge30", fixtureId: "f4", eventType: "goal", playerId: "p11" },
    { id: "ge31", fixtureId: "f4", eventType: "goal", playerId: "p11" },
    { id: "ge32", fixtureId: "f5", eventType: "goal", playerId: "p17" },
    { id: "ge33", fixtureId: "f5", eventType: "goal", playerId: "p18" },
    { id: "ge34", fixtureId: "f5", eventType: "goal", playerId: "p12" },
    { id: "ge35", fixtureId: "f5", eventType: "assist", playerId: "p20" },
    { id: "ge36", fixtureId: "f5", eventType: "assist", playerId: "p20" },
    { id: "ge37", fixtureId: "f6", eventType: "goal", playerId: "p34" },
    { id: "ge38", fixtureId: "f6", eventType: "goal", playerId: "p34" },
    { id: "ge39", fixtureId: "f6", eventType: "goal", playerId: "p34" },
    { id: "ge40", fixtureId: "f6", eventType: "goal", playerId: "p38" },
    { id: "ge41", fixtureId: "f6", eventType: "assist", playerId: "p35" },
    { id: "ge42", fixtureId: "f6", eventType: "assist", playerId: "p35" },
    { id: "ge43", fixtureId: "f6", eventType: "assist", playerId: "p35" },
    { id: "ge44", fixtureId: "f6", eventType: "assist", playerId: "p36" },
    { id: "ge45", fixtureId: "f6", eventType: "cleanSheet", playerId: "p43" },
    { id: "ge46", fixtureId: "f7", eventType: "goal", playerId: "p30" },
    { id: "ge47", fixtureId: "f7", eventType: "assist", playerId: "p23" },
    { id: "ge48", fixtureId: "f7", eventType: "goal", playerId: "p84" },
    { id: "ge49", fixtureId: "f8", eventType: "goal", playerId: "p76" },
    { id: "ge50", fixtureId: "f8", eventType: "goal", playerId: "p69" },
    { id: "ge51", fixtureId: "f8", eventType: "goal", playerId: "p71" },
    { id: "ge52", fixtureId: "f8", eventType: "assist", playerId: "p76" },
    { id: "ge53", fixtureId: "f8", eventType: "assist", playerId: "p69" },
    { id: "ge54", fixtureId: "f8", eventType: "assist", playerId: "p71" },
    { id: "ge55", fixtureId: "f8", eventType: "cleanSheet", playerId: "p67" },
    { id: "ge56", fixtureId: "f9", eventType: "goal", playerId: "p69" },
    { id: "ge57", fixtureId: "f9", eventType: "goal", playerId: "p71" },
    { id: "ge58", fixtureId: "f9", eventType: "goal", playerId: "p71" },
    { id: "ge59", fixtureId: "f9", eventType: "assist", playerId: "p69" },
    { id: "ge60", fixtureId: "f9", eventType: "assist", playerId: "p76" },
    { id: "ge61", fixtureId: "f9", eventType: "assist", playerId: "p76" },
    { id: "ge62", fixtureId: "f9", eventType: "cleanSheet", playerId: "p74" },
    { id: "ge63", fixtureId: "f10", eventType: "goal", playerId: "p84" },
    { id: "ge64", fixtureId: "f10", eventType: "goal", playerId: "p84" },
    { id: "ge65", fixtureId: "f10", eventType: "goal", playerId: "p84" },
    { id: "ge66", fixtureId: "f10", eventType: "goal", playerId: "p86" },
    { id: "ge67", fixtureId: "f10", eventType: "assist", playerId: "p83" },
    { id: "ge68", fixtureId: "f10", eventType: "assist", playerId: "p86" },
    { id: "ge69", fixtureId: "f10", eventType: "assist", playerId: "p86" },
    { id: "ge70", fixtureId: "f10", eventType: "assist", playerId: "p78" },
    { id: "ge71", fixtureId: "f10", eventType: "goal", playerId: "p59" },
    { id: "ge72", fixtureId: "f10", eventType: "goal", playerId: "p59" },
    { id: "ge73", fixtureId: "f10", eventType: "assist", playerId: "p55" },
    { id: "ge74", fixtureId: "f11", eventType: "goal", playerId: "p12" },
    { id: "ge75", fixtureId: "f11", eventType: "goal", playerId: "p12" },
    { id: "ge76", fixtureId: "f11", eventType: "goal", playerId: "p18" },
    { id: "ge77", fixtureId: "f11", eventType: "assist", playerId: "p18" },
    { id: "ge78", fixtureId: "f11", eventType: "assist", playerId: "p17" },
    { id: "ge79", fixtureId: "f11", eventType: "assist", playerId: "p16" },
    { id: "ge80", fixtureId: "f11", eventType: "goal", playerId: "p30" },
    { id: "ge81", fixtureId: "f12", eventType: "goal", playerId: "p34" },
    { id: "ge82", fixtureId: "f12", eventType: "goal", playerId: "p34" },
    { id: "ge83", fixtureId: "f12", eventType: "goal", playerId: "p34" },
    { id: "ge84", fixtureId: "f12", eventType: "goal", playerId: "p35" },
    { id: "ge85", fixtureId: "f12", eventType: "assist", playerId: "p36" },
    { id: "ge86", fixtureId: "f12", eventType: "assist", playerId: "p35" },
    { id: "ge87", fixtureId: "f12", eventType: "assist", playerId: "p44" },
    { id: "ge88", fixtureId: "f12", eventType: "assist", playerId: "p43" },
    { id: "ge89", fixtureId: "f13", eventType: "goal", playerId: "p30" },
    { id: "ge90", fixtureId: "f14", eventType: "goal", playerId: "p51" },
    { id: "ge91", fixtureId: "f15", eventType: "goal", playerId: "p19" },
    { id: "ge92", fixtureId: "f15", eventType: "goal", playerId: "p12" },
    { id: "ge93", fixtureId: "f15", eventType: "goal", playerId: "p18" },
    { id: "ge94", fixtureId: "f15", eventType: "assist", playerId: "p22" },
    { id: "ge95", fixtureId: "f15", eventType: "assist", playerId: "p12" },
    { id: "ge96", fixtureId: "f15", eventType: "assist", playerId: "p20" },
    { id: "ge97", fixtureId: "f15", eventType: "cleanSheet", playerId: "p20" },
    { id: "ge98", fixtureId: "f17", eventType: "goal", playerId: "p84" },
    { id: "ge99", fixtureId: "f17", eventType: "goal", playerId: "p84" },
    { id: "ge100", fixtureId: "f17", eventType: "goal", playerId: "p78" },
    { id: "ge101", fixtureId: "f17", eventType: "goal", playerId: "p78" },
    { id: "ge102", fixtureId: "f17", eventType: "goal", playerId: "p81" },
    { id: "ge103", fixtureId: "f17", eventType: "assist", playerId: "p77" },
    { id: "ge104", fixtureId: "f17", eventType: "assist", playerId: "p84" },
    { id: "ge105", fixtureId: "f17", eventType: "assist", playerId: "p79" },
    { id: "ge106", fixtureId: "f18", eventType: "goal", playerId: "p12" },
    { id: "ge107", fixtureId: "f18", eventType: "assist", playerId: "p17" },
    { id: "ge108", fixtureId: "f18", eventType: "goal", playerId: "p69" },
    { id: "ge109", fixtureId: "f19", eventType: "goal", playerId: "p34" },
    { id: "ge110", fixtureId: "f19", eventType: "goal", playerId: "p34" },
    { id: "ge111", fixtureId: "f19", eventType: "goal", playerId: "p34" },
    { id: "ge112", fixtureId: "f19", eventType: "goal", playerId: "p38" },
    { id: "ge113", fixtureId: "f19", eventType: "goal", playerId: "p38" },
    { id: "ge114", fixtureId: "f19", eventType: "assist", playerId: "p36" },
    { id: "ge115", fixtureId: "f19", eventType: "assist", playerId: "p36" },
    { id: "ge116", fixtureId: "f19", eventType: "assist", playerId: "p42" },
    { id: "ge117", fixtureId: "f19", eventType: "assist", playerId: "p42" },
    { id: "ge118", fixtureId: "f19", eventType: "assist", playerId: "p42" },
    { id: "ge119", fixtureId: "f19", eventType: "goal", playerId: "p59" },
    { id: "ge120", fixtureId: "f19", eventType: "goal", playerId: "p59" },
    { id: "ge121", fixtureId: "f19", eventType: "goal", playerId: "p57" },
    { id: "ge122", fixtureId: "f19", eventType: "assist", playerId: "p59" },
    { id: "ge123", fixtureId: "f19", eventType: "assist", playerId: "p55" },
    { id: "ge124", fixtureId: "f20", eventType: "goal", playerId: "p30" },
    { id: "ge125", fixtureId: "f20", eventType: "goal", playerId: "p30" },
    { id: "ge126", fixtureId: "f20", eventType: "goal", playerId: "p30" },
    { id: "ge127", fixtureId: "f20", eventType: "assist", playerId: "p26" },
    { id: "ge128", fixtureId: "f20", eventType: "assist", playerId: "p32" },
    { id: "ge129", fixtureId: "f20", eventType: "assist", playerId: "p27" },
    { id: "ge130", fixtureId: "f20", eventType: "cleanSheet", playerId: "p25" },
    { id: "ge131", fixtureId: "f21", eventType: "goal", playerId: "p59" },
    { id: "ge132", fixtureId: "f21", eventType: "goal", playerId: "p64" },
    { id: "ge133", fixtureId: "f21", eventType: "assist", playerId: "p57" },
    { id: "ge134", fixtureId: "f21", eventType: "assist", playerId: "p55" },
    { id: "ge135", fixtureId: "f21", eventType: "goal", playerId: "p51" },
    { id: "ge136", fixtureId: "f21", eventType: "assist", playerId: "p48" },
    { id: "ge137", fixtureId: "f22", eventType: "goal", playerId: "p5" },
    { id: "ge138", fixtureId: "f22", eventType: "goal", playerId: "p2" },
    { id: "ge139", fixtureId: "f23", eventType: "goal", playerId: "p40" },
    { id: "ge140", fixtureId: "f23", eventType: "assist", playerId: "p38" },
    { id: "ge141", fixtureId: "f23", eventType: "cleanSheet", playerId: "p43" },
    { id: "ge142", fixtureId: "f24", eventType: "goal", playerId: "p78" },
    { id: "ge143", fixtureId: "f24", eventType: "goal", playerId: "p86" },
    { id: "ge144", fixtureId: "f24", eventType: "assist", playerId: "p86" },
    { id: "ge145", fixtureId: "f24", eventType: "assist", playerId: "p83" },
    { id: "ge146", fixtureId: "f24", eventType: "goal", playerId: "p12" },
    { id: "ge147", fixtureId: "f24", eventType: "goal", playerId: "p12" },
    { id: "ge148", fixtureId: "f24", eventType: "assist", playerId: "p17" },
    { id: "ge149", fixtureId: "f24", eventType: "assist", playerId: "p37" },
    { id: "ge150", fixtureId: "f25", eventType: "goal", playerId: "p18" },
    { id: "ge151", fixtureId: "f25", eventType: "assist", playerId: "p15" },
    { id: "ge152", fixtureId: "f25", eventType: "goal", playerId: "p5" },
    { id: "ge153", fixtureId: "f26", eventType: "goal", playerId: "p38" },
    { id: "ge154", fixtureId: "f26", eventType: "goal", playerId: "p38" },
    { id: "ge155", fixtureId: "f26", eventType: "goal", playerId: "p36" },
    { id: "ge156", fixtureId: "f26", eventType: "assist", playerId: "p34" },
    { id: "ge157", fixtureId: "f26", eventType: "assist", playerId: "p34" },
    { id: "ge158", fixtureId: "f26", eventType: "assist", playerId: "p35" },
    { id: "ge159", fixtureId: "f26", eventType: "assist", playerId: "p35" },
    { id: "ge160", fixtureId: "f26", eventType: "goal", playerId: "p77" },
    { id: "ge161", fixtureId: "f27", eventType: "goal", playerId: "p73" },
    { id: "ge162", fixtureId: "f27", eventType: "goal", playerId: "p69" },
    { id: "ge163", fixtureId: "f27", eventType: "goal", playerId: "p66" },
    { id: "ge164", fixtureId: "f28", eventType: "goal", playerId: "p23" },
    { id: "ge165", fixtureId: "f28", eventType: "assist", playerId: "p30" },
    { id: "ge166", fixtureId: "f28", eventType: "goal", playerId: "p59" },
    { id: "ge167", fixtureId: "f28", eventType: "goal", playerId: "p59" },
    { id: "ge168", fixtureId: "f28", eventType: "goal", playerId: "p59" },
    { id: "ge169", fixtureId: "f28", eventType: "goal", playerId: "p57" },
    { id: "ge170", fixtureId: "f28", eventType: "assist", playerId: "p55" },
    { id: "ge171", fixtureId: "f28", eventType: "assist", playerId: "p55" },
    { id: "ge172", fixtureId: "f28", eventType: "assist", playerId: "p55" },
    { id: "ge173", fixtureId: "f28", eventType: "assist", playerId: "p57" },

    { id: "ge174", fixtureId: "f29", eventType: "goal", playerId: "p2" },
    { id: "ge175", fixtureId: "f29", eventType: "goal", playerId: "p59" },
    { id: "ge176", fixtureId: "f29", eventType: "goal", playerId: "p59" },
    { id: "ge177", fixtureId: "f29", eventType: "goal", playerId: "p59" },
    { id: "ge178", fixtureId: "f29", eventType: "goal", playerId: "p59" },
    { id: "ge179", fixtureId: "f29", eventType: "goal", playerId: "p57" },
    { id: "ge180", fixtureId: "f29", eventType: "goal", playerId: "p57" },
    { id: "ge181", fixtureId: "f29", eventType: "goal", playerId: "p60" },
    { id: "ge182", fixtureId: "f29", eventType: "goal", playerId: "p55" },
    { id: "ge183", fixtureId: "f29", eventType: "assist", playerId: "p59" },
    { id: "ge184", fixtureId: "f29", eventType: "assist", playerId: "p55" },
    { id: "ge185", fixtureId: "f29", eventType: "assist", playerId: "p55" },
    { id: "ge186", fixtureId: "f29", eventType: "assist", playerId: "p55" },
    { id: "ge187", fixtureId: "f29", eventType: "assist", playerId: "p57" },
    { id: "ge188", fixtureId: "f29", eventType: "assist", playerId: "p57" },
    { id: "ge189", fixtureId: "f29", eventType: "assist", playerId: "p57" },
    { id: "ge190", fixtureId: "f29", eventType: "assist", playerId: "p61" },

    { id: "ge191", fixtureId: "f30", eventType: "goal", playerId: "p30" },
    { id: "ge192", fixtureId: "f30", eventType: "goal", playerId: "p30" },
    { id: "ge193", fixtureId: "f30", eventType: "goal", playerId: "p30" },
    { id: "ge194", fixtureId: "f30", eventType: "assist", playerId: "p28" },
    { id: "ge195", fixtureId: "f30", eventType: "assist", playerId: "p27" },
    { id: "ge196", fixtureId: "f30", eventType: "assist", playerId: "p23" },
    { id: "ge197", fixtureId: "f31", eventType: "goal", playerId: "p48" },
    { id: "ge198", fixtureId: "f31", eventType: "goal", playerId: "p49" },
    { id: "ge199", fixtureId: "f31", eventType: "assist", playerId: "p48" },
    { id: "ge200", fixtureId: "f31", eventType: "assist", playerId: "p48" },
    { id: "ge201", fixtureId: "f31", eventType: "assist", playerId: "p51" },
    { id: "ge202", fixtureId: "f31", eventType: "assist", playerId: "p51" },
    { id: "ge203", fixtureId: "f31", eventType: "goal", playerId: "p86" },
    { id: "ge204", fixtureId: "f31", eventType: "goal", playerId: "p86" },
    { id: "ge205", fixtureId: "f31", eventType: "goal", playerId: "p84" },
    { id: "ge206", fixtureId: "f31", eventType: "assist", playerId: "p86" },
    { id: "ge207", fixtureId: "f31", eventType: "assist", playerId: "p84" },
    { id: "ge208", fixtureId: "f31", eventType: "assist", playerId: "p87" },
    { id: "ge209", fixtureId: "f32", eventType: "cleanSheet", playerId: "p20" }
];

export const fixtureGoals = (fixture: Fixture) => {
    const events = gameEvents.filter((event) => event.fixtureId === fixture.id);

    let homeGoals = 0,
        awayGoals = 0;
    let homeAssists = 0,
        awayAssists = 0;

    events.forEach((event) => {
        if (!event.playerId) return;
        const player = players.find((p) => p.id === event.playerId);
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
    const player = players.find((p) => p.id === playerId);
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
        const player = players.find((p) => p.id === playerId);
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
