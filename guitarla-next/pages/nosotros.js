import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description='Sobre nosotros, guitarLA, tienda de musica'
    >
        <main className="contenedor">
            <h1 className="heading">Nosotros</h1>

            <div className={styles.contenido}>
                <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>


                <div>
                    <p>Quisque tortor nulla, sollicitudin ut accumsan vel, suscipit in sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis lectus non varius auctor. Curabitur condimentum, justo ut dignissim dictum, massa sapien ullamcorper mauris, et sagittis eros metus ac diam. Phasellus efficitur lacus non purus blandit, non euismod elit tincidunt.</p>
                    
                    <p>Nulla hendrerit justo at purus efficitur vulputate. Fusce ut sem molestie, faucibus ligula id, dignissim magna. Praesent nec libero a ante ultrices accumsan ut quis tellus. Pellentesque sodales at leo id eleifend. In sit amet magna dapibus, cursus lectus ut, pretium justo. Proin velit nulla, hendrerit non scelerisque sed, sollicitudin id sem.</p>
                </div>
            </div>
        </main>
    </Layout>
  )
}
