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
                            <input className={styles.checkbox} type="checkbox" />
                            <label htmlFor="photographer">Photographer</label>
                        </div>
                        <div className={styles.inputs}>
                            <input className={styles.checkbox} type="checkbox"/>
                            <label htmlFor="cinematographer">Cinematographer</label>
                        </div>
                        <div className={styles.inputs}>
                            <input className={styles.checkbox} type="checkbox"/>
                            <label htmlFor="drone_operator">Drone Operator</label>
                        </div>
                    </div>}
                </div>

                <hr className={styles.divider} />

                <div className={styles.filter} id={styles.price}>
                    <div className={styles.title}>
                        Price
                    </div>
                    <input type='range' min='0' max='100' step='5' className={styles.slider} />
                </div>

                <hr className={styles.divider} />

                <div className={styles.filter} id={styles.rating}>
                    <div className={styles.title}>
                        Customer Rating <FontAwesomeIcon onClick={this.toggleRating} icon={faChevronDown} className={styles.arrow} />
                    </div>
                    {this.state.showDropDownRating && <div className={styles.options}>
                        <div className={styles.inputs}>
                            <input className={styles.checkbox} type="checkbox" id='star4'/>
                            <label htmlFor="star4">
                                4<FontAwesomeIcon icon={faStar} style={{color: "#1f1c1c", fontSize: '15px'}} /> & Above
                            </label>
                        </div>
                        <div className={styles.inputs}>
                            <input className={styles.checkbox} type="checkbox" id='star3' />
                            <label htmlFor="star3">
                                3<FontAwesomeIcon icon={faStar} style={{color: "#1f1c1c", fontSize: '15px'}} /> & Above
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
                            <input className={styles.checkbox} type="checkbox" id='kolkata'/>
                            <label htmlFor="kolkata">
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