import Hero from "../components/common/hero";
import { Container } from "react-bootstrap";
import ProductList from "../components/features/productList";
import { useState } from "react";
import SubHeader  from "../components/common/subheader";
const Home = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "product1", image: "https://placehold.co/100x100/darkblue/pink?font=roboto&text=Product" },
        { id: 2, name: "product2", image: "https://placehold.co/100x100/darkblue/pink?font=roboto&text=Product" },
        { id: 4, name: "product3", image: "https://placehold.co/100x100/darkblue/pink?font=roboto&text=Product" },
        { id: 5, name: "product4", image: "https://placehold.co/100x100/darkblue/pink?font=roboto&text=Product" },
        { id: 6, name: "product5", image: "https://placehold.co/100x100/darkblue/pink?font=roboto&text=Product" },
    ])
    return (
        <>
            <Hero
                title="Official Store for Timbertop United"
                content="Join Timbertop United's devoted fans with exclusive jerseys, scarves, and memorabilia"
                link="Shop Now"
                linkTo="/products"
            />
            <Container>
                <SubHeader
                    title='Featured products'
                />
                <ProductList
                    products={products}
                />

            </Container>
        </>
    )
}

export default Home;