import React, { useState } from 'react';

interface Member {
    member: string;
    email: string;
}

const AddGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [totalExpense, setTotalExpense] = useState('');
    const [membersList, setMembersList] = useState<Member[]>([]);
    const [newMember, setNewMember] = useState('');
    const [newMemberEmail, setNewMemberEmail] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');


    const handleAddGroup = () => {

        setGroupName('');
        setGroupDescription('');
        setTotalExpense('');
        setMembersList([]);
        setNewMember('');
        setNewMemberEmail('');
        setSelectedCategory('');
    };

    const handleAddMember = () => {
        if (newMember && newMemberEmail) {
            setMembersList([...membersList, { member: newMember, email: newMemberEmail }]);
            setNewMember('');
            setNewMemberEmail('');
        }
    };

    const handleRemoveMember = (index: number) => {
        const updatedMembersList = [...membersList];
        updatedMembersList.splice(index, 1);
        setMembersList(updatedMembersList);
    };

    return (
        <>


            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <form onSubmit={handleAddGroup} className="p-3">
                    <div className="mb-4.5">
                        <label htmlFor="groupName" className="mb-1 block text-black dark:text-white">
                            Group Name:
                        </label>
                        <input
                            type="text"
                            id="groupName"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            required
                            className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>

                    <div className="mb-4.5">
                        <label htmlFor="groupDescription" className="mb-1 block text-black dark:text-white">
                            Description:
                        </label>
                        <textarea
                            id="groupDescription"
                            value={groupDescription}
                            onChange={(e) => setGroupDescription(e.target.value)}
                            //rows="4"
                            required
                            className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        ></textarea>
                    </div>

                    <div className="mb-4.5">
                        <label htmlFor="totalExpense" className="mb-1 block text-black dark:text-white">
                            Total Expense:
                        </label>
                        <input
                            type="number"
                            id="totalExpense"
                            value={totalExpense}
                            onChange={(e) => setTotalExpense(e.target.value)}
                            required
                            className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    <div className="mb-4.5">
                        <label htmlFor="newMember" className="mb-1 block text-black dark:text-white">
                            New Member:
                        </label>
                        <div className="flex">
                            <input
                                type="text"
                                id="newMember"
                                value={newMember}
                                onChange={(e) => setNewMember(e.target.value)}
                                placeholder="Member's name"
                                className="w-full rounded-l border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                            <input
                                type="text"
                                id="newMemberEmail"
                                value={newMemberEmail}
                                onChange={(e) => setNewMemberEmail(e.target.value)}
                                placeholder="Email"
                                className="w-full border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                            <button
                                type="button"
                                onClick={handleAddMember}
                                className="bg-primary text-white py-2 px-4 rounded-r hover:bg-primary-dark transition"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                    {membersList.length > 0 && (
                        <div className="mb-4.5">
                            <label className="mb-1 block text-black dark:text-white">Members:</label>
                            <ul>
                                {membersList.map((member, index) => (
                                    <li key={index} className="flex items-center mb-2">
                                        <div className="flex items-center mb-2">
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveMember(index)}
                                                className="bg-primary px-2 py-1 text-white rounded-full hover:bg-primary-dark transition"
                                                style={{ width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem' }}
                                            >
                                                -
                                            </button>
                                            <span>{member.member}: {member.email}</span>
                                        </div>


                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="mb-4.5">
                        <label htmlFor="selectedCategory" className="mb-1 block text-black dark:text-white">
                            Category:
                        </label>
                        <select
                            id="selectedCategory"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            required
                            className="w-full rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="trip">Trip</option>
                            <option value="couple">Couple</option>
                            <option value="friends">Friends</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition"
                    >
                        Add Group
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddGroup;
