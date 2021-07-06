import React from "react";
import Searchbar from "./searchbar";
import Imagelist from "./Imagelist";
import axios from "axios";

class App extends React.Component {
  state = { images: [] };
  onsubmit = async (input) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: input },
      headers: {
        Authorization: "Client-ID 570idwNdOzbSsCtLQBE4FdDOD_5IvVFWXFzX1rBb8sc"
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <Searchbar get={this.onsubmit} />
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}
export default App;
