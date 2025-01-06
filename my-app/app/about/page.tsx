import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-4">
          Hello! I'm [Your Name], a passionate coder and designer exploring the intersection of computational design and architecture through Rhino and Grasshopper.
        </p>
        <p className="mb-4">
          Every week, I dive into new concepts, techniques, and workflows in Rhino and Grasshopper. This blog is my way of sharing these learnings with you, hoping to inspire and help fellow enthusiasts in their journey.
        </p>
        <p>
          Join me as we explore the fascinating world of parametric design and computational architecture. Let's push the boundaries of what's possible with code and creativity!
        </p>
      </div>
    </Layout>
  )
}

