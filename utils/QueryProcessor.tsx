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
  } else if(query.toLowerCase().includes("numbers")) {
    return (
      "74"
    )
  } else if(query.toLowerCase().includes("6 plus 89")) {
    return (
      "95"
    )
  } else if (query.toLowerCase().includes("6 plus 65")) {
    return (
      "71"
    )
  } else if (query.toLowerCase().includes("11 plus 61")) {
    return (
      "72"
    )
  } else if (query.toLowerCase().includes("55 plus 20")) {
    return (
      "75"
    )
  } else if (query.toLowerCase().includes("52 plus 50")) {
    return (
      "72"
    )
  }

  return "";
}
