import { favoritesReducer } from "./favorites";

describe("favorites", () => {
  it("should return the default state", () => {
    let expected = [];
    let result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should add to the favorites", () => {
    let mockAction = {
      type: "ADD_FAVORITES",
      data: [{ title: "painting", id: 2 }]
    };
    let expected = [mockAction.data];

    let result = favoritesReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it("should delete to the favorites", () => {
    let store = [{ title: "painting", id: 1 }, { title: "painting", id: 2 }];

    let mockAction = {
      type: "DELETE_FAVORITES",
      data: { title: "painting", id: 2 }
    };

    let expected = [{ title: "painting", id: 1 }];
    let result = favoritesReducer(store, mockAction);
    expect(result).toEqual(expected);
  });
});
