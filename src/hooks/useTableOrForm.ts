import { useState } from "react";

export default function useTableOrForm(){

    const [show, setShow] = useState<'table' | 'form'>('table')

    const showTable = () => setShow('table')
    const showForm = () => setShow('form')

    return{
        showForm,
        showTable,
        isForm: show ==="form",
        isTable: show ==="table"
    }

}