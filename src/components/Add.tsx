import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  usePostProductMutation,
  useUpdateProductMutation,
} from "../redux/api/crud";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

const Add = () => {
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateId, setUpdateId] = useState(null);

  const [postProduct, { isLoading: isAdding }] = usePostProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const { data } = useGetProductsQuery();
  console.log(data);

  const handleClick = async () => {
    try {
      await postProduct({ name });
      setName("");
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
    }
  };

  const handleUpdateClick = async () => {
    try {
      await updateProduct({ id: updateId, name: updateName });
      setUpdateId(null);
      setUpdateName("");
    } catch (error) {
      console.error("Ошибка при обновлении продукта:", error);
    }
  };

  const handleEditClick = (id,name) => {
    setUpdateId(id);
    setUpdateName(name);
  };

  return (
    <div id="add">
      <div className="container">
      <div className="add">
        <div className="block">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <button onClick={handleClick} disabled={!name}>
          {isAdding ? "Successfully" : "Add"}
        </button>
        </div>
       <div className="tablo">
       {data?.map((el, index) => (
          <div key={index} className="list">
            {updateId === el._id ? (
              <div className="edit_block">
                <input
                  onChange={(e) => setUpdateName(e.target.value)}
                  value={updateName}
                  type="text"
                />
                <button
                  onClick={handleUpdateClick}
                  disabled={!updateName || isUpdating}
                >
                  
                  {isUpdating ? "Updating..." : "save"}
                </button>
              </div>
            ) : (
              <div className="list">
               <div className="title">
               <h1>{el.name}</h1>
                <div className="icons">
                <button onClick={() => deleteProduct(el._id)}>
                  <AiTwotoneDelete/>
                </button>
                <button onClick={() => handleEditClick(el._id, el.name)}>
                  <BiEditAlt/>
                </button>
                </div>
               </div>
              </div>
            )}
          </div>
        ))}
       </div>
      </div>
      </div>
    </div>
  );
};

export default Add;
