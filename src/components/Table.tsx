import Client from "../core/Client"
import { EditIcon, RemoveIcon } from "./icons"

interface TableProps {
    clients: Client[]
    onSelect?: (client:Client)=> void
    onDelete?: (client:Client)=> void
}

export default function Table(props:TableProps){

    const showActions = props.onSelect || props.onDelete


    function renderHeader(){
        return(
            <tr>
                <th className="text-left p-4">Cód</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions && (<th className="p-4">Ações</th>)}
            </tr>
        )
    }

    function renderBody(){
        return props.clients?.map((client, i) =>{
            return(
                <tr key={client.id} className={`${i%2 === 0 ? 'bg-purple-200': 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions && (renderActions(client))}
                </tr>
            )
        })
    }

    function renderActions(client:Client){
        return (
            <td className="flex justify-center">
                {props.onSelect && (
                    <button className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50"
                            onClick={()=>props.onSelect?.(client)}
                    > {EditIcon}</button>
                 )}
                 {props.onDelete && (
                    <button className="flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50"
                            onClick={()=>props.onDelete?.(client)}
                    > {RemoveIcon}</button>
                )}
                
            </td>
        )
    }
    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
              text-gray-100
                bg-gradient-to-r from-purple-500 to bg-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
            

        </table>
    )
}