export interface Contact {
    name: string;
}

export class API {
    public authenticate(idToken: string): Promise<any> {
        // Authenticates with the API.
        return Promise.resolve();
    }

    public getContacts(): Promise<Contact[]> {
        return Promise.resolve([]);
    }


}