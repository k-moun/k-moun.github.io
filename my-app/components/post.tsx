import { MDXRemote } from 'next-mdx-remote/rsc'

interface PostProps {
  title: string
  content: string
  date: string
}

export default function Post({ title, content, date }: PostProps) {
  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-8">{date}</p>
      <div className="prose prose-lg">
        <MDXRemote source={content} />
      </div>
    </article>
  )
}

