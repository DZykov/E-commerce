import { useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import user from "../types/user";

function Account() {

    const user: user = useAppSelector((state: RootState) => state.user);
    const dispatch = useAppDispatch();
    const [edit, setEdit] = useState<boolean>(false)
    const [userN, setUser] = useState<user>(user)
    const editMode = () => setEdit(!edit)
    // TODO
    const upgradeUser = () => {

    }

    return (
        <>
            <div className="bg-white overflow-hidden shadow rounded-lg border m-4">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Profile
                    </h3>
                    <div>
                        <input
                            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                            type="checkbox"
                            role="switch"
                            onClick={editMode}
                            id="flexSwitchCheckDefault" />
                        <label
                            className="inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="flexSwitchCheckDefault"
                        >Edit</label>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Full Name
                            </dt>

                            {edit ?
                                <>
                                    <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="fname" name="fname" placeholder={userN.firstname}></input>
                                    <br />
                                    <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="lname" name="lname" placeholder={userN.lastname}></input>
                                </>
                                :
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {userN.firstname} {userN.lastname}
                                </dd>
                            }

                        </div><div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {edit ?
                                    <>
                                        <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="email" name="email" placeholder={userN.email}></input>
                                    </>
                                    :
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userN.email}
                                    </dd>
                                }
                            </dd>
                        </div><div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Country
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {edit ?
                                    <>
                                        <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="country" name="country" placeholder={userN.country}></input>
                                    </>
                                    :
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userN.country}
                                    </dd>
                                }
                            </dd>
                        </div><div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                City
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {edit ?
                                    <>
                                        <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="city" name="city" placeholder={userN.city}></input>
                                    </>
                                    :
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userN.city}
                                    </dd>
                                }
                            </dd>
                        </div><div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Street
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {edit ?
                                    <>
                                        <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="street" name="street" placeholder={userN.street}></input>
                                    </>
                                    :
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userN.street}
                                    </dd>
                                }
                            </dd>
                        </div><div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Postal Code
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {edit ?
                                    <>
                                        <input className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" type="text" id="postalCode" name="postalCode" placeholder={userN.postalCode}></input>
                                    </>
                                    :
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {userN.postalCode}
                                    </dd>
                                }
                            </dd>
                            {edit ?
                                <>
                                    <br />
                                    <button
                                        onClick={upgradeUser}
                                        type="button"
                                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                        Save
                                    </button>
                                </>
                                :
                                <></>
                            }
                        </div>
                    </dl>
                </div>
            </div >
        </>
    )
}

export default Account;