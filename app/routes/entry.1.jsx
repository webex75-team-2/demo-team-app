import { useEffect, useState } from "react";

export default function Entry1() {
  const [yesnoData, setYesnoData] = useState({ answer: "", image: "" });
  useEffect(() => {
    fetch("https://yesno.wtf/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setYesnoData({ answer: data.answer, image: data.image });
      });
  }, []);
  return (
    <>
      <h1>エントリー1</h1>
      <div>しゅん担当</div>
      <h3>Yes or No</h3>
      <img alt="読み込み中" src={yesnoData.image} id="yesno_img"></img>
      <h2>{yesnoData.answer}</h2>
    </>
  );
}
