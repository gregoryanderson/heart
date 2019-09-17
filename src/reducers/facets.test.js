import { facetsReducer } from "./facets";

describe("facets", () => {
  it("should return the default state", () => {
    let expected = [];
    let result = facetsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return the action's facets", () => {
    let mockAction = {
      type: "ESTABLISH_FACETS",
      facets: [{ 0: {}, 1: {} }]
    };
    let expected = [{ 0: {}, 1: {} }];

    let result = facetsReducer([], mockAction);
    expect(result).toEqual(expected);
  });
});
