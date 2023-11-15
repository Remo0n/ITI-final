import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../services/firebaseConfig";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Profile.css";

export const Profile = () => {
  const [pet, setPet] = useState({
    name: "",
    age: "",
    color: "",
    status: "",
    image: null,
  });

  const [petProfiles, setPetProfiles] = useState([]);
  console.log(petProfiles);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getPetProfiles(user.uid);
  }, [user.uid]);

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
      // Upload image to Firebase Storage
      if (pet.image) {
        const imageUrl = await uploadImage(pet.image);
        // Set the image URL directly in the pet state
        setPet((prevPet) => ({
          ...prevPet,
          image: imageUrl,
        }));
      }

      const userRef = doc(db, "users", user.uid);

      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        await updateDoc(userRef, {
          petProfiles: arrayUnion(pet),
        });
        setPetProfiles((prevProfiles) => [...prevProfiles, pet]);
      } else {
        await setDoc(userRef, {
          petProfiles: [pet],
        });
        setPetProfiles([pet]);
      }
    } catch (error) {
      console.error("Error handling form submission:", error);
    }
  };

  async function uploadImage(file) {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${file.name}`);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  }

  async function getPetProfiles(userId) {
    const userRef = doc(db, "users", userId);

    try {
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setPetProfiles(userData.petProfiles || []);
      } else {
        console.log("No such user!");
      }
    } catch (error) {
      console.error("Error getting pet profiles: ", error);
    }
  }

  return (
    <div className="pet-profile">
      <div className="pet-profile__img-box">
        <label htmlFor="imageUpload">
          {pet.image ? (
            <img src={pet.image} alt="" />
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
        <div className="form-box">
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
            name="color"
            placeholder="Color"
            value={pet.color}
            onChange={handleInputChange}
          />
          <textarea
            rows="2"
            cols="50"
            name="status"
            placeholder="status"
            value={pet.status}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
