import { useRouter } from 'next/router';
import React, {useEffect} from 'react'

const ProductItem = () => {
    const router = useRouter()
    const {id} = router.query;

    useEffect(() => {
        window.fetch(`../api/avo/${id}`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }, [id])

    return (
        <div> Pagina del producto {id}</div>
    )
}

export default ProductItem;
