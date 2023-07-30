import styles from '../styles/Sidebar.module.css';
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';

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
            Category <MdKeyboardArrowDown style={{ fontSize: '20' }} onClick={this.toggle} className={styles.arrow} />
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
          <span className={styles.rate}>Rs. {this.props.rateSort} / Day</span>
          <input type='range' min='0' max='50000' step='100' className={styles.slider}
            onChange={(e) => {
              this.props.setRateSort(e.target.value);
            }}
            value={this.props.rateSort}
          />
        </div>

        <hr className={styles.divider} />

        <div className={styles.filter} id={styles.rating}>
          <div className={styles.title}>
            Customer Rating <MdKeyboardArrowDown style={{ fontSize: '20' }} onClick={this.toggleRating} className={styles.arrow} />
          </div>
          {this.state.showDropDownRating && <div className={styles.options}>
            <div className={styles.inputs}>
              <input className={styles.checkbox} type="checkbox" id='star4' onChange={(e) => this.props.setFourStars(e.target.checked)} />
              <label id={styles.labelid} className={styles.label} htmlFor="star4">
                4&nbsp;<BsStarFill className={styles.star} style={{ color: "#1f1c1c", fontSize: '18px' }} /> &nbsp; <span>& Above</span>
              </label>
            </div>
            <div className={styles.inputs}>
              <input className={styles.checkbox} type="checkbox" id='star3' onChange={(e) => this.props.setThreeStars(e.target.checked)} />
              <label id={styles.labelid} className={styles.label} htmlFor="star3">
                3&nbsp;<BsStarFill className={styles.star} style={{ color: "#1f1c1c", fontSize: '18px' }} /> &nbsp; <span>& Above</span>
              </label>
            </div>
          </div>}
        </div>

        <hr className={styles.divider} />

        <div className={styles.filter} id={styles.location}>
          <div className={styles.title}>
            Location <MdKeyboardArrowDown style={{ fontSize: '20' }} onClick={this.toggleLocation} className={styles.arrow} />
          </div>
          {this.state.showDropDownLocation && (
            <div id={styles.optionx}>
              <select id="locations" value={this.state.cityname} className={styles.select} onChange={() => this.changeCity(document.getElementById('locations').value)}>
                  <option disabled value="city" id={styles.selected}>{this.state.cityname}</option>
                  <option value="Agra">Agra</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Bhubaneswar">Bhubaneswar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Dehradun">Dehradun</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Dhanbad">Dhanbad</option>
                  <option value="Faridabad">Faridabad</option>
                  <option value="Ghaziabad">Ghaziabad</option>
                  <option value="Guwahati">Guwahati</option>
                  <option value="Gwalior">Gwalior</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Indore">Indore</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Jamshedpur">Jamshedpur</option>
                  <option value="Jodhpur">Jodhpur</option>
                  <option value="Kanpur">Kanpur</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Ludhiana">Ludhiana</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Mangaluru">Mangaluru</option>
                  <option value="Meerut">Meerut</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Mysuru">Mysuru</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Nashik">Nashik</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Navi Mumbai">Navi Mumbai</option>
                  <option value="Patna">Patna</option>
                  <option value="Prayagraj">Prayagraj</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Pune">Pune</option>
                  <option value="Raipur">Raipur</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Surat">Surat</option>
                  <option value="Thane">Thane</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Udaipur">Udaipur</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Warangal">Warangal</option>
                </select>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Sidebar