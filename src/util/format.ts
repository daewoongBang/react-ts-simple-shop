export const formatPrice = (
  price: number,
  unit: string = '￦',
  locale: Intl.LocalesArgument = 'ko-KR'
) => {
  return `${unit} ${price.toLocaleString(locale)}`;
};
