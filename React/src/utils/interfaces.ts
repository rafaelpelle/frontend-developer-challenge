export interface IRootReducer {
	UserReducer: IUserReducer,
}

export interface IUserReducer {
	accessToken: string,
}

export interface ProductInterface {
	id: number
	name: string
	image: string
	oldPrice: number
	price: number
	description: string
	installments: {
		count: number
		value: number
	}
}
