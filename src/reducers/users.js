export const users = (state = [], action) => {
    switch (action.type) {
      case "ADD_USERS":
        return action.users;
      default:
        return state;
    }
  };
  