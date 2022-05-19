export interface IGuitar {
id: number,
name: string,
vendorCode: string,
type: string,
description: string
previewImg: string,
stringCount: number,
rating: number,
price: number,
}

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
