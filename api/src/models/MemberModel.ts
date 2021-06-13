import { prop } from '@typegoose/typegoose'

export class Member {
	@prop({ required: true })
	email!: string

	@prop({ required: true })
	name!: string

	@prop({ required: true })
	password!: string
}
