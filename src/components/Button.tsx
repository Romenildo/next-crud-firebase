

interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    children:any
    className?: string
}


export default function Button(props:ButtonProps){

    const color = props.color ?? 'gray'
    
    {/*`´E necessario adicionar a safelist do tailwind css no arquivo de cofniguração para ele gerar a cor ja com o definido` */}
    return(
        <button className={`
            bg-gradient-to-r from-${color}-400 to-${color}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}