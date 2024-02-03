import Form from '@/components/Form'
import React from 'react'

const Home = async () => {
  const res = await fetch(process.env.API_SECRET!, {
    cache: 'no-cache',
    next: { tags: ['products'] }
  })
  const data = await res.json();

  return (
    <div id='container'>
      <Form data={data} />
    </div>
  )
}

export default Home