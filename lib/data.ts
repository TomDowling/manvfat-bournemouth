export interface Team {
    id: string;
    name: string;
    color: string;
}

export interface Player {
    id: string;
    name: string;
    number: number;
    position: string;
    age: number;
    teamId: string;
}

export interface Goal {
    id: string;
    scorer: string;
    assister?: string;
    minute: number;
    team: "home" | "away";
}

export interface Fixture {
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: string;
    matchday: string;
    status: "upcoming" | "completed";
    homeScore?: number;
    awayScore?: number;
    goals?: Goal[];
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
    // Arsenal Lions
    {
        id: "1",
        name: "James Wilson",
        number: 1,
        position: "GK",
        age: 28,
        teamId: "1"
    },
    {
        id: "2",
        name: "Marcus Johnson",
        number: 2,
        position: "RB",
        age: 25,
        teamId: "1"
    },
    {
        id: "3",
        name: "David Thompson",
        number: 5,
        position: "CB",
        age: 29,
        teamId: "1"
    },
    {
        id: "4",
        name: "Alex Brown",
        number: 6,
        position: "CB",
        age: 27,
        teamId: "1"
    },
    {
        id: "5",
        name: "Ryan Davis",
        number: 3,
        position: "LB",
        age: 24,
        teamId: "1"
    },
    {
        id: "6",
        name: "Michael Garcia",
        number: 8,
        position: "CM",
        age: 26,
        teamId: "1"
    },
    {
        id: "7",
        name: "Chris Martinez",
        number: 10,
        position: "CAM",
        age: 28,
        teamId: "1"
    },
    {
        id: "8",
        name: "Kevin Anderson",
        number: 11,
        position: "LW",
        age: 23,
        teamId: "1"
    },
    {
        id: "9",
        name: "Daniel Taylor",
        number: 9,
        position: "ST",
        age: 29,
        teamId: "1"
    },

    // Chelsea Blues
    {
        id: "10",
        name: "Robert Miller",
        number: 1,
        position: "GK",
        age: 30,
        teamId: "2"
    },
    {
        id: "11",
        name: "Steven Wilson",
        number: 2,
        position: "RB",
        age: 26,
        teamId: "2"
    },
    {
        id: "12",
        name: "Paul Moore",
        number: 4,
        position: "CB",
        age: 28,
        teamId: "2"
    },
    {
        id: "13",
        name: "Mark Jackson",
        number: 5,
        position: "CB",
        age: 31,
        teamId: "2"
    },
    {
        id: "14",
        name: "Andrew White",
        number: 3,
        position: "LB",
        age: 25,
        teamId: "2"
    },
    {
        id: "15",
        name: "Thomas Harris",
        number: 6,
        position: "CDM",
        age: 27,
        teamId: "2"
    },
    {
        id: "16",
        name: "Joshua Martin",
        number: 8,
        position: "CM",
        age: 24,
        teamId: "2"
    },
    {
        id: "17",
        name: "Matthew Thompson",
        number: 10,
        position: "CAM",
        age: 26,
        teamId: "2"
    },
    {
        id: "18",
        name: "Anthony Garcia",
        number: 7,
        position: "RW",
        age: 22,
        teamId: "2"
    },

    // Manchester Reds
    {
        id: "19",
        name: "Christopher Lee",
        number: 1,
        position: "GK",
        age: 29,
        teamId: "3"
    },
    {
        id: "20",
        name: "Nicholas Walker",
        number: 2,
        position: "RB",
        age: 27,
        teamId: "3"
    },
    {
        id: "21",
        name: "Jonathan Hall",
        number: 4,
        position: "CB",
        age: 30,
        teamId: "3"
    },
    {
        id: "22",
        name: "Brandon Allen",
        number: 5,
        position: "CB",
        age: 28,
        teamId: "3"
    },
    {
        id: "23",
        name: "Samuel Young",
        number: 3,
        position: "LB",
        age: 24,
        teamId: "3"
    },
    {
        id: "24",
        name: "Gregory King",
        number: 6,
        position: "CDM",
        age: 26,
        teamId: "3"
    },
    {
        id: "25",
        name: "Benjamin Wright",
        number: 8,
        position: "CM",
        age: 25,
        teamId: "3"
    },
    {
        id: "26",
        name: "Jacob Lopez",
        number: 10,
        position: "CAM",
        age: 27,
        teamId: "3"
    },
    {
        id: "27",
        name: "Alexander Hill",
        number: 9,
        position: "ST",
        age: 28,
        teamId: "3"
    },

    // Liverpool Reds
    {
        id: "28",
        name: "Ethan Scott",
        number: 1,
        position: "GK",
        age: 26,
        teamId: "4"
    },
    {
        id: "29",
        name: "Noah Green",
        number: 2,
        position: "RB",
        age: 23,
        teamId: "4"
    },
    {
        id: "30",
        name: "William Adams",
        number: 4,
        position: "CB",
        age: 29,
        teamId: "4"
    },
    {
        id: "31",
        name: "Lucas Baker",
        number: 5,
        position: "CB",
        age: 27,
        teamId: "4"
    },
    {
        id: "32",
        name: "Mason Gonzalez",
        number: 3,
        position: "LB",
        age: 25,
        teamId: "4"
    },
    {
        id: "33",
        name: "Logan Nelson",
        number: 6,
        position: "CDM",
        age: 28,
        teamId: "4"
    },
    {
        id: "34",
        name: "Elijah Carter",
        number: 8,
        position: "CM",
        age: 24,
        teamId: "4"
    },
    {
        id: "35",
        name: "Oliver Mitchell",
        number: 10,
        position: "CAM",
        age: 26,
        teamId: "4"
    },
    {
        id: "36",
        name: "James Perez",
        number: 11,
        position: "LW",
        age: 22,
        teamId: "4"
    },

    // Tottenham Spurs
    {
        id: "37",
        name: "Liam Roberts",
        number: 1,
        position: "GK",
        age: 27,
        teamId: "5"
    },
    {
        id: "38",
        name: "Henry Turner",
        number: 2,
        position: "RB",
        age: 25,
        teamId: "5"
    },
    {
        id: "39",
        name: "Sebastian Phillips",
        number: 4,
        position: "CB",
        age: 30,
        teamId: "5"
    },
    {
        id: "40",
        name: "Owen Campbell",
        number: 5,
        position: "CB",
        age: 28,
        teamId: "5"
    },
    {
        id: "41",
        name: "Carter Parker",
        number: 3,
        position: "LB",
        age: 24,
        teamId: "5"
    },
    {
        id: "42",
        name: "Wyatt Evans",
        number: 6,
        position: "CDM",
        age: 26,
        teamId: "5"
    },
    {
        id: "43",
        name: "Luke Edwards",
        number: 8,
        position: "CM",
        age: 23,
        teamId: "5"
    },
    {
        id: "44",
        name: "Jack Collins",
        number: 10,
        position: "CAM",
        age: 27,
        teamId: "5"
    },
    {
        id: "45",
        name: "Connor Stewart",
        number: 9,
        position: "ST",
        age: 25,
        teamId: "5"
    },

    // Newcastle United
    {
        id: "46",
        name: "Hunter Sanchez",
        number: 1,
        position: "GK",
        age: 29,
        teamId: "6"
    },
    {
        id: "47",
        name: "Aaron Morris",
        number: 2,
        position: "RB",
        age: 26,
        teamId: "6"
    },
    {
        id: "48",
        name: "Ian Rogers",
        number: 4,
        position: "CB",
        age: 31,
        teamId: "6"
    },
    {
        id: "49",
        name: "Adrian Reed",
        number: 5,
        position: "CB",
        age: 28,
        teamId: "6"
    },
    {
        id: "50",
        name: "Caleb Cook",
        number: 3,
        position: "LB",
        age: 24,
        teamId: "6"
    },
    {
        id: "51",
        name: "Jordan Bailey",
        number: 6,
        position: "CDM",
        age: 27,
        teamId: "6"
    },
    {
        id: "52",
        name: "Blake Rivera",
        number: 8,
        position: "CM",
        age: 25,
        teamId: "6"
    },
    {
        id: "53",
        name: "Gavin Cooper",
        number: 10,
        position: "CAM",
        age: 26,
        teamId: "6"
    },
    {
        id: "54",
        name: "Tristan Richardson",
        number: 7,
        position: "RW",
        age: 23,
        teamId: "6"
    },

    // Brighton Seagulls
    {
        id: "55",
        name: "Brayden Cox",
        number: 1,
        position: "GK",
        age: 28,
        teamId: "7"
    },
    {
        id: "56",
        name: "Jaxon Howard",
        number: 2,
        position: "RB",
        age: 25,
        teamId: "7"
    },
    {
        id: "57",
        name: "Easton Ward",
        number: 4,
        position: "CB",
        age: 29,
        teamId: "7"
    },
    {
        id: "58",
        name: "Nolan Torres",
        number: 5,
        position: "CB",
        age: 27,
        teamId: "7"
    },
    {
        id: "59",
        name: "Ryder Peterson",
        number: 3,
        position: "LB",
        age: 24,
        teamId: "7"
    },
    {
        id: "60",
        name: "Kayden Gray",
        number: 6,
        position: "CDM",
        age: 26,
        teamId: "7"
    },
    {
        id: "61",
        name: "Grayson Ramirez",
        number: 8,
        position: "CM",
        age: 23,
        teamId: "7"
    },
    {
        id: "62",
        name: "Braxton James",
        number: 10,
        position: "CAM",
        age: 28,
        teamId: "7"
    },
    {
        id: "63",
        name: "Zander Watson",
        number: 9,
        position: "ST",
        age: 25,
        teamId: "7"
    }
];

export const fixtures: Fixture[] = [
    // Completed fixtures
    {
        id: "1",
        homeTeam: "1",
        awayTeam: "2",
        date: "2024-01-15",
        matchday: "Matchday 1",
        status: "completed",
        homeScore: 2,
        awayScore: 1,
        goals: [
            { id: "g1", scorer: "7", minute: 23, team: "home" },
            { id: "g2", scorer: "17", minute: 45, team: "away" },
            { id: "g3", scorer: "9", assister: "8", minute: 78, team: "home" }
        ]
    },
    {
        id: "2",
        homeTeam: "3",
        awayTeam: "4",
        date: "2024-01-16",
        matchday: "Matchday 1",
        status: "completed",
        homeScore: 0,
        awayScore: 3,
        goals: [
            { id: "g4", scorer: "35", minute: 12, team: "away" },
            { id: "g5", scorer: "36", assister: "34", minute: 34, team: "away" },
            { id: "g6", scorer: "35", minute: 67, team: "away" }
        ]
    },
    {
        id: "3",
        homeTeam: "5",
        awayTeam: "6",
        date: "2024-01-17",
        matchday: "Matchday 1",
        status: "completed",
        homeScore: 1,
        awayScore: 1,
        goals: [
            { id: "g7", scorer: "45", minute: 28, team: "home" },
            { id: "g8", scorer: "53", assister: "54", minute: 82, team: "away" }
        ]
    },

    // Upcoming fixtures
    {
        id: "4",
        homeTeam: "7",
        awayTeam: "1",
        date: "2024-01-22",
        matchday: "Matchday 2",
        status: "upcoming"
    },
    {
        id: "5",
        homeTeam: "2",
        awayTeam: "3",
        date: "2024-01-23",
        matchday: "Matchday 2",
        status: "upcoming"
    },
    {
        id: "6",
        homeTeam: "4",
        awayTeam: "5",
        date: "2024-01-24",
        matchday: "Matchday 2",
        status: "upcoming"
    },
    {
        id: "7",
        homeTeam: "6",
        awayTeam: "7",
        date: "2024-01-25",
        matchday: "Matchday 2",
        status: "upcoming"
    },
    {
        id: "8",
        homeTeam: "1",
        awayTeam: "4",
        date: "2024-01-29",
        matchday: "Matchday 3",
        status: "upcoming"
    },
    {
        id: "9",
        homeTeam: "3",
        awayTeam: "5",
        date: "2024-01-30",
        matchday: "Matchday 3",
        status: "upcoming"
    },
    {
        id: "10",
        homeTeam: "7",
        awayTeam: "2",
        date: "2024-01-31",
        matchday: "Matchday 3",
        status: "upcoming"
    }
];
