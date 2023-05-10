import Client from "./Client";

export default interface ClientRepository{
    save(client: Client):Promise<Client | undefined>
    delete(client: Client):Promise<void>
    getAll():Promise<Client[]>
}