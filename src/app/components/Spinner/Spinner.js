import React from 'react'

export default function Spinner() {
    return (
        <div class="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
            <div class="spinner-border text-danger" role="status"></div>
            <div className="loading-text">
				<strong>Loading...</strong>
			</div>
        </div>
    )
}
