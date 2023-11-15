import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../services/firebaseConfig";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import "./Profile.css";

export const Profile = () => {
  const [pet, setPet] = useState({
    name: "",
    age: 0,
    breed: "",
    color: "",
    description: "",
    image: null,
  });
  const { user } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPet((prevPet) => ({
      ...prevPet,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "users", user.uid), {
        petProfile: {
          pet,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pet-profile">
      <div className="pet-profile__img-box">
        <label htmlFor="imageUpload">
          {pet.image ? (
            <img src={URL.createObjectURL(pet.image)} alt="Pet" />
          ) : (
            <span>Upload Image</span>
          )}
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="imageUpload"
        />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={pet.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={pet.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={pet.breed}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={pet.color}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={pet.description}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
