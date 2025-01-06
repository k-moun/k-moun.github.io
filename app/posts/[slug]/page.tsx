import Layout from '../../components/layout'
import Post from '../../components/post'
import { getPostBySlug } from '../../../lib/api'
import Link from 'next/link'

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <Layout>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="mb-4">Sorry, the post you're looking for doesn't exist.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <Post title={post.title} content={post.content} date={post.date} />
    </Layout>
  )
}

