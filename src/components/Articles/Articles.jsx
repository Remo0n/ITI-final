import { useState, useEffect } from "react";
import "./Articles.css";
import SingleArticle from "./SingleArticle";
import { Link, useLocation } from "react-router-dom";

const Articles = () => {
  const Data = {
    Dogs: [
      {
        id: 1,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d1.jpg",
        infoTitle: "Dogs are the most popular pet on the planet!",
        infoDesc:
          "A third of ALL households around the world have a dog. These playful, friendly, loyal animals make great companions, but they can also be fierce and tough protectors, or intelligent helpers.",
      },
      {
        id: 2,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d2.jpg",
        infoTitle: "They evolved from a now-extinct species of wolf",
        infoDesc:
          "Dogs were the first animal domesticated (tamed) by humans, over 20,000 years ago! As they evolved from wolves, their skulls, teeth and paws shrank, and they became more docile and obedient.",
      },
      {
        id: 3,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d3.jpg",
        infoTitle: "They can learn over 100 words and gestures!",
        infoDesc:
          "Dogs are thought to be as smart as two-year-old children (and much easier to train!), so many owners teach them commands and tricks.",
      },
      {
        id: 4,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d4.jpg",
        infoTitle: "Dog noses are at least 40x more sensitive than ours!",
        infoDesc:
          "These clever canines have an incredible sense of smell – allowing them to follow scent trails days after they were left. Amazingly, bloodhounds‘ sense of smell is so spot on that it can be used as evidence in court!",
      },
      {
        id: 5,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d5.jpg",
        infoTitle: "Many work as assistance dogs, helping humans!",
        infoDesc:
          "Many dogs are trained to work as guide dogs, helping blind people get around safely. Others are assistance dogs, who keep their owners calm and safe, while some brave hounds are search and rescue dogs, who help human rescuers save people from danger.",
      },
      {
        id: 6,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d6.jpg",
        infoTitle:
          "They only sweat from their paws, and have to cool down by panting.",
        infoDesc:
          "The sweat is much oilier than humans’, and it contains lots of chemicals that only other dogs can detect. Weirdly, it also makes many dog paws smell of cheesy crisps!",
      },
      {
        id: 7,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d7.jpg",
        infoTitle: "They can be right or left-pawed!",
        infoDesc:
          "Like humans, most dogs have a dominant hand – or in their case, paw! To figure out which one it is, you can conduct a simple science experiment.Watch a dog moving from standing still to walking forwards. Do they start walking with their left leg, or their right? Watch several times, noting down the starting leg each time, and see if there’s a pattern. Many dogs will often lead with the same leg – their dominant one!",
      },
      {
        id: 8,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d8.jpg",
        infoTitle: "The Ancient Egyptians saw dogs as god-like!",
        infoDesc:
          "Ancient breeds like the Saluki lived in the lavish palaces of Egyptian royalty! The pampered pooches had their own servants, were decked out in jewelled collars, and ate only the finest meats.",
      },
      {
        id: 9,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d9.jpg",
        infoTitle: "Dogs use body language to express their feelings.",
        infoDesc:
          "Next time you see a dog interacting with a person or other dog, pay close attention. Are they shrinking themselves down small, or standing up big and tall? What do you think they’re trying to say?",
      },
      {
        id: 10,
        petCategory: "dogs",
        articleFig: "src/Assets/dogs/d10.jpeg",
        infoTitle: "Owning a dog is a BIG responsibility!",
        infoDesc:
          "ust like humans, dogs have feelings and needs, and they have to be taken care of properly. They need regular walking, healthy food, a clean, cosy place to sleep and lots and lots of love and affection! Make sure you and your family think carefully before you get a dog (or any pet!) to make sure you have the time and means to take one on.",
      },
    ],
    Cats: [
      {
        id: 1,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c1.jpg",
        infoTitle: "Cats can jump up to 6 times their height.",
        infoDesc:
          "That’s right!Cats are really good jumpers and can jump really high.You can often see them on the top of a garden fence or on a really high wall!They have very strong muscles in their legs which catapults them into the air ",
      },
      {
        id: 2,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c2.jpg",
        infoTitle: "They have a total of 18 toes.",
        infoDesc:
          "That’s a lot of toes!Cats have 5 toes on each of their front paws.They then have four toes on their back paws.",
      },
      {
        id: 3,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c3.jpg",
        infoTitle: "There are over 500 million pet cats!",
        infoDesc:
          "There are lots of cats across the world as they are one of the most popular pets to have.According to PDSA, in the UK, 51% of adults own a cat!",
      },
      {
        id: 4,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c4.jpg",
        infoTitle:
          "Cats sleep for around 13 to 16 hours a day (70% of their life).",
        infoDesc:
          "Have you ever noticed that cats are always sleeping?They do this to save their energy.In the wild they would be saving their energy to go and hunt for their food.House cats obviously don’t need to do this but it just comes naturally to them.",
      },
      {
        id: 5,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c5.jpg",
        infoTitle: "1 year of a cats life equals to 15 years of a humans live.",
        infoDesc:
          "Cats age much faster than humans and live for a shorter amount of time.This means that when a cat is 1 year old, that actually equals to 15 human years!",
      },
      {
        id: 6,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c6.jpg",
        infoTitle: "One of the largest domestic cat breeds is a Maine Coon.",
        infoDesc:
          "The Maine Coon is one of the largest domestic cat breeds there is.In fact, the Guinness World Records gave Barivel, a Maine Coon, the award for being the longest domestic cat ever!Barivel is 120cm long and lives in Italy.",
      },
      {
        id: 7,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c7.jpg",
        infoTitle: "The smallest cat breed is a Singapura",
        infoDesc:
          "The smallest cat breed is the Singapura.It originates from Singapore.They are around half the size of a normal house cat.",
      },
      {
        id: 8,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c8.jpg",
        infoTitle: "Purring means a cat is content.",
        infoDesc:
          "Most of the time a cat will purr when it is happy and content.This is mostly when it is getting a nice stroke from it’s owner.They use their purr as a way of communication.",
      },
      {
        id: 9,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c9.jpg",
        infoTitle: "A cat can run up to 30mph.",
        infoDesc:
          "Cats are very speedy.They can run up to 30mph.That’s about as fast as a car will travel on a typical road!",
      },
      {
        id: 10,
        petCategory: "cats",
        articleFig: "src/Assets/cats/c10.jpg",
        infoTitle: " The oldest cat was 38 years old.",
        infoDesc:
          "The oldest recorded living cat lived up to 38 years old.He was called Creme Puff!Most domestic cats live for around 16 – 17 years.",
      },
    ],
    Birds: [
      {
        id: 1,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b1.jpeg",
        infoTitle: "There are 10,000 species of bird.",
        infoDesc:
          "There are around 10,000 different species of bird.They range from big to small, and are lots of different colours!How many different birds can you spot?",
      },
      {
        id: 2,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b2.jpg",
        infoTitle: " All birds lay eggs.",

        infoDesc:
          "All female birds lay eggs.Their baby birds then hatch out of the shells when they are ready.If you look up into the trees, you might be able to see a nest.Birds make these so that they have a safe and warm place to keep their eggs.",
      },
      {
        id: 3,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b3.jpg",
        infoTitle: "Birds migrate to other countries.",
        infoDesc:
          "A lot of birds migrate which means, depending on the season, they fly elsewhere.This is often to do with the weather of different countries or places.If their food is running low, they need to find it somewhere else to live!Around 4,000 birds migrate.",
      },
      {
        id: 4,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b4.jpg",
        infoTitle: "All birds have feathers!",
        infoDesc:
          "All birds have feathers and they are very useful for lots of different reasons.Feathers help birds to fly. They help to control the wind when flying through the air.They also keep birds warm in the winter!Did you know that birds also use their feathers to show off?A peacock does exactly this! A peacock will show all of his feathers to attract a mate.",
      },
      {
        id: 5,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b5.jpg",
        infoTitle: "Birds don’t have teeth.",
        infoDesc:
          "Birds don’t have teeth which means they have to swallow food whole. They have an organ called a gizzard which grinds up their food.This then helps them to digest it properly. ",
      },
      {
        id: 6,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b6.jpg",
        infoTitle: "Birds are great communicators.",
        infoDesc:
          "Birds chirp and sing.They do this for lots of different reasons.One of the reasons is to attract a mate.Another reason is to warn other birds of danger.They also do it to scare off predators!",
      },
      {
        id: 7,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b7.jpg",
        infoTitle: "A group of birds is called a flock.",
        infoDesc:
          "A flock of birds is a large group of birds from the same species.They stay very close together.It is believed they do this as they are safer from predators when they are in a group. When they are in a flock they are usually travelling together or looking for food.",
      },
      {
        id: 8,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b8.jpg",
        infoTitle: "Some birds can mimic humans!",
        infoDesc:
          "You might already know that parrots can mimic what we say.Crows and ravens can also do it… although wild ones haven’t had much practice.",
      },
      {
        id: 9,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b9.jpg",
        infoTitle: " Ostriches have the largest eyes in any mammal on land.",
        infoDesc:
          "As well as their large eyes… they also lay the largest eggs…AND they are the largest bird!",
      },
      {
        id: 10,
        petCategory: "birds",
        articleFig: "src/Assets/birds/b10.jpg",
        infoTitle: "10. The smallest bird is a Bee Hummingbird.",
        infoDesc:
          "The Bee Hummingbird is the smallest bird on the planet.It can grow from 5 to 6.1 centimetres.Have a look on your ruler to see how small that is!",
      },
    ],
  };
  const [articlesData, setArticlesData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [checkedValue, setCheckedValue] = useState("Dogs");

  let locationUrl = useLocation();
  console.log(locationUrl.pathname);

  const rendringData = () => {
    if (
      locationUrl.pathname === "/home" ||
      (locationUrl.pathname === "/" && checkedValue)
    ) {
      console.log("have value", checkedValue);
      setFilteredData(Data[checkedValue]?.slice(0, 4));
    } else {
      console.log("value is empty or another path");
      setFilteredData(Data[checkedValue]);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    // setFilteredData(Data[checkedValue].slice(0, 4));
    rendringData();
  }, [checkedValue]);

  return (
    <section className="articles pb-5 bg-warning-subtle ">
      {locationUrl.pathname === "/articles" ? (
        <div className="articles_title position-relative col-12 mb-5">
          <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
            Articles
          </h2>
        </div>
      ) : (
        <div className="py-5">
          <h2 className="text-dark text-center fw-bold">Articles</h2>
        </div>
      )}

      <div className="container">
        <div className="categories text-center">
          <div
            className="btn-group mb-5"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check "
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              value="Dogs"
              onChange={(e) => setCheckedValue(e.target.value)}
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
              value="Cats"
              onChange={(e) => {
                setCheckedValue(e.target.value);
              }}
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
              value="Birds"
              onChange={(e) => setCheckedValue(e.target.value)}
            />
            <label
              className="btn rounded btn-outline-primary ms-5"
              htmlFor="btnradio3"
            >
              Birds
            </label>
          </div>
        </div>
        <div className="articles mb-lg-5  ">
          <div className="row">
            {filteredData?.map((art) => (
              <SingleArticle key={art.id} articleData={art} />
            ))}
          </div>
        </div>
        {locationUrl.pathname === "/articles" ? (
          ""
        ) : (
          <div className="d-flex justify-content-center">
            <Link className="btn btn-outline-primary " to="/articles">
              Show More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
