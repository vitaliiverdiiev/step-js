function sortByName(data) {
  return data.sort((a, b) => {
    const lastNameA = a["last name"].toLowerCase();
    const lastNameB = b["last name"].toLowerCase();

    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;

    return 0;
  });
}

function sortByExperience(data) {
  return data.sort((a, b) => {
    const A = Number(a["experience"].split(" ")[0]);
    const B = Number(b["experience"].split(" ")[0]);

    if (A > B) return -1;
    if (A < B) return 1;

    return 0;
  });
}

export function sort(data, sortBy) {
  const sortedData = [...data];
  
  if (sortBy === "ЗА ПРІЗВИЩЕМ") {
    return (sortByName(sortedData));
  }
  if (sortBy === "ЗА ДОСВІДОМ") {
    return (sortByExperience(sortedData));
  }

  return data
}