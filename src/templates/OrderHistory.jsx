import React, { useCallback, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { getOrdersHistory, getProductsInCart } from "../reducks/users/selectors";
import { fetchOrdersHistory } from "../reducks/users/operations";
import { OrderHistoryItem } from "../components/Products";


import { Divider } from "@material-ui/core";
import { push } from "connected-react-router";
import { PrimaryButton, TextDetail } from "../components/UIkit";
import { orderProduct } from "../reducks/products/operations";

const useStyles = makeStyles((theme) => ({
  orderList: {
    background:theme.palette.grey["100"],
    margin: "0 auto",
    padding: 32,
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: 768
    }
  }
}))

function OrderHistory() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const orders = getOrdersHistory(selector)

  useEffect(() => {
    dispatch(fetchOrdersHistory())
  },[])
   
  return (
    <section className="c-section-wrapin">
      <List className={classes.orderList}>
        {orders.length > 0 && (
          orders.map(order =>
            <OrderHistoryItem order={order} key={order.id} />
          )
        )}
      </List>
    </section>

   )
}
export default OrderHistory

/*
 [ソースコード概略]
注文履歴の確認をするページ
 */