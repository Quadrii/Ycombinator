
import SearchForm from "@/components/SearchForm";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
import {STARTUP_QUERY} from "@/sanity/lib/queries";
import StartupCard, {StartupCardType} from "@/components/StartupCard";

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
    const query = (await searchParams).query
    const params = {search: query || null}
    const {data:posts} = await sanityFetch({query: STARTUP_QUERY, params})

  return (
      <>
          <section
              className="pink_container w-full bg-[#EE2B69] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
              <h1 className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>
                  Pitch your Startup, <br/> Connect with Entrepreneurs
              </h1>
              <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words !max-w-3xl">
                  Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
              </p>
              <SearchForm query={query} />
          </section>

          <section className='section_container px-6 py-10 max-w-7xl mx-auto'>
              <p className='font-semibold text-[30px] text-black'>
                  {query ? `Search Results for ${query}` : 'All Startups'}
              </p>
              <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
                  {posts?.length > 0 ? (
                      posts.map((startup: StartupCardType) => (
                          <StartupCard key={startup?._id} post={startup}/>
                      ))
                  ) : (
                      <p className='no-result text-black-100 text-sm font-normal'>
                          No startups found for this page.
                      </p>
                  )}
              </ul>
          </section>
          <SanityLive />
      </>
  );
}
