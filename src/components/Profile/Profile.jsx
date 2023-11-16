import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../services/firebaseConfig";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Profile.css";

const Profile = () => {
  const [pet, setPet] = useState({
    name: "",
    age: "",
    color: "white",
    sex: "Male",
    Vaccines: "",
    status: "",
    image: null,
    imagePreview: null,
  });
  const [petProfiles, setPetProfiles] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getPetProfiles(user.uid);
  }, [user.uid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPet((prevPet) => ({ ...prevPet, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPet((prevPet) => ({
        ...prevPet,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const colorOptions = [
    "white",
    "black",
    "gray",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (pet.image) {
        const imageUrl = await uploadImage(pet.image);

        setPet((prevPet) => ({
          ...prevPet,
          image: imageUrl,
          imagePreview: null,
        }));

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

        setPet({
          name: "",
          age: "",
          color: "white",
          sex: "Male",
          Vaccines: "",
          status: "",
          image: null,
          imagePreview: null,
        });
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
          {pet.imagePreview ? (
            <img src={pet.imagePreview} alt="Preview" />
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
          <select name="color" value={pet.color} onChange={handleInputChange}>
            {colorOptions.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
          <select name="sex" value={pet.sex} onChange={handleInputChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <textarea
            type="text"
            name="Vaccines"
            placeholder="Vaccines"
            value={pet.Vaccines}
            maxLength={100}
            onChange={handleInputChange}
          ></textarea>
          <textarea
            rows="2"
            cols="50"
            name="status"
            placeholder="status"
            value={pet.status}
            maxLength={100}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit"> Add Pet</button>
      </form>
      <div className="pet-cards">
        {petProfiles.map((x, index) => (
          <div className="pet-cards__box" key={index}>
            <img src={x.image} alt="" />
            <h2>{x.name}</h2>
            <p>{x.sex}</p>
            <p>{x.age} year</p>
            <p>{x.color}</p>
            <p>
              <strong>Vaccines:</strong> {x.Vaccines}
            </p>
            <p>
              <strong>Status:</strong> {x.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
