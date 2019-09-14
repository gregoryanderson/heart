import { paintingsReducer } from "./paintings";

describe("facets", () => {
  it("should return the default state", () => {
    let expected = [];
    let result = paintingsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the action's paintings", () => {
    let mockAction = {
      type: "ESTABLISH_PAINTINGS",
      paintings: [{ 0: {}, 1: {} }]
    };
    let expected = [{ 0: {}, 1: {} }];

    let result = paintingsReducer([], mockAction);
    expect(result).toEqual(expected);
  });
});
