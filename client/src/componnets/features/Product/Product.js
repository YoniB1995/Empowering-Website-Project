import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './Product.css';
import {useTranslation} from 'react-i18next'

const ProductC = ({ product, handleAddToCart }) => {
    const { Meta } = Card;
    const {t} = useTranslation()
    return (
        <div className="productContainer">
            <Card key={product.id}
                className="productCard"
                hoverable
                cover={<img alt="productImg" src={product.media.source} />}
            >
                <div style={{marginTop:75}}>
                    <Meta title={product.name} />

                    <Meta description={product.price.formatted_with_symbol}></Meta>
                </div>
                <hr></hr>
                <span className="addToCart" onClick={() => handleAddToCart(product.id, 1)}>{t('Cart')}</span>
            </Card>
            </div>
       
    )
}

export default ProductC;