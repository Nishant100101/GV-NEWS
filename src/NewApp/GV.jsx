/* eslint-disable react-hooks/exhaustive-deps */
import Main from "./main";
import Skeleton from "./Skeleton";
import {
  general,
  entertainment,
  politics,
  business,
  technology,
  science,
} from "./fakeData";
import { useState, useEffect, useMemo, useCallback } from "react";

export default function GV(props) {
  useEffect(() => {
    document.title = `${
      props.values.charAt(0).toUpperCase() + props.values.slice(1)
    }-GV NEWS`;
  }, [props.values]);

  const [currentpages, setcurrentpage] = useState(1);
  const [totalpage, settotalpage] = useState(0);
  const [loading, setloading] = useState(true);
  const [newslist, setnews] = useState([]);

  const url = useMemo(
    () =>
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.values}&apiKey=${props.api}&pageSize=10&page=${currentpages}`,
    [props.values, props.api, currentpages]
  );

  const getNews = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const filterArticle = data.articles.filter(
        (article) =>
          article.description &&
          article.title &&
          article.author &&
          article.author.length <= 25
      );
      setloading(false);
      setcurrentpage(currentpages + 1);
      setnews([...newslist, ...filterArticle]);
      settotalpage(Math.ceil(data.totalResults / 10));
    } catch (err) {
      const shuffleArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      };

      let fakeData = [];

      switch (props.values) {
        case "general":
          fakeData = general;
          break;
        case "entertainment":
          fakeData = entertainment;
          break;
        case "politics":
          fakeData = politics;
          break;
        case "business":
          fakeData = business;
          break;
        case "technology":
          fakeData = technology;
          break;
        case "science":
          fakeData = science;
          break;
        default:
          fakeData = general;
          break;
      }

      const news = shuffleArray(fakeData);
      setnews(news);
      setloading(false);
      setcurrentpage(currentpages + 1);
      settotalpage(Math.ceil(fakeData.length / 10));
      console.log(err.message);
    }
  }, [url]);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <Main
          newslist={newslist}
          loading={loading}
          getnews={getNews}
          totalpage={totalpage}
          currentpages={currentpages}
        />
      )}
    </>
  );
}
