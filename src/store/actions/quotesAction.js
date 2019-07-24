export const createQuote = quote => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // some async calls here
    const firestore = getFirestore();
    const profile = getState().firebase.profile;

    firestore
      .collection("quotes")
      .add({
        ...quote,
        author: profile.firstName[0] + ". " + profile.lastName,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_QUOTE", payload: quote });
      })
      .catch(err => {
        dispatch({ type: "CREATE_QUOTE_ERROR", payload: err });
      });
  };
};
