import Link from 'next/link'
import React from 'react'
import { Card } from 'semantic-ui-react'

type ProductListProps = {
    products: TCoin[]
}

const mapProductToCards = (products: TCoin[])  =>
    products.map(({name, id, current_price, image, symbol}) => (
        <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
            <Card 
                as='a'
                header={name}
                image={image}
                meta={<Card.Meta style={{color: 'dimgray'}} >{current_price}</Card.Meta >}
            />
        </Link>
    ))

const ProductList = ({products}: ProductListProps) => {
    return (
        <Card.Group itemsPerRow={7} stackable> 
            {mapProductToCards(products)}
        </Card.Group>
    )
}

export default ProductList;
