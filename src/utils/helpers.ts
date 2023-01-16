const slugify = (str: string) => {
  return (
    str &&
    `${str}`.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!.map((x) => x.toLowerCase())
      .join('-')
  )
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export { capitalize, slugify }