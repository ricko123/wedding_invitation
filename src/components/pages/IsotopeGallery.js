import React, {useState,useEffect } from 'react';
import { Isotope } from 'isotope-layout';
function IsotopeGallery(){
    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState("*");
    // initialize an Isotope object with configs
  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows"
      })
    );
  }, []);

  // handling filter key change
  useEffect(() => {
      if (isotope) {
        filterKey === "*"
          ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${filterKey}` });
      }
    },
    [isotope, filterKey]
  );
  return (
    <div>
      <ul>
        <li onClick={() => setFilterKey("*")}>Show Both</li>
        <li onClick={() => setFilterKey("vege")}>Show Veges</li>
        <li onClick={() => setFilterKey("fruit")}>Show Fruits</li>
      </ul>
      <hr />
      <ul className="filter-container">
        <div className="filter-item vege">
          <span>Cucumber</span>
        </div>
        <div className="filter-item fruit">
          <span>Apple</span>
        </div>
        <div className="filter-item fruit">
          <span>Orange</span>
        </div>
        <div className="filter-item fruit vege">
          <span>Tomato</span>
        </div>
      </ul>
    </div>
  );
}
export default IsotopeGallery;