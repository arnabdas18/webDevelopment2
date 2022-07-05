import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {images: []};
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(entry) {
        const res = await axios.get(`https://pixabay.com/api/?key=27025125-50d7f014aaa902b1bf87cd274&q=${entry}&image_type=photo`);
        // console.log(res.data.hits)

        this.setState({images: res.data.hits});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;