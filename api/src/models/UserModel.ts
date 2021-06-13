import { prop, Typegoose } from 'typegoose'

export class Member extends Typegoose {
	@prop({ required: true })
	email!: string

	@prop({ required: true })
	name!: string
}
