


const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);

  let bestEmployee = entries[1];

  for (let i = 0; i < entries.length; i += 1) {
    if (entries[i] > bestEmployee) {
      bestEmployee = entries[i];
    }
  }

  return `${bestEmployee[0]}: ${bestEmployee[1]}`;
};

/* console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux */
