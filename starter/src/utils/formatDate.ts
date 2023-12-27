const formatDate = (dateString: Date) => {
  const originalDate = new Date(dateString);

  // Check if the date is valid
  if (isNaN(originalDate.getTime())) {
    return "Invalid Date";
  }

  // Options for formatting
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date
  const formattedDate = originalDate.toLocaleDateString(undefined);

  return formattedDate;
};
