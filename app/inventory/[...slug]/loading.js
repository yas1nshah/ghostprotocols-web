export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <main className="max-w-6xl mx-auto">
        <div className="flex gap-4">
            <div className="flex-grow mx-2">
                <div className="skeleton bg-primary-light dark:opacity-55 w-full mb-4 h-52 md:h-12"/>
                <div className="skeleton bg-primary-light dark:opacity-55 w-full mb-4 h-12 md:h-96"/>
                <div className="skeleton bg-primary-light dark:opacity-55 w-full mb-4 h-32 md:h-24"/>
                <div className="skeleton bg-primary-light dark:opacity-55 w-full mb-4 h-52 md:h-64"/>
            </div>
            <div className="w-1/3 hidden md:inline">
                <div className="skeleton bg-primary-light dark:opacity-55 w-full mb-4 h-52 md:h-72"/>
                <div className="skeleton bg-primary-light dark:opacity-55 w-full mb-4 h-52 md:h-44"/>
                <div className="skeleton bg-primary-light dark:opacity-55 w-full mb-4 h-52 md:h-72"/>

            </div>
        </div>
            
        </main>
    )
  }