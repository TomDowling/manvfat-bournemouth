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
    goals?: Goal[];
    assists?: Goal[];
}

export const teams: Team[] = [
    { id: "1", name: "Yellow Chubmarines", color: "yellow" },
    { id: "5", name: "FC Purpleona", color: "purple" },
    { id: "2", name: "Black Forest Fatsos", color: "black" },
    { id: "3", name: "Ivory Toast", color: "orange" },
    { id: "4", name: "The Incredible Bulk", color: "green" },
    { id: "6", name: "Paris Sandwichman", color: "white" },
    { id: "7", name: "Scoffenheim FC", color: "blue" },
    { id: "8", name: "Kebaberdeen", color: "red" }
];

export const players: Player[] = [
    { id: "player1", name: "Tom Dowling", teamId: "1" },
    { id: "player2", name: "Kevin Crago", teamId: "1" },
    { id: "player3", name: "Paul Harding", teamId: "6" },
    { id: "player4", name: "Oliver Shearing", teamId: "7" },
    { id: "player5", name: "Robert Hodge", teamId: "6" },
    { id: "player6", name: "Liam Dancer", teamId: "8" },
    { id: "player7", name: "Luke Humphreys", teamId: "3" },
    { id: "player8", name: "Kevin Hughes", teamId: "5" },
    { id: "player9", name: "Ben Neilson", teamId: "5" },
    { id: "player10", name: "Mike Morris", teamId: "2" },
    { id: "player11", name: "Matt Waterman", teamId: "2" },
    { id: "player12", name: "Jim Lovell", teamId: "4" },
    { id: "player13", name: "Oscar Sellick-Pilley", teamId: "5" },
    { id: "player14", name: "Alex Jones", teamId: "3" },
    { id: "player15", name: "David Dearnley", teamId: "5" },
    { id: "player16", name: "Jesus Ponce", teamId: "4" },
    { id: "player17", name: "Neil Puttick", teamId: "8" },
    { id: "player18", name: "Martin Boon", teamId: "6" },
    { id: "player19", name: "Chris Malone", teamId: "3" },
    { id: "player20", name: "Ben Goodridge", teamId: "1" },
    { id: "player21", name: "Lloyd Croxford", teamId: "3" },
    { id: "player22", name: "Joshua Buxton", teamId: "4" },
    { id: "player23", name: "Sid Woolford", teamId: "1" },
    { id: "player24", name: "George Howe", teamId: "5" },
    { id: "player25", name: "Sam Denton", teamId: "1" },
    { id: "player26", name: "Lewis Vasellina-Turner", teamId: "5" },
    { id: "player27", name: "Eddie White", teamId: "2" },
    { id: "player28", name: "Josh Davis", teamId: "2" },
    { id: "player29", name: "Paul Gibson", teamId: "5" },
    { id: "player30", name: "Paul Sahota", teamId: "2" },
    { id: "player31", name: "Jimi Murphy", teamId: "8" },
    { id: "player32", name: "Rav Nath", teamId: "2" },
    { id: "player33", name: "Jason Court", teamId: "4" },
    { id: "player34", name: "Dean Iles", teamId: "4" },
    { id: "player35", name: "Luke Cage", teamId: "6" },
    { id: "player36", name: "Jordan Mohomed", teamId: "5" },
    { id: "player37", name: "Brett Barrass", teamId: "8" },
    { id: "player38", name: "Tim Greenwood", teamId: "3" },
    { id: "player39", name: "Rich Webb", teamId: "6" },
    { id: "player40", name: "Greg Coope", teamId: "1" },
    { id: "player41", name: "Jordan Hough", teamId: "8" },
    { id: "player42", name: "Russ Palmer", teamId: "1" },
    { id: "player43", name: "Michael Burt", teamId: "3" },
    { id: "player44", name: "Harry Davis", teamId: "8" },
    { id: "player45", name: "Liam Churchward", teamId: "2" },
    { id: "player46", name: "Gareth Hensby", teamId: "7" },
    { id: "player47", name: "Tom Davey", teamId: "1" },
    { id: "player48", name: "Charles Rees", teamId: "6" },
    { id: "player49", name: "Sonny Ko", teamId: "3" },
    { id: "player50", name: "steve carlton", teamId: "7" },
    { id: "player51", name: "Scott Hardy", teamId: "4" },
    { id: "player52", name: "Ron Ingram", teamId: "2" },
    { id: "player53", name: "Philip Haley", teamId: "3" },
    { id: "player54", name: "Connor Skerman", teamId: "8" },
    { id: "player55", name: "Karl Pidgley", teamId: "6" },
    { id: "player56", name: "Chris Spencer", teamId: "7" },
    { id: "player57", name: "Liam Goodall", teamId: "8" },
    { id: "player58", name: "Tomas Marks", teamId: "4" },
    { id: "player59", name: "Matt Clist", teamId: "7" },
    { id: "player60", name: "James Scott", teamId: "4" },
    { id: "player61", name: "Robert Bridges", teamId: "1" },
    { id: "player62", name: "Oli Wentworth", teamId: "1" },
    { id: "player63", name: "Michael Pearson", teamId: "7" },
    { id: "player64", name: "Dimi Eleftheriou", teamId: "7" },
    { id: "player65", name: "Craig Drury", teamId: "7" },
    { id: "player66", name: "Jack Dunne", teamId: "4" },
    { id: "player67", name: "Paul Moore", teamId: "7" },
    { id: "player68", name: "Hugh Wrench", teamId: "5" },
    { id: "player69", name: "Steven Nodwell", teamId: "7" }
];

export const fixtures: Fixture[] = [
    {
        id: "1",
        homeTeam: "1",
        awayTeam: "6",
        date: "2025-04-25T20:30:00",
        season: 13,
        gameweek: 1,
        goals: [
            { id: "g1", player: "7", team: "1" },
            { id: "g2", player: "17", team: "6" },
            { id: "g3", player: "9", team: "1" }
        ],
        assists: [
            { id: "a1", player: "7", team: "1" },
            { id: "a2", player: "17", team: "6" },
            { id: "a3", player: "9", team: "1" }
        ]
    },
    {
        id: "1",
        homeTeam: "1",
        awayTeam: "6",
        date: "2025-07-01T20:30:00",
        season: 13,
        gameweek: 2
    }
];
