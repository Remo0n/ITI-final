import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import VetCard from "./VetCard";
import "./Vets.css";

const Vets = () => {
  const vetsAreas = [
    "Smouha",
    "KafrAbdou",
    "Sporting",
    "ElIbrahimeya",
    "Ganaklis",
    "Miami",
    "Agami",
    "SabaPasha",
    "Glim",
    "SanStefano",
    "SidiBeshr",
  ];
  const vetsData = {
    Smouha: [
      {
        id: 1,
        name: "Caesar Vet Centre",
        address:
          "332 Berar Bldg.El Horrey Rd ,Sidi Gaber El Mahata,Alexandria.",
        phone: ["01005120107"],
      },

      {
        id: 2,
        name: "Alex Vet Trade",
        address: "63 Tawoneyat Semouha Bldgs,Semouha,Alexandria.",
        phone: ["034250813"],
      },
      {
        id: 3,
        name: "Alex Homa Vet",
        address: "59 Tawoneyat Semouha Bldgs,Semouha,Alexandria.",
        phone: ["034293841", "034250811"],
      },

      {
        id: 4,
        name: "Smouha Vet Clinic",
        address: "28 Rd 314 El Kodah Divison,Semouha,Alexandria.",
        phone: ["01006943168"],
      },
      {
        id: 5,
        name: "Healthy Pets Clinic",
        address: "314St, Off Mostafa Kamel St,Semouha,Alexandria.",
        phone: ["034250345", "01274826262", "01111757685"],
      },
      {
        id: 6,
        name: "Dr.Samer Veterinary Center",
        address:
          "14 Kamal El Din Salah St.Loualoaa Semouha Tower,Semouha,Alexandria.",
        phone: ["01007737701"],
      },
    ],
    Miami: [
      {
        id: 1,
        name: "Alexandria International For Pet Center",
        address: "73 Khalil Hamada St,Miami,Alexandria.",
        phone: ["01154478855", "01020133244"],
      },
      {
        id: 2,
        name: "Alexandria Pet Center",
        address: "14 Maged El Eman Off Iskandar Ibrahim St,Miami,Alexandria.",
        phone: ["035535902", "01020684222", "01270770155"],
      },
      {
        id: 3,
        name: "Amazon Pets Center",
        address: "264 Gamal Abdel Nasser St,Miami,Alexandria.",
        phone: ["01271757544", "01016318483"],
      },
      {
        id: 4,
        name: "El Tawfiq Vet Center",
        address: "13 Mohamed Ibn Taher Off Abu El Arab St,Miami,Alexandria.",
        phone: ["01068289566"],
      },
      {
        id: 5,
        name: "Victoria Vet Clinic For Pets",
        address: "18 El Sebaey St Off Rd 45 Bahary,Miami,Alexandria.",
        phone: ["033564373", "01273149966", "01009428951"],
      },
    ],
    KafrAbdou: [
      {
        id: 1,
        name: "Dr.Vet Clinic",
        address: "Behind 12 Norden St Off Kerdahy St,KafrAbdou,Alexandria.",
        phone: ["035429346", "01204360066", "01009698210"],
      },
      {
        id: 1,
        name: "Pets-Small Animals Medical Center",
        address: "11 Mekka St Off El Resafy St,KafrAbdou,Alexandria.",
        phone: ["035233320", "01113366288"],
      },
    ],
    Ganaklis: [
      {
        id: 1,
        name: "Royal Vet Clinic",
        address: "41 Omar El Mokhtar St.Ganaklis,Alexandria.",
        phone: ["035744415", "01062978075"],
      },
    ],
    Sporting: [
      {
        id: 1,
        name: "Animal Planet Clinic",
        address: "194 Port Said St,Sporting,Alexandria.",
        phone: ["01100022210"],
      },
      {
        id: 2,
        name: "Dr.Nabil Nasry",
        address: "5 Abel Moneim Radwan St,Sporting,Alexandria.",
        phone: ["034262690", "01227391899"],
      },
      {
        id: 3,
        name: "International Vet Clinic",
        address: "10 Rd,Off 121 Abou Qir St,Sporting,Alexandria.",
        phone: ["034200782", "01008053974", "01116439678"],
      },
      {
        id: 4,
        name: "Dr.Mervat Mosleh Sporting Veterinary Clinic",
        address: "279 El Horreya St,Sporting,Alexandria.",
        phone: ["034248630", "01001948148", "01149972886"],
      },
    ],
    ElIbrahimeya: [
      {
        id: 1,
        name: "Alex Pet Center",
        address: "1 Gawad Hosny St,El Ibrahimeya,Alexandria.",
        phone: ["01027416493", "01003114988", "01229269991"],
      },
    ],
    Agami: [
      {
        id: 1,
        name: "Donia Veterinary Clinic",
        address: "Km 26,Alex Matrouh Desert Rd,Agami,Alexandria.",
        phone: ["035084141", "01275582088", "01091355577"],
      },
      {
        id: 2,
        name: "El Yousr Veterinary Clinic",
        address: "473 Alex Matrouh Desert Rd,Agami,Alexandria.",
        phone: ["034355547", "01275582088", "01009530966"],
      },
      {
        id: 3,
        name: "Dr.Ahmed Abdel Qawy",
        address:
          "Km 21,El Safa St Off Alex Matrouh Desert Rd,Agami,Alexandria.",
        phone: ["01282360292"],
      },
      {
        id: 4,
        name: "El Youmn Veterinary Clinic",
        address: "82 Alex Matrouh Desert Rd,Hannoville,Alexandria.",
        phone: ["033021523", "01275582088"],
      },
      {
        id: 5,
        name: "Ragae Veterinary Clinic",
        address: "Hussein Kbadaya St,Off El Bitash St,El Bitash,Alexandria.",
        phone: ["01275582088"],
      },
    ],
    Glim: [
      {
        id: 1,
        name: "Pet's Hub",
        address: "10 Mostafa Maher St,Glim,Alexandria.",
        phone: ["01558820051"],
      },
      {
        id: 2,
        name: "Dr.Faris El Mamlouk",
        address: "14 Ahmed Fathy St Off Abou Qir,Glim,Alexandria.",
        phone: ["01221353769"],
      },
    ],
    SidiBeshr: [
      {
        id: 1,
        name: "Dr.Mohamed Shebl",
        address: "52 Rd 16 Off Gamal Abdel Nasser St,Sidi Beshr,Alexandria.",
        phone: ["01155187783"],
      },
      {
        id: 2,
        name: "Animal Health Care Center",
        address: "48 Mohamed El Serafy St,Sidi Beshr,Alexandria.",
        phone: ["035490424", "01222324552", "01222564740", "01000606526"],
      },
      {
        id: 3,
        name: "Vet Health",
        address:
          "448 El Courniche Rd,Mohamed Naguib Sq,Mariam Tower,Sidi Beshr,Alexandria.",
        phone: ["033594804", "01008877614"],
      },
    ],
    SanStefano: [
      {
        id: 1,
        name: "Vet 4 Pets Clinic",
        address: "3 Talaat Basha St,San Stefano,Alexandria.",
        phone: ["01120083050", "01006063549"],
      },
    ],
    SabaPasha: [
      {
        id: 1,
        name: "Petcare Clinic",
        address: "11 Mokhtar Abdel Halim Khallaf St,Saba Pasha,Alexandria.",
        phone: ["035848127", "01144447592"],
      },
      {
        id: 2,
        name: "El Raml Vet Clinic",
        address:
          "Villa Dr.Maher Fahmy ,Behind 25 Abou Heif St,Saba Pasha,Alexandria.",
        phone: ["035824210", "035824572", "01222746550"],
      },
      {
        id: 3,
        name: "Just 4 Pets",
        address: "59 Abdel Salam Aref St,Saba Pasha,Alexandria.",
        phone: ["035834269", "01208090305"],
      },
    ],
  };

  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setSelected] = useState("");

  const rederingVets = () => {
    setFilteredData(vetsData[selected]);
  };

  useEffect(() => {
    rederingVets();
  }, [selected]);

  return (
    <section className="vets bg-warning-subtle pb-5">
      <div className="vets_title position-relative col-12">
        <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
          Vets
        </h2>
      </div>
      <div className="container">
        <div className="form py-5">
          <Form.Select
            onChange={(e) => {
              setSelected(e.target.value);
            }}
          >
            <option className="option">Select Your Area</option>
            {vetsAreas.sort().map((area, index) => (
              
              <option className="option" key={index} value={area}>
                {area}
              </option>
            ))}
          </Form.Select>
        </div>
        <ul className="vetslist p-0 ">
          {filteredData?.map((element, index) => (
            <li key={index}>
              <VetCard vetCardData={element} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Vets;
