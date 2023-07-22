import styles from '../styles/Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: true,
      showDropDownRating: true,
      showDropDownLocation: true,
      cityname: 'New Delhi',
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      showDropDown: !prevState.showDropDown,
    }));
  };

  componentDidMount() {
    const city = localStorage.getItem('city');
    if (city) this.setState({ cityname: city });
  }

  toggleRating = () => {
    this.setState((prevState) => ({
      showDropDownRating: !prevState.showDropDownRating,
    }));
  };

  toggleLocation = () => {
    this.setState((prevState) => ({
      showDropDownLocation: !prevState.showDropDownLocation,
    }));
  };

  changeCity = (city) => {
    this.setState({ cityname: city });
    this.props.setFilterCity(city);
  };

  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.filter} id={styles.category}>
          <div className={styles.title}>
            Category <FontAwesomeIcon onClick={this.toggle} icon={faChevronDown} className={styles.arrow} />
          </div>
          {this.state.showDropDown && <div className={styles.options}>
            <div className={styles.inputs}>
              <input className={styles.checkbox} type="checkbox" onChange={(e) => {
                this.props.setShowPhotographers(e.target.checked);
              }} checked={this.props.showPhotographers} />
              <label className={styles.label} htmlFor="photographer">Photographer</label>
            </div>
            <div className={styles.inputs}>
              <input className={styles.checkbox} type="checkbox" onChange={(e) => {
                this.props.setShowCinematographers(e.target.checked);
              }} checked={this.props.showCinematographers} />
              <label className={styles.label} htmlFor="cinematographer">Cinematographer</label>
            </div>
            <div className={styles.inputs}>
              <input className={styles.checkbox} type="checkbox" onChange={(e) => {
                this.props.setShowDroneOperators(e.target.checked);
              }} checked={this.props.showDroneOperators} />
              <label className={styles.label} htmlFor="drone_operator">Drone Operator</label>
            </div>
          </div>}
        </div>

        <hr className={styles.divider} />

        <div className={styles.filter} id={styles.price}>
          <div className={styles.title}>
            Price
          </div>
          <span className={styles.rate}>Rs. {this.props.rateSort}</span>
          <input type='range' min='1000' max='50000' step='100' className={styles.slider}
            onChange={(e) => {
              this.props.setRateSort(e.target.value);
            }}
            value={this.props.rateSort}
          />
        </div>

        <hr className={styles.divider} />

        <div className={styles.filter} id={styles.rating}>
          <div className={styles.title}>
            Customer Rating <FontAwesomeIcon onClick={this.toggleRating} icon={faChevronDown} className={styles.arrow} />
          </div>
          {this.state.showDropDownRating && <div className={styles.options}>
            <div className={styles.inputs}>
              <input className={styles.checkbox} type="checkbox" id='star4' onChange={(e) => this.props.setFourStars(e.target.checked)} />
              <label className={styles.label} htmlFor="star4">
                4<FontAwesomeIcon icon={faStar} className={styles.star} style={{ color: "#1f1c1c", fontSize: '12px' }} /> & Above
              </label>
            </div>
            <div className={styles.inputs}>
              <input className={styles.checkbox} type="checkbox" id='star3' onChange={(e) => this.props.setThreeStars(e.target.checked)} />
              <label className={styles.label} htmlFor="star3">
                3<FontAwesomeIcon icon={faStar} className={styles.star} style={{ color: "#1f1c1c", fontSize: '12px' }} /> & Above
              </label>
            </div>
          </div>}
        </div>

        <hr className={styles.divider} />

        <div className={styles.filter} id={styles.location}>
          <div className={styles.title}>
            Location <FontAwesomeIcon onClick={this.toggleLocation} icon={faChevronDown} className={styles.arrow} />
          </div>
          {this.state.showDropDownLocation && (
            <div id={styles.optionx}>
              <select id="locations" value={this.state.cityname} className={styles.select} onChange={() => this.changeCity(document.getElementById('locations').value)}>
                <option disabled value="city" id={styles.selected}>{this.state.cityname}</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Agra">Agra</option>
                <option value="Surat">Surat</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Indore">Indore</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Kochi">Kochi</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Mangaluru">Mangaluru</option>
                <option value="Kanpur">Kanpur</option>
                <option value="Nashik">Nashik</option>
                <option value="Madurai">Madurai</option>
                <option value="Patna">Patna</option>
                <option value="Mysuru">Mysuru</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Meerut">Meerut</option>
                <option value="Udaipur">Udaipur</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Bhubaneswar">Bhubaneswar</option>
                <option value="Prayagraj">Prayagraj</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Warangal">Warangal</option>
                <option value="Navi Mumbai">Navi Mumbai</option>
                <option value="Ludhiana">Ludhiana</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Guwahati">Guwahati</option>
                <option value="Vijayawada">Vijayawada</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Jamshedpur">Jamshedpur</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Raipur">Raipur</option>
                <option value="Thane">Thane</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Gwalior">Gwalior</option>
                <option value="Dhanbad">Dhanbad</option>
              </select>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Sidebar