const getTimeDifference = (dateString) => {
  // Parse the date string
  const date = new Date(dateString);

  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMilliseconds = now - date;

  // Convert milliseconds to days, hours, or months
  const secondsInDay = 86400000;
  const days = Math.floor(diffInMilliseconds / secondsInDay);
  const hours = Math.floor((diffInMilliseconds % secondsInDay) / 3600000);

  // Determine the appropriate unit and format the output
  if (days >= 30) {
    const months = Math.floor(days / 30);
    return `${months} ماه${months > 1 ? "s" : ""}`; // Handle pluralization
  } else if (days > 0) {
    return `${days} روز${days > 1 ? "s" : ""}`;
  } else {
    return `${hours} ساعت  `;
  }
};

export default getTimeDifference;
