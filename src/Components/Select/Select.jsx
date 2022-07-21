import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './Select.css';

const Select = ({
	label,
	data,
	searchable = true,
	multiselect = false,
}) => {
	const [open, setOpen] = useState(false);
	const [array, setArray] = useState([...data]);
	const [selected, setSelected] = useState([]);
	const [checkedAll, setCheckedAll] = useState(false);
	const [selectedItems, setSelectedItems] = useState(false);

	const handleChange = (e) => {
		setSelectedItems(false);

		const val = e.target.value;
		const newData = data.filter((item) =>
			typeof item === 'string'
				? item.toLowerCase().includes(val)
				: item.title.toLowerCase().includes(val),
		);
		setArray([...newData]);
	};

	const handleSelect = (e, it) => {
		setSelectedItems(true);

		const { checked } = e.target;
		console.log(checked, 'check', it);
		checked
			? setSelected([...selected, it])
			: setSelected(
					selected.filter((item) =>
						typeof item === 'string'
							? item.toLowerCase() !== it.toLowerCase()
							: item.title.toLowerCase() !== item.title.toLowerCase(),
					),
			  );
	};

	const handleSelectAll = (e, val) => {
		setSelectedItems(false);

		const boxes = document.querySelectorAll('#checkbox');
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].checked = val;
		}
		setCheckedAll(val);
		val ? setSelected([...data]) : setSelected([]);
	};

	return searchable ? (
		<div className='select-box'>
			<div className='label'>
				{!open ? (
					<span className='text'>{label}</span>
				) : (
					<input
						className='input'
						type='text'
						onChange={(e) => handleChange(e)}
					/>
				)}
				<div className='downArrow' onClick={() => setOpen(!open)}>
					<i class='fa-solid fa-angle-down'></i>
				</div>
			</div>

			{open && (
				<div className='container'>
					<div className='option'>
						{multiselect && (
							<span className='checkbox'>
								<input
									checked={checkedAll}
									type='checkbox'
									onChange={(e) => handleSelectAll(e, true)}
								/>
							</span>
						)}
						<span>Select all</span>
					</div>
					{array?.map((item) => (
						<div className='option'>
							{multiselect && (
								<span className='checkbox'>
									<input
										id='checkbox'
										type='checkbox'
										onChange={(e) => handleSelect(e, item)}
									/>
								</span>
							)}
							<span>
								{typeof item === 'string' ? item : item.title}
							</span>
						</div>
					))}
				</div>
			)}

			<div style={{ marginTop: '20px' }}>
				<button
					style={{ marginRight: '20px' }}
					onClick={() => handleSelectAll('', false)}
				>
					Clear
				</button>
				<button onClick={() => setSelectedItems(true)}>Submit</button>
			</div>
			{selectedItems && (
				<div>
					<h3>Seletcted Items: </h3>
					{selected.map((item) => (
						<span className='selected-items'>
							{typeof item === 'string' ? item : item.title}
						</span>
					))}
				</div>
			)}
		</div>
	) : null;
};

export default Select;
