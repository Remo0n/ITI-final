import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../services/firebaseConfig";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import userAvatar from "../../assets/avatar.png";
import "./Profile.css";

const Profile = () => {
  const [pet, setPet] = useState({
    name: "",
    petType: "Cat",
    age: "",
    color: "white",
    sex: "Male",
    Vaccines: "",
    status: "",
    sensitive: "",
    skills: "",
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

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await uploadImage(file);
      setPet((prevPet) => ({
        ...prevPet,
        image: imageUrl,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };
  const petTypes = [
    "Dog",
    "Cat",
    "Bird",
    "Hamster",
    "Fish",
    "Rabbit",
    "Guinea Pig",
    "Turtle",
    "Snake",
    "Lizard",
    "Ferret",
    "Hedgehog",
    "Chinchilla",
    "Gerbil",
    "Spider",
    "Hermit Crab",
    "Tarantula",
    "Mouse",
    "Rat",
    "Parrot",
  ];
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
          petType: "",
          age: "",
          color: "white",
          sex: "Male",
          Vaccines: "",
          status: "",
          sensitive: "",
          skills: "",
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
          <select
            name="petType"
            value={pet.petType}
            onChange={handleInputChange}
          >
            {petTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="age"
            placeholder="Age per month"
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
            type="text"
            name="sensitive"
            placeholder="sensitive"
            value={pet.sensitive}
            maxLength={100}
            onChange={handleInputChange}
          ></textarea>
          <textarea
            type="text"
            name="skills"
            placeholder="skills"
            value={pet.skills}
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
            <img src={x.image ? x.image : userAvatar} alt="" />
            <h2>{x.name}</h2>
            <p>{x.petType}</p>
            <p>{x.sex}</p>
            <p>{x.age} month</p>
            <p>{x.color}</p>
            <p>
              <strong>Vaccines:</strong> {x.Vaccines}
            </p>
            <p>
              <strong>sensitive:</strong> {x.sensitive}
            </p>
            <p>
              <strong>Status:</strong> {x.status}
            </p>
            <p>
              <strong>skills:</strong> {x.skills}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
