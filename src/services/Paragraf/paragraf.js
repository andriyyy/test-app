import items from "./paragraf_mock";
class Paragraf {
  items = () => {
    return new Promise((resolve, reject) => {
      resolve(items);
    });
  };
}

export default Paragraf;
