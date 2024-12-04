import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function EditProduct() {
  const userData = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: "juices",
    outstanding: false,
    slug: "",
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    const {
      name,
      description,
      price,
      stock,
      category,
      outstanding,
      slug,
      ingredients,
    } = data;

    console.log(data);

    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/products/edit/${params.productoId}`,
      data: {
        name,
        description,
        price,
        stock,
        category,
        outstanding,
        slug,
        ingredients: ingredients.toString(),
        image,
      },
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return navigate("/productos");
  };

  useEffect(() => {
    async function getProduct(data) {
      const response = await axios({
        method: "GET",
        url: ` ${import.meta.env.VITE_API_URL}/products/show/${
          params.productoId
        }`,
        headers: { Authorization: `Bearer ${userData.token}` },
      });
      const { name, description, price, stock, category, outstanding, slug } =
        response.data;

      setValue("name", name);
      setValue("description", description);
      setValue("price", price);
      setValue("stock", stock);
      setValue("category", category);
      setValue("outstanding", outstanding);
      setValue("slug", slug);
    }
    getProduct();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-5 ">
        <div className=" border shadow rounded p-5">
          <h1>Editar producto</h1>
          <form
            encType="multipart/form-data"
            action=""
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="name">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              // defaultValue={formData.name}
              {...register("name")}
            />
            <label htmlFor="name" className="mt-2">
              Descripción
            </label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              // defaultValue={formData.description}
              {...register("description")}
            ></textarea>
            <label htmlFor="image" className="mt-3">
              Imagen
            </label>
            <input
              className="form-control"
              type="file"
              onChange={(event) => setImage(event.target.files[0])}
            />
            <label htmlFor="price" className="mt-3">
              Precio
            </label>
            <input
              className="form-control"
              type="number"
              name="price"
              id="price"
              defaultValue={formData.price}
              {...register("price")}
            />
            <label htmlFor="stock" className="mt-2">
              Existencias
            </label>
            <input
              className="form-control"
              type="number"
              name="stock"
              id="stock"
              defaultValue={formData.stock}
              {...register("stock")}
            />
            <label htmlFor="category" className="mt-2">
              Categoria
            </label>
            <select
              className="form-control"
              name="category"
              id="category"
              {...register("category")}
            >
              <option value="bars">Barras</option>
              <option value="juices">Jugos</option>
            </select>
            <label htmlFor="outstanding" className="mt-2">
              Destacado
            </label>
            <select
              className="form-control"
              name="outstanding"
              id="outstanding"
              {...register("outstanding")}
            >
              <option value="true">Verdadero</option>
              <option value="false">Falso</option>
            </select>
            <label htmlFor="slug" className="mt-2">
              Slug
            </label>
            <input
              className="form-control"
              type="text"
              name="slug"
              id="slug"
              defaultValue={formData.slug}
              {...register("slug")}
            />
            <p className="mt-2">Ingredientes</p>
            <div className="form-check mt-1">
              <input
                type="checkbox"
                className="form-check-input"
                id="tomato"
                name="tomato"
                value="tomate"
                {...register("ingredients")}
              />
              <label htmlFor="tomato" className="form-check-label">
                Tomate
              </label>{" "}
            </div>
            <div className="form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id=""
                name="carrot"
                value="zanahoria"
                {...register("ingredients")}
              />
              <label className="form-check-label" htmlFor="carrot">
                Zanahoria
              </label>
            </div>
            <div className="form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="apple"
                name="apple"
                value="manzana"
                {...register("ingredients")}
              />
              <label className="form-check-label" htmlFor="apple">
                Manzana
              </label>
            </div>
            <div className="form-check mt-2">
              <input
                type="checkbox"
                id="orange"
                name="orange"
                value="naranja"
                className="form-check-input"
                {...register("ingredients")}
              />
              <label className="form-check-label" htmlFor="orange">
                Naranja
              </label>{" "}
            </div>
            <button className="mt-4 w-100 btn btn-success">
              Guardar cambios
            </button>
          </form>
          <Link to="/productos" className="mt-4 btn border">
            <i className="bi bi-arrow-left fs-5"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
