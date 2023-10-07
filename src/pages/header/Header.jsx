import './header.css';


const Header = () => {
    return (
        <div>


            <div className='w-[140px]'>
                {/* <img src="https://i.ibb.co/2gsFk3m/wedding.jpg" alt="" /> */}
            </div>

            <div className='event_container'>
                <div className="diveder gap-2 flex-col lg:flex ">
                    <div className="bg-red-50 card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-[300px]' src="https://i.ibb.co/L8w324v/wedding.jpg" alt="/" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.
                                
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-blue-300">View Details</button>
                            </div>
                        </div>
                    </div><div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-[300px]' src="https://i.ibb.co/8b3CdLN/anny.jpg" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-blue-300">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="diveder gap-2 flex-col lg:flex ">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-[300px]' src="https://i.ibb.co/F3CYDzF/birthday.jpg
" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-blue-300">View Details</button>
                            </div>
                        </div>
                    </div><div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-[300px]' src="https://i.ibb.co/2gsFk3m/Baby-shower.jpg
" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-blue-300">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="diveder gap-2 flex-col lg:flex">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-[300px]' src="https://i.ibb.co/0ZCWnHX/Engagement.jpg
" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-blue-300">View Details</button>
                            </div>
                        </div>
                    </div><div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-[300px]' src="https://i.ibb.co/TYp95Sk/party.jpg
" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-blue-300">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default Header;