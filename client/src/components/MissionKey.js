import React from 'react';

function MissionKey() {
	return (
		<div className='my-3'>
			<p>
				<span className='px-3 mr-2 bg-success'></span> = Successful
			</p>
			<p>
				<span className='px-3 mr-2 bg-danger'></span> = Failed
			</p>
		</div>
	);
}

export default MissionKey;
