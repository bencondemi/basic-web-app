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
    const match = query.toLowerCase().match(/what is (\d+) plus (\d+)/);
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const sum = num1 + num2;
      return `The answer is ${sum}.`;
    }
  }


  return "";
}
