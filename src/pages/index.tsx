import { useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import CollectionClient from "../firebase/db/CollectionClient";

export default function Home() {


  
  const repo: ClientRepository = new CollectionClient()


  const [show, setShow] = useState<'table'| 'form'>('table')
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])



  useEffect(getAll, [])


  function getAll(){
    repo.getAll().then((clients) =>{
      setClients(clients)
      setShow('table')
    })
  }

  function onSelect(client:Client){
    setClient(client)
    setShow('form')
  }

  async function onDelete(client:Client){
    await repo.delete(client)
    getAll()

  }

  async function saveClient(client: Client){
    await repo.save(client)
    getAll()

  }
  function newClient(){
    setClient(Client.empty)
    setShow('form')

  }

  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-tr from-blue-500 to bg-purple-500
        text-white
    `}>
      <Layout title="Cadastro Simples">
        
        {show === 'table'?(
          <>
            <div className="flex justify-end"> 
          <Button className="mb-4" color="green" onClick={newClient}> Novo Cliente</Button>
        </div>
        <Table clients={clients} onSelect={onSelect} onDelete={onDelete}></Table>
          </>
        ):(
          <Form client={client} onChangeClient={saveClient} onCancel={()=>setShow('table')}></Form>
        )}
        
        
      </Layout>
    </div>
  )
}
