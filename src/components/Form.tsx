
import { useState } from 'react'
import Client from '../core/Client'
import Input from './Input'
import Button from './Button'

interface FormProps {
    client: Client
    onCancel?: ()=> void
    onChangeClient?:(client:Client)=> void
}


export default function Form(props:FormProps){

    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    
    return(
        <div>
            {id && (
                <Input text='Cód' value={id} readOnly  className='mb-5'/>
            )}
            <Input text='Nome' value={name} onChange={setName}  className='mb-5'/>
            <Input text='Idade' type='number' value={age}  onChange={setAge}/>
            <div className='mt-3 flex justify-end'>
                <Button color='blue' className='mr-2' onClick={()=>props.onChangeClient?.(new Client(name, +age, id))}> {id ? 'Alterar': 'Salvar'}</Button>
                <Button onClick={props.onCancel}> Cancelar</Button>
            </div>
        </div>
    )
}