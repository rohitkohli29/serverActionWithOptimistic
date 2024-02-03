'use client'
import React,{useOptimistic} from 'react'
import Button from './Button'
import { addProduct } from '@/actions/addProduct'

const Form = ({ data }: { data: any }) => {

    const [optimisticData, addOptimisticData] = useOptimistic(
        data,
        (state, newProduct:any) => [
            ...state,
            {
                title: newProduct.title,
                price: newProduct.price
            }
        ]
    )

    const formAction = async (formData: FormData) => {
        const optimisObj = {
            title: formData.get('title'),
            price: formData.get('price')
        }
        addOptimisticData(optimisObj);
        await addProduct(formData);
    }

    return (
        <div className='form-container'>
            <form action={formAction} id='form'>
                <input type="text" name="title" placeholder="Product title" />
                <input type="text" name="price" placeholder="Product price" />
                <Button />
            </form>

            <div className='card-container'>
                {
                    optimisticData && optimisticData.map((product: any, index: number) => (
                        <div key={index} className='card'>
                            <h4>{product.title}</h4>
                            <p>{product.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Form