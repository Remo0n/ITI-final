import "./Articles.css";
import { useState } from "react";

const Articles = () => {
  const dogArticles = [
    {
      id: 1,
      petCategory: "dog",
      infoTitle: "Dogs are the most popular pet on the planet!",
      infoDesc:
        "A third of ALL households around the world have a dog. These playful, friendly, loyal animals make great companions, but they can also be fierce and tough protectors, or intelligent helpers.",
    },
    {
      id: 2,
      petCategory: "dog",
      infoTitle: "They evolved from a now-extinct species of wolf",
      infoDesc:
        "Dogs were the first animal domesticated (tamed) by humans, over 20,000 years ago! As they evolved from wolves, their skulls, teeth and paws shrank, and they became more docile and obedient.",
    },
    {
      id: 3,
      petCategory: "dog",
      infoTitle: "They can learn over 100 words and gestures!",
      infoDesc:
        "Dogs are thought to be as smart as two-year-old children (and much easier to train!), so many owners teach them commands and tricks.",
    },
    {
      id: 4,
      petCategory: "dog",
      infoTitle: "Dog noses are at least 40x more sensitive than ours!",
      infoDesc:
        "These clever canines have an incredible sense of smell – allowing them to follow scent trails days after they were left. Amazingly, bloodhounds‘ sense of smell is so spot on that it can be used as evidence in court!",
    },
    {
      id: 5,
      petCategory: "dog",
      infoTitle: "Many work as assistance dogs, helping humans!",
      infoDesc:
        "Many dogs are trained to work as guide dogs, helping blind people get around safely. Others are assistance dogs, who keep their owners calm and safe, while some brave hounds are search and rescue dogs, who help human rescuers save people from danger.",
    },
    {
      id: 6,
      petCategory: "dog",
      infoTitle:
        "They only sweat from their paws, and have to cool down by panting.",
      infoDesc:
        "The sweat is much oilier than humans’, and it contains lots of chemicals that only other dogs can detect. Weirdly, it also makes many dog paws smell of cheesy crisps!",
    },
    {
      id: 7,
      petCategory: "dog",
      infoTitle: "They can be right or left-pawed!",
      infoDesc:
        "Like humans, most dogs have a dominant hand – or in their case, paw! To figure out which one it is, you can conduct a simple science experiment.Watch a dog moving from standing still to walking forwards. Do they start walking with their left leg, or their right? Watch several times, noting down the starting leg each time, and see if there’s a pattern. Many dogs will often lead with the same leg – their dominant one!",
    },
    {
      id: 8,
      petCategory: "dog",
      infoTitle: "The Ancient Egyptians saw dogs as god-like!",
      infoDesc: "",
    },
    {
      id: 9,
      petCategory: "dog",
      infoTitle: "",
      infoDesc: "",
    },
    {
      id: 10,
      petCategory: "dog",
      infoTitle: "",
      infoDesc: "",
    },
  ];
  const catArticles = [{ id: 1, petCategory: "cat" }];
  const birdArticles = [{ id: 1, petCategory: "bird" }];

  // const [petArticle,setPetArticle]=useState([])

  return (
    <section className="articles py-5 " id="articles">
      <div className="container">
        <h2 className="text-center mb-5 fs-1 fw-bold">Articles</h2>
        <div className="categories text-center">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check "
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
            />
            <label
              className="btn rounded btn-outline-primary me-5"
              htmlFor="btnradio1"
            >
              Dogs
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label
              className="btn rounded btn-outline-primary mx-5 "
              htmlFor="btnradio2"
            >
              Cats
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
            />
            <label
              className="btn rounded btn-outline-primary ms-5"
              htmlFor="btnradio3"
            >
              Birds
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
