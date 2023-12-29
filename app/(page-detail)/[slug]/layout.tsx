import type { Metadata } from 'next'

export const generateMetadata = async ({ params }: { params: PageParams }) => {
  const { slug } = params

  console.log('hit route: /page/[slug]/layout.tsx', slug)

  return {
    title: slug,
  }
}

interface PageParams {
  slug: string
}

export default async (props) => {
  return props.children
}
