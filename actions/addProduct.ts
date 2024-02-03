'use server'

import { revalidateTag } from "next/cache";

export const addProduct = async (formData: FormData) => {
    const title = formData.get('title');
    const price = formData.get('price');

    if(!title || !price) return;

    const data = {
        title,
        price,
    }

    await fetch(process.env.API_SECRET!,{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    revalidateTag('products');

}