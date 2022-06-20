import ViewList from "./ViewList";
import React from 'react'
import { compounds } from "../../data.js";
import "./ViewList.css"

const ViewListContainer = () => {
  return (
    <div className="container">
        <h1>Properties Table</h1>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search this blog"/>
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        <table>
            <thead>
            <tr>
                <th scope="col">Index</th>
                <th scope="col">Compounds Materials</th>
                <th scope="col">Compounds Notation</th>
                <th scope="col">Compounds Mol2</th>
                <th scope="col">Detail...</th>
            </tr>
            </thead>
        </table>
        {compounds.map((item) => (
            <ViewList
            key={item.comp_index}
            idx={item.comp_index}
            materials={item.comp_materials}
            notations={item.comp_notation}
            mol2="Click on detail..." />
        ))}
    </div>
  )
}

export default ViewListContainer