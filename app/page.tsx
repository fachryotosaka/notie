import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Greates Woman Dwina Andita ( Na's )
      </h1>
      <p className="mb-4">
        {`Na's, my incredible princess, radiates pure wonder and beauty in every way imaginable. She's so perfect in various aspects, and I love her wholeheartedly. I'm grateful and incredibly proud to have met her :) .`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
