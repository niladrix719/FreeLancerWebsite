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
    localStorage.setItem('city', city);
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
              <select id="locations" className={styles.select} onChange={() => this.changeCity(document.getElementById('locations').value)}>
                <option value="city">{this.state.cityname}</option>
                <option value="new-delhi">New Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="jaipur">Jaipur</option>
                <option value="pune">Pune</option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="agra">Agra</option>
                <option value="surat">Surat</option>
                <option value="visakhapatnam">Visakhapatnam</option>
                <option value="lucknow">Lucknow</option>
                <option value="indore">Indore</option>
                <option value="varanasi">Varanasi</option>
                <option value="bhopal">Bhopal</option>
                <option value="nagpur">Nagpur</option>
                <option value="amritsar">Amritsar</option>
                <option value="kochi">Kochi</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="vadodara">Vadodara</option>
                <option value="mangaluru">Mangaluru</option>
                <option value="kanpur">Kanpur</option>
                <option value="nashik">Nashik</option>
                <option value="madurai">Madurai</option>
                <option value="patna">Patna</option>
                <option value="mysuru">Mysuru</option>
                <option value="jodhpur">Jodhpur</option>
                <option value="meerut">Meerut</option>
                <option value="udaipur">Udaipur</option>
                <option value="coimbatore">Coimbatore</option>
                <option value="bhubaneswar">Bhubaneswar</option>
                <option value="prayagraj">Prayagraj</option>
                <option value="dehradun">Dehradun</option>
                <option value="faridabad">Faridabad</option>
                <option value="warangal">Warangal</option>
                <option value="navi-mumbai">Navi Mumbai</option>
                <option value="ludhiana">Ludhiana</option>
                <option value="aurangabad">Aurangabad</option>
                <option value="guwahati">Guwahati</option>
                <option value="vijayawada">Vijayawada</option>
                <option value="rajkot">Rajkot</option>
                <option value="thiruvananthapuram">Thiruvananthapuram</option>
                <option value="puducherry">Puducherry</option>
                <option value="jamshedpur">Jamshedpur</option>
                <option value="ghaziabad">Ghaziabad</option>
                <option value="raipur">Raipur</option>
                <option value="thane">Thane</option>
                <option value="ranchi">Ranchi</option>
                <option value="gwalior">Gwalior</option>
                <option value="dhanbad">Dhanbad</option>
              </select>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Sidebar