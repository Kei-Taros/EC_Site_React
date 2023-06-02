import { db, FirebaseTimestamp } from "../../firebase/index";
import { push } from "connected-react-router";
import { fetchProductsAction, deleteProductAction } from "./actions";

const productsRef = db.collection("products")

export function fetchProducts() {
  return async (dispatch) => {
    productsRef.orderBy("updated_at", "desc").get()
      .then(snapshots => {
        const productList = []
        snapshots.forEach(snapshot => {
          const product = snapshot.data();
          productList.push(product)
        })
        dispatch(fetchProductsAction(productList))
      })
  }
}

export function saveProduct(id, name, description, category, gender, price, images, sizes) {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()

    const data = {
      name, name,
      description: description,
      category: category,
      gender: gender,
      price: parseInt(price, 10),
      images: images,
      sizes: sizes,
      updated_at: timestamp
      
    }

    if (id === "") {
      const ref = productsRef.doc()//自動でIDが生成される
      id = ref.id
      data.id = id
      data.created_at = timestamp
    }
    
    return productsRef.doc(id).set(data, {merge:true})
      .then(() => {
        dispatch(push("/"))
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

export function deleteProduct(id) {
  return async (dispatch, getState) => {
    productsRef.doc(id).delete()
      .then(() => {
        const prevProducts = getState().products.list;
        const nextProducts = prevProducts.filter(product => product.id !== id)
        dispatch(deleteProductAction(nextProducts))

      })
  }

}

/*
 [ソースコード概略]
 データベースにある商品情報を保存・削除する処理
 */