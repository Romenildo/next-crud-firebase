import { useEffect, useState } from "react"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import CollectionClient from "../firebase/db/CollectionClient"
import useTableOrForm from "./useTableOrForm"

export default function useClient() {


    const repo: ClientRepository = new CollectionClient()

    const { showForm, showTable, isTable } = useTableOrForm()
    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then((clients) => {
            setClients(clients)
            showTable()
        })
    }

    function onSelectClient(client: Client) {
        setClient(client)
        showForm()
    }

    async function deleteClient(client: Client) {
        await repo.delete(client)
        getAll()

    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()

    }
    function newClient() {
        setClient(Client.empty)
        showForm()

    }

    return {
        newClient,
        saveClient,
        deleteClient,
        onSelectClient,
        getAll,
        client,
        clients,
        isTable,
        showTable
    }
}