import { getThrowResult } from "shared/diceHelpers";
import { Result } from "types";

describe("dice helpers", () => {
  const results = Array.from({ length: 21 }, (_, i) => i * 5);
  results[0] = 1;

  describe("getThrowResult", () => {
    describe("default difficulty [0]", () => {
      it.each(results.slice(0, 20))("should return success [%d]", (input) => {
        expect(getThrowResult(input)).toEqual(Result.SUCCESS);
      });

      it("should return fumble", () => {
        expect(getThrowResult(100)).toEqual(Result.FUMBLE);
      });
    });
  });
});
