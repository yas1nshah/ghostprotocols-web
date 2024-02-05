export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <main className="max-w-6xl mx-auto">
            <div className="flex gap-4 m-4 md:flex-row flex-col">
                <div className="skeleton w-full hidden md:inline md:w-1/4 h-52 md:h-[500px]"/>
                <div className="flex-grow">
                    <div className="skeleton w-full h-16 mb-4 md:h-10"/>
                    <div className="skeleton w-full h-40 mb-4 md:h-52"/>
                    <div className="skeleton w-full h-40 mb-4 md:h-52"/>
                    <div className="skeleton w-full h-40 mb-4 md:h-52"/>

                </div>
            </div>

        </main>
    )
  }