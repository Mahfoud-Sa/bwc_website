type DateFormatOptions = {
    day: "numeric";
    month: "long";
    year: "numeric";
  };
export default function formattedDateEn(date?: Date): string | null {
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
      .toLocaleDateString("en-US", options)
      .toString() // Convert to string explicitly
      .replace(/\d+/, function (n) {
        return n.replace(/\d/g, function (d: any) {
          return ["0","1","2","3","4","5","6","7","8","9"][d];
        });
      });
  }