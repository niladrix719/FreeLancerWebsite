import {AiOutlineArrowLeft , AiOutlineArrowRight} from 'react-icons/ai'

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss">
        <div className='image' style={{ backgroundImage: `url(${clickedImg})` }}></div>
        <span className="dismiss" onClick={handleClick}>
          x
        </span>
        <div onClick={handelRotationLeft} className="overlay-arrows_left">
          <div>
            <AiOutlineArrowLeft />
          </div>
        </div>
        <div onClick={handelRotationRight} className="overlay-arrows_right">
          <div>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;