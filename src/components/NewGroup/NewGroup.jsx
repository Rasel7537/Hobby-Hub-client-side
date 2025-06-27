import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from '../../pages/GroupCard/GroupCard';

const NewGroup = () => {

 const peoples = useLoaderData()
 console.log(peoples);  
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
             {
              peoples.map(people => <GroupCard key={people._id} people = {people} ></GroupCard>)
             }
        </div>
    </div>
  );
};

export default NewGroup;


