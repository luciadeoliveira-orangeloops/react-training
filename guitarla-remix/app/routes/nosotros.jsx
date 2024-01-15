import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return [
      {title: 'GuitarLA - Sobre Nosotros'},
      {description: 'Venta de guitarras, blog de música'}
    ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros"/>

                <div>
                    <p>Integer eleifend turpis a mollis hendrerit. Nam sagittis, nisi sodales suscipit pulvinar, purus est gravida sem, ut viverra libero elit vel neque. Nullam ut tortor finibus, sagittis massa eget, lacinia odio. In vulputate sapien id leo condimentum, vitae ornare neque convallis. Praesent in tincidunt velit. Curabitur eu ex enim. Sed eros velit, faucibus at porttitor ut, placerat at nisi. Maecenas vel efficitur sem. Mauris mi lectus, luctus vitae magna ac, faucibus ultrices augue. Aliquam quis mi orci. Aliquam rhoncus nibh ac velit pretium dignissim. Nullam gravida justo ut consectetur fringilla.</p>

                    <p>Morbi semper orci dui, a vulputate augue sagittis at. Nulla nulla dui, dignissim vel iaculis eget, tincidunt sed augue. Cras id interdum urna. Donec facilisis ex est, vitae tempus purus hendrerit eu. Pellentesque non feugiat nulla. Proin mattis convallis lorem, id dignissim orci malesuada eget. Nullam luctus vitae massa sit amet iaculis. Aenean at bibendum dui.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros