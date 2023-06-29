import styles from '../styles/BoxSection.module.css'
import Image from 'next/image'
import { BsArrowRightCircle } from 'react-icons/bs';
import { BsFillPlusCircleFill } from 'react-icons/bs';

function BoxSection() {
  return (
    <div className={styles.section}>
      <div className={styles.boxes1}>
        <div className={styles.box} id={styles.box1}>
          <div className={styles.left1}>
            <div className={styles.top}>
              <Image className={styles.icon} src="/instagramC.png" width={80} height={80} alt="box1" />
            </div>
            <div className={styles.down}>
              <p className={styles.p1}>Fipezo</p>
              <p className={styles.p2}>And Partners</p>
            </div>
          </div>
          <div className={styles.right1}>
            <p className={styles.p3}>Fipezo Freelance
              <p className={styles.p4}>HUB</p>
              <BsArrowRightCircle className={styles.arrow} />
            </p>
          </div>
        </div>
        <div className={styles.box} id={styles.box2}>
          <div className={styles.left2}>
            <div className={styles.plus}>
              <BsFillPlusCircleFill />
            </div>
            <div>
              <p className={styles.p5}>Register Yourself in Fipezo</p>
            </div>
          </div>
          <div className={styles.right2}>
            <div className={styles.plus}>
              <BsFillPlusCircleFill style={{ color : '#f71a42' }} />
            </div>
            <p className={styles.p5}>Privacy &amp; Policy Guidelines </p>
          </div>
        </div>
        <div className={styles.box} id={styles.box3}>
          <div className={styles.left3}>
            <div className={styles.plus}>
              <BsFillPlusCircleFill style={{ color: '#a012ff' }} />
            </div>
            <p className={styles.p5}>Terms of Service </p>
          </div>
          <div className={styles.right3}>
            <div className={styles.plus}>
              <BsFillPlusCircleFill />
            </div>
            <p className={styles.p5}>Help &amp; Support Center</p>
          </div>
        </div>
        <div className={styles.box} id={styles.box4}>
          <div className={styles.left4}>
            <div className={styles.plus}>
              <BsFillPlusCircleFill />
            </div>
            <p className={styles.p6}>Guides &amp; Reviews</p>
          </div>
          <div className={styles.right4}>
            <div className={styles.plus}>
              <BsFillPlusCircleFill style={{ color : '#ff7112' }} />
            </div>
            <p className={styles.p6} id={styles.carrers}>Careers &amp; works</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxSection;