import React from 'react'
import './ViewList.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCompound, retrieveCompounds, findCompoundByTitle, deleteAllCompounds } from '../../Compounds/Action/compoundAction';

const ViewList = ({idx, materials, notations, mol2}) => {
  //initial state
  const [currentCompound, setCurrentCompound] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const compounds = useSelector(state => state.compounds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveCompounds());
  },[]);

  	const onChangeSearchTitle = e => {
		const searchTitle = e.target.value;
		setSearchTitle(searchTitle);
	};

	const onChangeSearchID = e => {
		const searchID = e.target.value;
		setCurrentIndex(currentIndex);
	};

	const refreshData = () => {
		setCurrentCompound(null);
		setCurrentIndex(-1);
	};

	const setActiveCompound = (compound, index) => {
		setCurrentCompound(compound);
		setCurrentIndex(index);
	};

	const removeAllCompounds = () => {
		dispatch(deleteAllCompounds())
		.then(response => {
			console.log(response);
			refreshData();
		})
		.catch(err => {
			console.log(err);
		});
	};

  const findByID = (index) =>{
    refreshData();
    dispatch(retrieveCompound(index));
  }

	const findByTitle = () => {
		refreshData();
		dispatch(findCompoundByTitle(searchTitle));
	};

	const downloadMol2 = () => {
		const element = currentCompound.comp_mol2;
		const url = window.URL.createObjectURL(
			new Blob([element])
		);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute(
			'download',
			'file.mol2'
		);

		document.body.appendChild(link);
		link.click();
		link.parentNode.removeChild(link);
	};

	const downloadCSV = () => {
		const element = currentCompound.comp_properties;
		const url = window.URL.createObjectURL(
			new Blob([element])
		);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute(
			'download',
			'file.csv'
		);

		document.body.appendChild(link);
		link.click();
		link.parentNode.removeChild(link);
	};

  return (
    <div>
      <table>
        <tbody>
          <tr className='even'>
            <th className='i' scope='row'>{idx}</th>
            <td className='m' >{materials}</td>
            <td className='n'>{notations}</td>
            <td className='m2'>{mol2}</td>
            <td><Link to={"/compounds/:"+ idx} className='detail-button'><button>Details</button></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ViewList