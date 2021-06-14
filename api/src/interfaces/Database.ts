export interface DBConnector {
	Connect(): void
}

export interface DBWriter extends DBConnector {
	Save(params: any): any
}

export interface DBReader {
	FetchOne(): void
	Fetch(params: any): any
}
