type DateFormatOptions = {
  day: "numeric";
  month: "long";
  year: "numeric";
};

export default function formattedDate(date?: Date): string | null {
  // Return type can be string or null
  // Handle cases where date is not provided
  if (!date) {
    return null; // Return null explicitly
  }

  const options: DateFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date
    .toLocaleDateString("ar-EG", options)
    .toString() // Convert to string explicitly
    .replace(/\d+/, function (n) {
      return n.replace(/\d/g, function (d: any) {
        return ["٠", "١", "٢", "٣", "٤", "٥", "6", "٧", "٨", "٩"][d];
      });
    });
}


