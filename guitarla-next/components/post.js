import Image from "next/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatearFecha } from "@/utils/helpers"

export default function Post({post}) {
    const {contenido, imagen, titulo, url, publishedAt} = post
    const {children} = contenido[0]
    const {text} = children[0]
    return (
        <article>
            <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`}/>

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{text}</p>
                <Link className={styles.enlace} href={`/blog/${url}`}>
                    Leer Post
                </Link>
            </div>
        </article>
    )
}
