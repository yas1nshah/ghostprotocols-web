export default function Loading() {
  
  return (
      <main className="max-w-6xl mx-auto my-2">
          <div className="py-4">
              <div className="skeleton bg-primary-light dark:opacity-55 w-full my-4 h-52 md:h-14"/>
              <div className="skeleton bg-primary-light dark:opacity-55 my-4 flex-grow h-16 md:h-72"/>
              <div className="skeleton bg-primary-light dark:opacity-55 my-4 flex-grow h-16 md:h-72"/>
          </div>
      </main>
  )
}