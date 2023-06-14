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
              <input className={styles.checkbox} type="checkbox" id='star4' onChange={(e) => this.props.setFourStars(e.target.checked)}/>
              <label className={styles.label} htmlFor="star4">
                4<FontAwesomeIcon icon={faStar} style={{ color: "#1f1c1c", fontSize: '15px' }} /> & Above
              </label>
            </div>
            <div className={styles.inputs}>
              <input className={styles.checkbox} type="checkbox" id='star3' onChange={(e) => this.props.setThreeStars(e.target.checked)} />
              <label className={styles.label} htmlFor="star3">
                3<FontAwesomeIcon icon={faStar} style={{ color: "#1f1c1c", fontSize: '15px' }} /> & Above
              </label>
            </div>
          </div>}
        </div>

        <hr className={styles.divider} />

        <div className={styles.filter} id={styles.location}>
          <div className={styles.title}>
            Location <FontAwesomeIcon onClick={this.toggleLocation} icon={faChevronDown} className={styles.arrow} />
          </div>
          {this.state.showDropDownLocation && <div className={styles.options}>
            <div className={styles.inputs}>
              <input className={styles.checkbox} type="checkbox" id='kolkata' />
              <label className={styles.label} htmlFor="kolkata">
                Kolkata
              </label>
            </div>
          </div>}
        </div>
      </div>
    )
  }
}

export default Sidebar