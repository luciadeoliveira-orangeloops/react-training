import { getPost } from "../models/posts.server"
import { useLoaderData } from "@remix-run/react"
import { formatearFecha } from "../utils/helpers"

export function meta({data}){
     return [
         {title: `GuitarLA - ${data.data[0].attributes.titulo}`},
         {description: `Post ${data.data[0].attributes.titulo}`}
     ]
}

export async function loader({params}){
    const {postUrl} = params
    const post = await getPost(postUrl)
    if (post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Post no encontrado'
        })
    }

    return post
}

export default function Post() {
    const post = useLoaderData()
    const {contenido, imagen, titulo, publishedAt} = post.data[0].attributes
    const {children} = contenido[0]
    const {text} = children[0]
    return (
     <div>
         <article className="post mt-3">
             <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen del post ${titulo}`}/>

             <div className="contenido">
                 <h3>{titulo}</h3>
                 <p className="fecha">{formatearFecha(publishedAt)}</p>
                 <p className="texto">{text}</p>

             </div>    
         </article>        
    </div>
    )
}