export default function EditForm({
    formData,
    handleOnSubmit,
    handleOnChange,
}) {
    return (
        <div className="edit-form">
      <h2>Edit Form</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="productName"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleOnChange}
        />
        <br />

        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleOnChange}
        />
        <br />

        <input
          type="text"
          id="image"
          name="image"
          placeholder="Image Link"
          value={formData.image}
          onChange={handleOnChange}
        />
        <br />

        <input
          type="text"
          id="price"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleOnChange}
        />
        <br />
        <button type="submit">Edit</button>
      </form>
      {postResponse && <p>{postResponse}</p>}
    </div>
    );
}