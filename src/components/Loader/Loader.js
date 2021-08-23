import React, { useState, useEffect } from "react";
import "./style.css";

export function Loader() {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCheck(true);
    }, 600);
  }, []);

  return (
    check && (
      <div className="loading-flag--wrapper">
        <div className="loading-flag--content">
          <div className="loading-flag--flag">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
          <div className="loading-flag--flag">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
          <div className="loading-flag--flag">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
          <div className="loading-flag--flag">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
        </div>
      </div>
    )
  );
}
