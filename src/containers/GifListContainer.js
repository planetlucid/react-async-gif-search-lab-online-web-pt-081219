import React from "react";

class GifListContainer extends React.Component {
  state = {
    gifs: [],
  };

  render() {
    return <div>
    {this.state.gifs.map
    (person => person.type)
    }
  </div>
  }

  fetchThing() {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=oxXLmTsXGunNDiXYod5d6F5ZeGwBqjF0&rating=g"
    )
      .then((response) => response.json())
      .then((data) => {
          debugger
        this.setState({
          gifs: data.data.map ( gif => gif.images.original.url )
        });
      });
  }

  componentDidMount() {
    this.fetchThing();
  }
}

export default GifListContainer;
