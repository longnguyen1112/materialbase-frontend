import React from 'react'
import "./ViewDetail.css"
import { compounds } from "../../data.js";

const ViewDetail = () => {
  return (
    <div>
      <div className='top'>
        <div className='header'>
          <h5>Compounds Summary</h5>
          <h1> Compound Name</h1>
        </div>
        <div className='notation'>
          <h1>[NH4][Zn(CO2-CN4-C6H4-CO2)(H2O)2]</h1>
        </div>
      </div>
      <div className='bot'>
        <div className="bot-left">
          <table>
            <tbody>
              <tr>
                  <th>Full name:</th>
                  <td>diazanium;zinc;2-(4-carboxylatophenyl)tetrazole-5-carboxylate;tetrahydrate</td>
                  <td><input type='radio'/></td>
              </tr>
              <tr>
                  <th>Molecular Formula:</th>
                  <td>C18H24N10O12Zn</td>
                  <td><input type='radio'/></td>
              </tr>
              <tr>
                  <th>SMILE notation:</th>
                  <td>C1=CC(=CC=C1C(=O)[O-])N2N=C(N=N2)C(=O)[O-].C1=CC(=CC=C1C(=O)[O-])N2N=C(N=N2)C(=O)[O-].[NH4+].[NH4+].O.O.O.O.[Zn+2]</td>
                  <td><input type='radio'/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='bot-right'>
          <h4>Convert to CSV File</h4>
          <p>Select all your neccesary descriptors and click "CONVERT" to generate a CSV File with selected descriptors</p>
          <button>CONVERT</button>

          <h4>Download Mol2 File</h4>
          <p>Select all your neccesary descriptors and click "DOWNLOAD" to download a mol2 File of the compound</p>
          <button>DOWNLOAD</button>
        </div>
      </div>
    </div>
  )
}

export default ViewDetail