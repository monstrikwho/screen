import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./typePass.sass";
import "./owl-carousel.sass";

import OwlCarousel from "react-owl-carousel2";

function TypePass({ goBack, done }) {
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);

  const sliderItems = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    "|",
    ":",
    ";",
    '"',
    `${String.fromCharCode(39)}`,
    "<",
    ",",
    ">",
    ".",
    "?",
    "/",
    `${String.fromCharCode(92)}`,
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "a",
    "B",
    "b",
    "C",
    "c",
    "D",
    "d",
    "E",
    "e",
    "F",
    "f",
    "G",
    "g",
    "H",
    "h",
    "I",
    "i",
    "J",
    "j",
    "K",
    "k",
    "L",
    "l",
    "M",
    "m",
    "N",
    "n",
    "O",
    "o",
    "P",
    "p",
    "Q",
    "q",
    "R",
    "r",
    "S",
    "s",
    "T",
    "t",
    "U",
    "u",
    "V",
    "v",
    "W",
    "w",
    "X",
    "x",
    "Y",
    "y",
    "Z",
    "z",
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validatePass = () => {
    if (pass.length === 0) {
      return handleShow();
    }
    done();
  };

  useEffect(() => {
    const node = document.querySelector(".input-pass .input");

    const nodeStyles = window.getComputedStyle(node);
    const width = node.offsetWidth;
    const borderLeftWidth = parseFloat(nodeStyles.borderLeftWidth);
    const borderRightWidth = parseFloat(nodeStyles.borderRightWidth);
    const paddingLeft = parseFloat(nodeStyles.paddingLeft);
    const paddingRight = parseFloat(nodeStyles.paddingRight);
    const domWidth =
      width - borderRightWidth - borderLeftWidth - paddingLeft - paddingRight;

    if (domWidth > 230) {
      document
        .querySelector(".input-block")
        .setAttribute("class", "input-block d-flex");
    } else {
      document
        .querySelector(".input-block")
        .setAttribute("class", "input-block");
    }
  }, [pass]);

  useEffect(() => {
    setTimeout(() => {
      const nextBtn = document.querySelector(".owl-next");
      const prevBtn = document.querySelector(".owl-prev");
      const nextClick = () => nextBtn.click();
      const prevClick = () => prevBtn.click();
      let every1s = null;
      nextBtn.addEventListener("touchstart", (e) => {
        every1s = setInterval(nextClick, 60);
      });
      nextBtn.addEventListener("touchend", (e) => {
        clearInterval(every1s);
      });
      prevBtn.addEventListener("touchstart", (e) => {
        every1s = setInterval(prevClick, 60);
      });
      prevBtn.addEventListener("touchend", (e) => {
        clearInterval(every1s);
      });
    }, 0);
  });

  const options = {
    items: 7,
    dots: false,
    startPosition: 40,
    callbacks: true,
    touchDrag: false,
    nav: true,
    navText: [
      '<i class="fas fa-arrow-alt-circle-left"></i>',
      '<i class="fas fa-arrow-circle-right"></i>',
    ],
  };

  return (
    <div className="type-pass">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>The password field can not be empty!</Modal.Body>
        <div className="btn-block">
          <Button variant="outline-dark" size="lg" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Modal>

      {/* <div className="active-item"></div> */}

      <div className="input-pass">
        <div className="input-block">
          <div className="input">{pass}</div>
        </div>
        <div
          className="pass-remove"
          onClick={() => {
            const countPassArr = pass.split("");
            countPassArr.pop();
            setPass(countPassArr.join(""));
          }}
        >
          <i className="fas fa-backspace"></i>
        </div>
      </div>

      <OwlCarousel options={options}>
        {sliderItems.map((item, key) => (
          <div
            className="item"
            key={key}
            onClick={(e) => {
              setPass(pass.concat(e.target.innerText));
            }}
          >
            {item}
          </div>
        ))}
      </OwlCarousel>
      <div className="actions">
        <Button
          variant="outline-secondary"
          size="lg"
          onClick={() => {
            goBack();
          }}
        >
          Back
        </Button>{" "}
        <Button
          variant="outline-primary"
          size="lg"
          onClick={() => {
            validatePass();
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default TypePass;
