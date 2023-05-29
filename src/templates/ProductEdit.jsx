import React, { useCallback, useState } from "react"
import { TextInput, SelectBox, PrimaryButton } from "../components/UIkit"
import { ImageArea } from "../components/Products"
import { saveProduct } from "../reducks/products/operations"
import { useDispatch } from "react-redux"

function ProdictEdit() {

  const dispatch = useDispatch()


  const [name, setName] = useState(""),
        [description, setDescription] = useState(""),
        [category, setCategory] = useState(""),
        [gender, setGender] = useState(""),
        [images, setImages] = useState([]),
        [price, setPrice] = useState("");

  
  const inputName = useCallback((event) => {
    setName(event.target.value)
  }, [setName]);

  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  }, [setDescription]);

  const inputPrice = useCallback((event) => {
    setPrice(event.target.value)
  }, [setPrice]);

  const categories = [
    { id: "tops", name: "Tops" },
    { id: "shirts", name: "Shirts" },
    { id: "pants", name: "Pants" },
  ];

  const genders = [
    { id: "all", name: "All" },
    { id: "meal", name: "Men" },
    { id: "female", name: "Women" },
  ];

  return (
    <section>
      <h2 className="u-text__headline u-text-center">Product Registration/Editing</h2>
      <div className="c-section-container">
        <ImageArea images={images} setImages={setImages} />
        <TextInput
          fullwidth={true} label={"Product Name"} multiline={false} required={true}
          onChange={inputName} minRows={1} value={name} type={"text"}
        />
        <TextInput
          fullwidth={true} label={"Product Description "} multiline={true} required={true}
          onChange={inputDescription} minRows={5} value={description} type={"text"}
        />
        <SelectBox
          label={"Category"} required={true} options={categories} select={setCategory} value={category}
        />
        <SelectBox
          label={"Gender"} required={true} options={genders} select={setGender} value={gender}
        />
        <TextInput
          fullwidth={true} label={"Price"} multiline={false} required={true}
          onChange={inputPrice} minRows={1} value={price} type={"number"}
        />
        <div className="module-spacer--medium" />
        <div className="center">
          <PrimaryButton
            label={"Save"}
            onClick={() => dispatch(saveProduct(name, description, category, gender, price, images))}
          />
        </div>
      </div>
    </section>
  )
  
}
export default ProdictEdit