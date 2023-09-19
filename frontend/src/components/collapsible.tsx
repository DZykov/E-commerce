import React, { ReactElement, useState } from "react";

const Collapsible: React.FC<{ open: boolean, title: string, children: ReactElement[] }> = ({ open, title, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div className="mx-auto bg-indigo-100 mt-4">
                <div>
                    <div className="p-3 border-bottom">

                        <div className="table w-full table-fixed border-spacing-0.5">

                            <div className="table-cell float-left">
                                <h6 className="font-weight-bold">{title}</h6>
                            </div>
                            <div className="table-cell float-right">
                                <button type="button" className="btn" onClick={handleFilterOpening}>
                                    {!isOpen ? (
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" /></svg>
                                    ) : (
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="border-bottom">
                    <div>{isOpen && <div className="p-3">{children}</div>}</div>
                </div>
            </div>
        </>
    );
};

export default Collapsible;