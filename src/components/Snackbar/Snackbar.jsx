import React, { useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import './style.css'

const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));
  return (
    <div
      className="snackbar"
      id={showSnackbar ? "show" : "hide"}
      style={{
        backgroundColor: props.type === "success" ? "#00F593" : "#FF0033",
        color: props.type === "success" ? "black" : "white",
      }}
    >
      <div className="symbol">
        {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
});

export default Snackbar;


const SnackbarContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  #show {
    visibility: visible;
    animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
  }
  #hide {
    visibility: hidden;
  }
  @keyframes fadeIn {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

`

const Symbol = styled.div`
  flex: 20%;
`

const Message = styled.div`
  flex: 80%;
  text-align: start;
  font-weight: bold;
`
