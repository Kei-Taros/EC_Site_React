import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../firebase/index'
import { makeStyles } from "@material-ui/core/styles"
import HTMLReactParser from "html-react-parser"
import { ImageSwiper, SizeTable} from "../components/Products"

const useStyles = makeStyles((theme) => ({
  sliderBox: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 24px auto",
      height: 320,
      width: 320
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      height: 400,
      width: 400
    }
  },
  detail: {
    textAlign:"left",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 16px auto",
      height: "auto",
      width: 320
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      height: "auto",
      width: 400
    }
  },
  price: {
    fontSize: 36
  }
}))


//改行コードを<br>に変換
function returnCodeToBr(text) {
  if (text === "") {
    return text
  }
  else {
    //React内でHTMLタグが使えるようになる
    return HTMLReactParser(text.replace(/\r?\n/g,"<br/>"))
  }
}

function ProductDetail() {
  const classes = useStyles()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const id = path.split("/product/")[1]

  const [product, setProduct] = useState(null)

  console.log("ProductDetail")

  //下のレンダーが処理された後にuseEffectが実行される
  useEffect(() => {
    db.collection("products").doc(id).get()
      .then(doc => {
        const data = doc.data();
        setProduct(data)
      })
  },[])

  return (
    <section className="c-section-wrapin">
      {product && (
        <div className="p-grid__row" >
          <div className={classes.sliderBox}>
            <ImageSwiper images={product.images} />
          </div>
          <div className={classes.detail}>
            <h2 className="u-text__headline">{product.name}</h2>
            <p className={classes.price}>{product.price.toLocaleString()}</p>
            <div className="module-spacer--small" />
            <SizeTable sizes={product.sizes} />
            <div className="module-spacer--small" />
            <p>{returnCodeToBr(product.description)}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductDetail;

