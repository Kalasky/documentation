// Used to conditionally apply classes to elements
function classNames(...classes) {
  // filter out any falsy values and join the rest with a space
  return classes.filter(Boolean).join(' ')
}

export default classNames
