import SearchForm from "@/components/SearchForm"
import StartupCard, { StartupTypeCard } from "@/components/StartupCard"

import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";



export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query
   const params = {search: query || null }

  const session = await auth()
  const {data:posts} = await sanityFetch({query: STARTUPS_QUERY, params})

  

  // const posts = [{
  //   _createdAt: new Date(),
  //   views: 55,
  //   author: { _id: 1, name: 'Yash' },
  //   description: "this is a discription",
  //   image: "/robots.jpg",
  //   category: "Robots",
  //   title: "We Robots"
  // }]
    return (
    <>
      <section className="pink_container">
        <h1 className="heading">grow here, <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">Post Ideas, Vote on Pitches, and Get noticed in virtual World</p>
        <SearchForm query={query} />
      </section>
        <section className="section_container">
          
        <p className="text-30-semibold">
          {
            query ? `Search results for "${query}"` : 'All Startups'
          }
        </p>
        <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post: StartupTypeCard, index: number) => (
                <StartupCard key={index} post={post}/>
              ))
            ) : (
                <p className="no-results"> No startups found</p>
      )}
        </ul>

        </section>
        <SanityLive />
    </>
  )
}