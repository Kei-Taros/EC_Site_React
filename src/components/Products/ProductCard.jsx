﻿import React, { useState } from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import NoImage from "../../assets/img/src/no_image.png"
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { deleteProduct } from "../../reducks/products/operations";
import { makeStyles } from "@material-ui/core/styles";
//import { makeStyles } from "@material-ui/styles";
//↑このimportだとカスタムテーマ作成になる為themeが使えず
//[.down]が未定義となる

const useStyles = makeStyles((theme) => ({

  root: {
    [theme.breakpoints.down('sm')]: {
      margin: 8,
      width: "calc(50%-16px)"
    },
    [theme.breakpoints.up("sm")]: {
      margin: 16,
      width: "calc(33.3333%-32px)"
    }
  },
  content: {
    display: "flex",
    padding: "16px 8px",
    textAlign: "left",
    "&:last-child": {
      paddingBottom: 16
    }
  },
  media: {
    height: 0,
    paddingTop:"100%"
  },
  price: {
    color: theme.palette.secondary.main,
    fontSize:16
  }
}))

function ProductCard(props) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  
  const images = (props.images.length > 0) ? props.images : [{ path: NoImage }]
  //データベースに画像が無い場合ローカルの画像を設定(三項演算子)

  const price = props.price.toLocaleString(); //価格を3桁区切りにする
  
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={images[0].path}
        title=""
        onClick={() => dispatch(push("/product/" + props.id))}
      />
      <CardContent className={classes.content}>
        <div onClick={() => dispatch(push("/product/" + props.id))} >
          <Typography color="textSecondary" component="p">
            {props.name}
          </Typography>
          <Typography className={classes.price} component="p">
            ¥{price}
          </Typography>
        </div>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClick}
        >
          <MenuItem
            onClick={() => {
              dispatch(push("/product/edit/" + props.id))
              handleClose()
            }}
          >
            edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(deleteProduct(props.id))
              handleClose()
            }}
          >
            delete
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  )
}

export default ProductCard