/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Headers from "./components/MainComponents/Headers";
import MainCard from "./components/MainComponents/MainCard";
import Nav from "./components/MainComponents/Nav";
import SuggestionCard from "./components/MainComponents/SuggestionCard";
import SignupBar from "./components/MainComponents/SignupBar";
import Footer from "./components/MainComponents/Footer";

function App() {
  const [mainCardLists, setMainCardLists] = useState([]);
  const [suggestionLists, setMainCardDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://vinayak9669.github.io/mock-api/data.json"
        );

        const result = await response.json();
        console.log(result);
        setMainCardLists(result.list);
        setMainCardDetails(result.suggestions);
      } catch {
        //
      } finally {
        //
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Nav />
      <div className="wrapper">
        <Headers />
        {mainCardLists.map((listdetails, index) => (
          <MainCard key={index} data={listdetails} />
        ))}
        <div className="suggestion__Section">
          <h1>Related deals you might like for</h1>
          <div className="suggestion__Cards">
            {suggestionLists.map((curSugg, index) => (
              <>
                <SuggestionCard key={index} data={curSugg} />
              </>
            ))}
          </div>
        </div>
        <SignupBar />
        <Footer />
      </div>
    </div>
  );
}
export default App;
