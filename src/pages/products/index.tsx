import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'
import { GetStaticProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

type Data = {
  data: Product[]
}

type Props = {
  data: Product[]
}



export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {
  const res = await fetch('https://gila-render-test-default-rtdb.firebaseio.com/rendering/products.json')

  const data = await res.json()

  return {
    props: {
      data
    },
  }
}

function Products({ data }: Props) {


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-center mb-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            SSG</h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image src={product.imageSrc} alt={product.imageAlt} layout="fill" objectFit="cover" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products