import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

const samplePosts = [
  {
    slug: 'sample-post-1',
    title: 'Getting Started with Rhino and Grasshopper',
    date: '2023-05-01',
    excerpt: 'An introduction to the powerful world of parametric design using Rhino and Grasshopper.',
    content: '# Getting Started with Rhino and Grasshopper\n\nIn this post, we\'ll explore the basics of Rhino and Grasshopper...'
  },
  {
    slug: 'sample-post-2',
    title: 'Advanced Parametric Techniques in Grasshopper',
    date: '2023-05-08',
    excerpt: 'Dive deeper into Grasshopper with advanced parametric modeling techniques.',
    content: '# Advanced Parametric Techniques in Grasshopper\n\nBuilding on our previous knowledge, let\'s explore some advanced techniques...'
  }
]

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Posts directory not found. Using sample posts.")
    return samplePosts
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      ...(data as { title: string; date: string; excerpt: string }),
      content,
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string) {
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Posts directory not found. Using sample posts.")
    return samplePosts.find(post => post.slug === slug)
  }

  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    ...(data as { title: string; date: string; excerpt: string }),
    content,
  }
}

