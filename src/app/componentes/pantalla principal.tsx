import Link from "next/link";
import Section from "./section";

export default function PantallaPrincipal() {
  return (
      <div className="pt-8 px-4 space-y-8">
        <Link href="/personalizacion">
        <Section categoria="Promociones" link1="/promocion 2x1.webp" link2="/Pizza Familiar + 1 Litro de Soda por $9.99.webp" link3="/CincuentaDescuento.jpg"/>
        </Link>
        <div className="w-full h-1 bg-red-900"></div>
        <Link href="/personalizacion">
        <Section categoria="Nuevo" link1="https://www.novachef.es/media/images/pizza-pepperoni.jpg" link2="https://lapiccolastanza.com/wp-content/uploads/2020/12/pizza-marinera-1024x683.jpg" link3="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"/>
        </Link>
        <div className="w-full h-1 bg-red-900"></div>
        <Link href="/personalizacion">
        <Section categoria="Para ti" link1="https://media.traveler.es/photos/65c20015883b22299000d684/16:9/w_1952,h_1098,c_limit/Fratelli%20Figurato_Andavo%20a%2010%20all'ora_5.jpg" link2="https://pizzeriatradizioneitaliana.com/wp-content/uploads/2024/06/Pizzas-italianas-diferentes.jpg" link3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2f38jmDq8OZhG72KpH345LC9teABsdTXrqg&s"/>
        </Link>
        <div className="w-full h-1 bg-red-900"></div>
        <Link href="/personalizacion">
        <Section categoria="Menu de comida" link1="https://www.sazonpapudo.cl/cdn/shop/files/como-hacer-pizza-hawaiana.jpg?v=1705543638&width=2048" link2="https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg" link3="https://valledearas.com/wordpress/wp-content/uploads/2023/01/pizza-4-quesos.jpg"/>
        </Link>
      </div>
  );
}