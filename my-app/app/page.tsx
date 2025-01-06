import Layout from './components/layout'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'

export default function Home() {
  const posts = getAllPosts()

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">Weekly Rhino & Grasshopper Learnings</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link 
            href={`/posts/${post.slug}`} 
            key={post.slug}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <span className="text-blue-600 hover:underline">Read more →</span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

