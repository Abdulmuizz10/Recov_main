export const claimReducer = (state, action) => {
  switch (action.type) {
    case "GET_CLAIMS":
      return {
        claims: action.payload,
      };
    case "CREATE_CLAIM":
      return {
        ...state,
        claims: [...state.claims, action.payload],
      };

    case "TOGGLE_APPROVED_STATUS":
      return {
        ...state,
        claims: state.claims.map((claim) =>
          claim.id === action.payload
            ? { ...claim, isApproved: !claim.isApproved }
            : claim
        ),
      };

    case "ADD_COMMENT":
      return {
        ...state,
        claims: state.claims.map((claim) =>
          claim.id === action.payload.claimId
            ? {
                ...claim,
                comments: [
                  ...claim.comments,
                  {
                    id:
                      claim.comments.length > 0
                        ? Math.max(...claim.comments.map((c) => c.id)) + 1
                        : 1,
                    isAdmin: action.payload.isAdmin,
                    text: action.payload.text,
                    date: new Date().toISOString().split("T")[0],
                  },
                ],
              }
            : claim
        ),
      };
  }
};
