function formatTimeDifference(timestamp) {
    const currentTime = new Date();
    const inputTime = new Date(timestamp);
    const timeDifference = currentTime - inputTime;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    if (daysDifference === 0) {
      return "Today";
    } else {
      return `${daysDifference} ${daysDifference === 1 ? "Day" : "Days"} ago`;
    }
  }

  export default formatTimeDifference