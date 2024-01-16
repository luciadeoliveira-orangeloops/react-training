import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'

export default function Guitarra({guitarra}) {

  const {description, imagen, nombre, precio, url} = guitarra
  const {children} = description[0]
  const {text} = children[0]

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`}/>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{text}</p>
        <p className={styles.precio}>${precio}</p>
        <Link className={styles.enlace} href={`guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  )
}
