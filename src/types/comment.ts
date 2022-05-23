export interface PostComment {
guitarId: number,
userName: string,
advantage: string,
disadvantage: string,
comment: string,
rating: number,
}

// export interface PostComment {
//     id: string;
//     userName: string;
//     advantage: string;
//     disadvantage: string;
//     comment: string;
//     rating: number;
//     createAt: string;
//     guitarId: number;
// }

export interface IComment {
guitarId: number,
userName: string,
advantage: string,
disadvantage: string,
comment: string,
rating: number,
createAt: string,
id: string,
}
