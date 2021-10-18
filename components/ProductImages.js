import Image from "next/image";
import { useState, useEffect } from "react";
import previewImages from "../public/previewImages";
import { useGlobalContext } from "../context/context";
import useMediaQuery from "../hooks/useMediaQuery";

const ProductImages = ({ btn, phoneBtn }) => {
  const screen = useMediaQuery("(max-width: 768px)");
  const { setShowLightbox, showCart, isPhoneNav } = useGlobalContext();
  const [value, setValue] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const previewIndex = previewImages.find((preview, index) => index === value);
  const checkNumber = (number) => {
    if (number > previewImages.length - 1) {
      return 0;
    }
    if (number < 0) {
      return previewImages.length - 1;
    }
    return number;
  };
  const nextPicture = () => {
    setValue((value) => {
      let newValue = value + 1;
      return checkNumber(newValue);
    });
  };
  const prevPicture = () => {
    setValue((value) => {
      let newValue = value - 1;
      return checkNumber(newValue);
    });
  };

  useEffect(() => {
    if (screen) {
      setShowBtn(true);
      setShowPreview(false);
    } else {
      setShowBtn(false);
      setShowPreview(true);
    }
  }, [screen]);

  return (
    <article className="product--image--container">
      {btn && (
        <div
          className="btn-container flex-ac-jb"
          style={{ top: "35%", zIndex: "9" }}
        >
          <button onClick={prevPicture} className="left-btn flex-ac-jc">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={nextPicture} className="right-btn flex-ac-jc">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
      {phoneBtn && (
        <div
          className={
            showCart
              ? "hide-btn"
              : isPhoneNav
              ? "hide-btn"
              : "btn-container flex-ac-jb"
          }
          style={showBtn ? { top: "50%", zIndex: "9" } : { display: "none" }}
        >
          <button onClick={prevPicture} className="phone-left-btn flex-ac-jc">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={nextPicture} className="phone-right-btn flex-ac-jc">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      <div
        className="preview-image"
        onClick={() => setShowLightbox(true)}
        style={btn ? null : { cursor: "pointer" }}
      >
        <Image
          src={previewIndex.imgPreview}
          height={320}
          width={320}
          alt="product image"
          layout="responsive"
        />
      </div>
      {btn && (
        <div className="preview-images flex-ac-jb">
          {previewImages.map((previewImage, index) => (
            <button
              key={previewImage.id}
              onClick={() => setValue(index)}
              className={value === index ? "active-image flex-ac-jc" : ""}
            >
              <Image
                src={previewImage.imgSmall}
                alt="product image"
                height={70}
                width={70}
              />
            </button>
          ))}
        </div>
      )}
      {phoneBtn && (
        <div
          className="preview-images flex-ac-jb"
          style={showPreview ? null : { display: "none" }}
        >
          {previewImages.map((previewImage, index) => (
            <button
              key={previewImage.id}
              onClick={() => setValue(index)}
              className={value === index ? "active-image flex-ac-jc" : ""}
            >
              <Image
                src={previewImage.imgSmall}
                alt="product image"
                height={70}
                width={70}
              />
            </button>
          ))}
        </div>
      )}
    </article>
  );
};

export default ProductImages;
