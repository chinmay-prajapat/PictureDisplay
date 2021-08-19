import React from "react";
import unsplash from "../Api/unsplash";
import ImageList from "./ImagesList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const data = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: data.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        {/* Found:{this.state.images.length} images
         */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
