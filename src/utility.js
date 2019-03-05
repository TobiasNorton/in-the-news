// export const convertDate = (date) => {
//   let unixTimeStamp = Date.parse(date)
// {new Date(listItem.dt * 1000).toLocaleDateString([], {
//   weekday: 'long',
//   month: 'long',
//   day: 'numeric',
//   year: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric'
// })}
// }

export const parameterize = str =>
  str
    .trim()
    .toLowerCase()
    .replace(/[^\w]/g, '-')
    .replace(/-+/g, '-')
