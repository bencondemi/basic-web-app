export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "My Andrew ID is bcondemi."
    );
  } else if (query.toLowerCase().includes("name")) {
    return (
      "benvic "
    )
  } else if (query.toLowerCase().includes("plus")) {
    const match = query.toLowerCase().match(/What is (\d+) plus (\d+)\?/);
    if (match) {
      const num1 = parseInt(match[1]);
      const num2 = parseInt(match[2]);
      const sum = num1 + num2;
      return `${sum}`;
    }

  } else if (query.toLowerCase().includes("which of the following")) {
    const match = query.toLowerCase().match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/);
    if (match) {
      const num1 = parseInt(match[1]);
      const num2 = parseInt(match[2]);
      const num3 = parseInt(match[3]);
      const max = Math.max(num1, num2, num3);
      return `${max}`;
    }
  }


  return "";
}
