export const filterData = (data, criteria) => {
  const { specialization, category } = criteria;

  let filteredTrainers = data.filter((trainer) => {
    const specializationMatch =
      specialization === "all" ||
      trainer.specialization.toLowerCase() ===
        mapFormValues(specialization).toLowerCase();

    const categoryMatch =
      category === "all" ||
      trainer.category.toLowerCase() === mapFormValues(category).toLowerCase();

    return specializationMatch && categoryMatch;
  });

  return filteredTrainers;
};
