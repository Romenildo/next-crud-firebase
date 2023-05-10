import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClient from "../hooks/useClient";

export default function Home() {
  
  const { client, clients, onSelectClient, deleteClient, saveClient, newClient, isTable, showTable}  = useClient()
  

  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-tr from-blue-500 to bg-purple-500
        text-white
    `}>
      <Layout title="Cadastro Simples">
        
        {isTable?(
          <>
            <div className="flex justify-end"> 
          <Button className="mb-4" color="green" onClick={newClient}> Novo Cliente</Button>
        </div>
        <Table clients={clients} onSelect={onSelectClient} onDelete={deleteClient}></Table>
          </>
        ):(
          <Form client={client} onChangeClient={saveClient} onCancel={()=>showTable()}></Form>
        )}
        
        
      </Layout>
    </div>
  )
}
