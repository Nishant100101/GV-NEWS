import NewsContainer from "./container";
import InfiniteScroll from "react-infinite-scroll-component";

function Main(props) {
  return (
    <InfiniteScroll
      style={{ overflow: "hidden" }}
      dataLength={props.newslist.length}
      next={props.getnews}
      hasMore={props.newslist.length !== props.totalpage}
      loader={
        props.currentpages + 1 > props.totalpage ? (
          <h1 className="text-center text-3xl">End of News..</h1>
        ) : (
          <div className="border-gray-300 m-auto h-10 w-10 my-5 animate-spin rounded-full border-8 border-t-blue-600" />
        )
      }
    >
      {/* NEWS CONTAINER */}
      <div className="flex bg-white p-4 justify-evenly flex-wrap ">
        {props.newslist.map((items) => {
          return (
            <NewsContainer
              Url={items.urlToImage}
              Heading={items.title.slice(0, 20)}
              Description={items.description.slice(0, 80)}
              link={items.url}
              author={items.author}
              key={items.urlToImage}
            />
          );
        })}
      </div>
    </InfiniteScroll>
  );
}
export default Main;
