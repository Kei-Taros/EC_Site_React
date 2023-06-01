import { db, FirebaseTimestamp } from "../../firebase/index";
import { push } from "connected-react-router";

const productsRef = db.collection("products")

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
      const id = ref.id
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

/*
 [ソースコード概略]
 データベースに保存する処理
 */