import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React with Tailwind ', excerpt: 'Learn React with Tailwind' },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Mohaimin Blog Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-gray-200'>
        {posts.map((post, index) => (
          <div className='grid grid-cols-1 lg:grid-cols-12'>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
     
    </div>
  )
}

export default Home
