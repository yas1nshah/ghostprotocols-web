'use client'
// Import the necessary hooks from Next.js
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to the search page with the specified keyword
    router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <form
      className='flex gap-2 flex-grow mx-20'
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search here"
        className="input w-full bg-primary"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <button className='btn bg-primary' type="submit">
        Go
      </button>
    </form>
  );
};

export default SearchBar;
