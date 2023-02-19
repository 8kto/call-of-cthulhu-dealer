import { Result } from "types";

// todo check ~round logic
const getLevels = (base: number) => {
  return {
    fifth: Math.floor(base / 5),
    half: Math.floor(base / 2),
    base,
  };
};

/**
 * @param result A d100 throw result
 * @param base  The number a throw is against
 */
export const getThrowResult = (result: number, base: number = 0): Result => {
  const isFail = result < base || result >= 96;
  const { half, fifth } = getLevels(base);

  if (isFail) {
    if ((base >= 50 && result === 100) || (base < 50 && result >= 96)) {
      return Result.FUMBLE;
    }

    return Result.FAIL;
  }

  if (result <= fifth) {
    return Result.EXTREME_SUCCESS;
  }
  if (result <= half) {
    return Result.HARD_SUCCESS;
  }

  return Result.SUCCESS;
};
