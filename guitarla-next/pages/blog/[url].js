import Image from "next/image"
import Layout from "@/components/layout"
import { formatearFecha } from "@/utils/helpers"
import styles from '../../styles/blog.module.css'

export default function Post({post}) {
    const {titulo, contenido, imagen, publishedAt} = post[0].attributes
    const {children} = contenido[0]
    const {text} = children[0]
  return (
    <Layout>
        <article className={`${styles.post} ${styles['mt-3']}`}> 
            <Image src={imagen.data.attributes.url} width={1000} height={600} alt={`imagen blog ${titulo}`}/>

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{text}</p>

            </div>
        </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data: post} = await respuesta.json()
    return {
        props: {
            post
        }
    }
} 