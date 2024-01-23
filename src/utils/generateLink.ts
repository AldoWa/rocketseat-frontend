export const generateLink = (pathname: string, product: string | null, type: string | null) => {
  const withProduct = product ? `product=${product.replace('', '')}` : ''
  const withType = type ? `type=${type.replace('', '')}` : ''
  const withBoth = withProduct && withType ? `&` : ''

  const queryParams = withProduct || withType ? `?${withProduct}${withBoth}${withType}` : ''

  return `${pathname}${queryParams}`
}