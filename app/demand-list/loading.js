export default function Loading() {
  
  return (
      <main className="max-w-6xl mx-auto my-4">
          <div className="">
              <div className="skeleton bg-primary-light dark:opacity-55 w-full my-4 h-52 md:h-14"/>
              <div className="skeleton bg-primary-light dark:opacity-55 flex-grow h-16 md:h-72"/>
          </div>
      </main>
  )
}