export const populateObject = <S extends {}, T extends {}>(
  source: S,
  target: { new (): T }
): T => {
  return Object.assign(new target(), source);
};
