import React from "react";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";

import covid19img from "./images/covid19img.png";

class App extends React.Component {
  state = {
    data: { data: {} },
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    console.log(data, country);
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid19img} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data.data} country={country} />
      </div>
    );
  }
}

export default App;
