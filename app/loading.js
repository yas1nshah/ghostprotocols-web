export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <main className="max-w-6xl mx-auto">
            <div className="flex gap-4 m-4 md:flex-row flex-col">
                <div className="skeleton bg-primary-light dark:opacity-55 w-full md:w-1/4 h-52 md:h-72"/>
                <div className="skeleton bg-primary-light dark:opacity-55 flex-grow h-16 md:h-72"/>
            </div>


            <div className="skeleton flex-grow h-10 m-4 hidden md:block"/>

            <div className="flex gap-4 m-4">
                <div className="skeleton bg-primary-light dark:opacity-55 w-1/2 h-52 md:h-72"/>
                <div className="skeleton bg-primary-light dark:opacity-55 w-1/2 h-52 md:h-72"/>
                <div className="skeleton bg-primary-light dark:opacity-55 w-1/2 h-72 hidden md:inline"/>
                <div className="skeleton bg-primary-light dark:opacity-55 w-1/2 h-72 hidden md:inline"/>
                
            </div>
        </main>
    )
  }