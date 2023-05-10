import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {


  const clients = [ new Client('teste', 34, "1"), new Client('teste2',19, "2")]

  function onSelect(){

  }
  function onDelete(){

  }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-tr from-blue-500 to bg-purple-500
        text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end"> 
          <Button className="mb-4" color="green"> Novo Cliente</Button>
        </div>
        
        <Table clients={clients} onSelect={onSelect} onDelete={onDelete}></Table>
      </Layout>
    </div>
  )
}
