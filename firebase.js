const db = firebase.firestore();

export async function getItems(uid) {
  try {
    let items = [];
    const response = await db
      .collection("usuarios")
      .where("mail", "==", uid)
      .get();

    response.forEach((item) => {
      items.push(item.data());
    });
    return items;
  } catch (error) {
    throw new Error(error);
  }
}
